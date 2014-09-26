



// Copyright by Karol Guciek (http://guciek.github.io)
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 2 or 3.

function error(msg) {
	try {
		var div = document.getElementById("error");
		if (msg) {
			div.style.display = "block";
			div.innerText = "Error: "+msg;
		} else {
			div.style.display = "none";
		}
	} catch(e) {
		if (msg) { alert("Error: "+msg); }
	}
}

function mandelbrot_draw(acontext, aw, ah, areal, aimag, aradius, amaxiter) {
	var c = acontext;
	var w = aw;
	var h = ah;
	var real = areal;
	var imag = aimag;
	var zoom = (2*aradius)/((h < w) ? h : w);
	var maxiter = amaxiter;
	var time = 0;
	function mapped_point(x, y) {
		return {
			real: (x-w*0.5)*zoom + real,
			imag: (h*0.5-y)*zoom + imag
		};
	}
	function hsv2rgb(i) {
		i.h -= Math.floor(i.h);
		i.h *= 6.0;
		if (i.s < 0) { i.s = 0; }
		if (i.s > 1) { i.s = 1; }
		if (i.v < 0) { i.v = 0; }
		if (i.v > 1) { i.v = 1; }
		var f = i.h - Math.floor(i.h);
		var r, g, b;
		switch (Math.floor(i.h)) {
			case 0: r = 1; g = 1-(1-f)*i.s; b = 1-i.s; break;
			case 1: r = 1-i.s*f; g = 1; b = 1-i.s; break;
			case 2: r = 1-i.s; g = 1; b = 1-(1-f)*i.s; break;
			case 3: r = 1-i.s; g = 1-i.s*f; b = 1; break;
			case 4: r = 1-(1-f)*i.s; g = 1-i.s; b = 1; break;
			default: r = 1; g = 1-i.s; b = 1-i.s*f;
		}
		r *= i.v;
		g *= i.v;
		b *= i.v;
		return { r:r, g:g, b:b };
	}
	function mandelbrot(pt) {
		var r0 = pt.real;
		var i0 = pt.imag;
		var r = r0;
		var i = i0;
		var nr, ni;
		var iter = 0;
		while (iter < maxiter) {
			iter++;
			nr = r*r - i*i;
			ni = 2*r*i;
			r = nr+r0;
			i = ni+i0;
			if (r*r+i*i >= 4) { break; }
		}
		if (r*r+i*i >= 4) {
			nr = r*r - i*i;
			ni = 2*r*i;
			r = nr+r0;
			i = ni+i0;
			nr = r*r - i*i;
			ni = 2*r*i;
			r = nr+r0;
			i = ni+i0;
			time += iter;
			return iter + 10.0 - Math.log(Math.log(r*r+i*i)*0.5)*1.44269504;
		}
		time += maxiter;
		return -1;
	}
	function palette(d) {
		time += 100;
		var v = Math.sin(d*0.1847969)*0.5+0.5;
		return hsv2rgb({
			h: d*0.00521336,
			s: (Math.sin(d*0.162012467)*0.5+0.5) * (1-v),
			v: v});
	}
	function interpolate(a, b, t) {
		return {
			r: a.r + t*(b.r-a.r),
			g: a.g + t*(b.g-a.g),
			b: a.b + t*(b.b-a.b)
		};
	}
	function log_color(d) {
		if (d < 0) { return { r:0, g:0, b:0 }; }
		d += 50;
		d = Math.log(d);
		d *= 100;
		var p = Math.floor(d);
		return interpolate(palette(p), palette(p+1), d-p);
	}
	function html_color(m) {
		function int256(f) {
			if (f <= 0) { return 0; }
			if (f >= 0.999) { return 255; }
			return Math.floor(f*256);
		}
		return "rgb("+int256(m.r)+","+int256(m.g)+","+int256(m.b)+")";
	}
	var first_tile_size = 128;
	var sidestart = 0;
	var sidestep = 0;
	var tile = first_tile_size;
	var sx = Math.floor(w/2);
	var sy = Math.floor(h/2);
	var antialias = false;
	function draw_tile(x, y) {
		var tilex = sx + x*tile;
		var tiley = sy + y*tile;
		if (tilex+tile/2 < 0) { return; }
		if (tiley+tile/2 < 0) { return; }
		if (tilex-tile/2 >= w) { return; }
		if (tiley-tile/2 >= h) { return; }
		var rgb;
		if (antialias) {
			rgb = interpolate(
				interpolate(
					log_color(mandelbrot(mapped_point(tilex-0.25, tiley-0.25))),
					log_color(mandelbrot(mapped_point(tilex-0.25, tiley+0.25))),
					0.5
				),
				interpolate(
					log_color(mandelbrot(mapped_point(tilex+0.25, tiley-0.25))),
					log_color(mandelbrot(mapped_point(tilex+0.25, tiley+0.25))),
					0.5
				),
				0.5
			);
		} else {
			if (x < 0) { x = -x; }
			if (y < 0) { y = -y; }
			if ((tile > 1.5) && (tile < first_tile_size) &&
				(x%2 === 0) && (y%2 === 0)) {
				return;
			}
			rgb = log_color(mandelbrot(mapped_point(tilex, tiley)));
		}
		c.fillStyle = html_color(rgb);
		c.fillRect(Math.floor(tilex-tile/2), Math.floor(tiley-tile/2),
			tile, tile);
		time += 10;
	}
	function step() {
		if (((sidestart-1)*tile*2 > h) && ((sidestart-1)*tile*2 > w)) {
			if (antialias) {
				return false;
			} else {
				tile = Math.floor(tile/2);
				if (tile < 3) {
					antialias = true;
					tile = 1;
				}
			}
			sidestart = 0;
			sidestep = 0;
		}
		if (sidestart < 0.5) {
			draw_tile(0, 0);
		} else {
			draw_tile(-sidestart+sidestep, -sidestart);
			draw_tile(sidestart, -sidestart+sidestep);
			draw_tile(sidestart-sidestep, sidestart);
			draw_tile(-sidestart, sidestart-sidestep);
		}
		sidestep++;
		if (sidestep+1 > sidestart*2) {
			sidestart++;
			sidestep = 0;
		}
		return true;
	}
	function steps(timefactor) {
		time = 0;
		var maxtime = 10000*timefactor;
		while (step()) {
			if ((time > maxtime) &&
				(tile < first_tile_size-0.1))
				{ return true; }
		}
		return false;
	}
	return {
		step: steps,
		mapped_point: mapped_point,
		pixel_size: zoom
	};
}

function hashlocation() {
	function read() {
		if (window.location.hash) {
			return window.location.hash.substring(1);
		}
		return '';
	}
	var last = read();
	var ret = {
		onuserchange: function() {},
		set: function(h) {
			last = String(h);
			window.location = '#'+last;
		},
		get: function() {
			return last;
		}
	};
	function check() {
		var loc = read();
		if (loc === last) { return; }
		last = loc;
		ret.onuserchange();
	}
	setInterval(check, 250);
	window.addEventListener("hashchange", check, false);
	return ret;
}

function throttle(f, ms) {
	var last = 0;
	return function() {
		var time = new Date().getTime();
		if (time - last >= ms) {
			last = time;
			f.apply(this, arguments);
		}
	};
}

function userinterface() {
	var view;
	try {
		view = document.getElementById("view").getContext("2d");
		if (!view) { throw 1; }
	} catch(err) {
		throw "Your web browser does not support "+
			"the <canvas> element!";
	}
	var pt = { real:NaN, imag:NaN };
	var radius = NaN;
	var maxiter = NaN;
	var draw;
	var last_redraw_time = 0;
	var hash = hashlocation();
	function cur_time_seconds() {
		return (new Date().getTime())*0.001;
	}
	function redraw(writehash) {
		draw = mandelbrot_draw(view, view.canvas.width,
			view.canvas.height, pt.real, pt.imag, radius, maxiter);
		last_redraw_time = cur_time_seconds();
		if (writehash) {
			hash.set(pt.real+";"+pt.imag+";"+radius+";"+maxiter);
		}
		try {
			document.title = "Mandelbrot at ("+pt.real+", "+pt.imag+")";
		} catch(err) {}
	}
	function resize() {
		view.canvas.width = window.innerWidth;
		view.canvas.height = window.innerHeight;
		redraw(false);
	}
	function read_hash() {
		var loc = hash.get().split(";");
		while((loc.length) < 4) { loc[loc.length] = ''; }
		pt.real = parseFloat(loc[0]);
		pt.imag = parseFloat(loc[1]);
		radius = parseFloat(loc[2]);
		maxiter = parseInt(loc[3], 10);
		if (isNaN(pt.real)) { pt.real = -0.5; }
		if (isNaN(pt.imag)) { pt.imag = 0; }
		if (isNaN(radius) || (radius <= 0)) { radius = 2; }
		if (isNaN(maxiter)) { maxiter = 1000; }
		if (maxiter < 100) { maxiter = 100; }
		if (maxiter > 100000) { maxiter = 100000; }
		redraw(false);
	}
	read_hash();
	resize();
	hash.onuserchange = read_hash;
	window.onresize = resize;
	function click(e) {
		try { e.preventDefault(); } catch(err) {}
		if (e.changedTouches &&
			(e.changedTouches.length >= 1)) {
				e = e.changedTouches[0];
		}
		if ((e.pageX < window.innerWidth*0.15) ||
				(e.pageX > window.innerWidth*0.85)) {
			// Zoom out
			if (radius < 3) {
				radius *= 2;
				redraw(true);
			}
		} else if (draw.pixel_size > 0.0000000000000002) {
			// Zoom in
			radius /= 2;
			pt = draw.mapped_point(e.pageX, e.pageY);
			redraw(true);
		}
		return false;
	}
	document.addEventListener('mousedown', click, false);
	document.addEventListener('touchstart', click, false);
	function display_box(style) {
		var e = document.getElementsByTagName("nav")[0];
		e.onmousedown = function(event) {
			event.stopPropagation();
		};
		if (e.style.display === style) { return; }
		e.style.display = style;
	}
	function speedcontrol(calc_fun) {
		var last_check_passed = cur_time_seconds();
		function passed_time() {
			var c = cur_time_seconds();
			var p = c - last_check_passed;
			last_check_passed = c;
			return p;
		}
		var factor = 1;
		var info_factorsum = 0, info_timesum = 0;
		setInterval(function() {
			if (info_timesum > 0.5) {
				document.getElementById("info").innerHTML =
					'Calculation speed: '+
					(info_factorsum/(info_timesum*30)).toFixed(2);
				info_factorsum = 0;
				info_timesum = 0;
			}
		}, 1000);
		var time_for_drawing = 0;
		function step() {
			var dt = passed_time();
			var r = calc_fun(factor);
			if (r) {
				var ct = passed_time();
				info_factorsum += factor;
				info_timesum += ct;
				time_for_drawing += ct*0.2-dt;
				if ((ct*0.2-dt)*time_for_drawing > 0) {
					factor *= (time_for_drawing < 0) ?
						1.05 : 0.95;
					if (factor < 0.01) { factor = 0.01; }
					if (factor > 1000) { factor = 1000; }
				}
			}
			display_box((r || (cur_time_seconds() <
				last_redraw_time + 5)) ? 'block' : 'none');
		}
		return {
			step: step
		};
	}
	return {
		step: speedcontrol(function (timefactor) {
			return draw.step(timefactor);
		}).step
	};
}

function timer() {
	var d = null;
	function step() {
		try {
			if (d === null) {
				d = userinterface();
			} else {
				d.step();
			}
			setTimeout(step, 1);
			error();
		} catch (err) {
			error(err);
		}
	}
	step();
}

timer();

	