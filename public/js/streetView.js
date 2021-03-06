var crazyVolcanoPlace ={"position":{"k":42.497667,"B":141.14683300000002},"pov":{"heading":108.15742692732572,"pitch":12.716486667265169}}


var positionk, positionB, povHeading, povPitch;

var getPOV = function(){

  positionk = panorama.getPosition().k;
  positionB = panorama.getPosition().B;
  povHeading = panorama.getPov().heading;
  povPitch = panorama.getPov().pitch;

  var position = new google.maps.LatLng(
    positionk,
    positionB
  )
  var poV = {
    heading: povHeading, pitch: povPitch
  }

  return {position: position, pov: poV}
}

var setPOV = function(){
  panorama.setPosition(z.position);
  panorama.setPov(z.pov);
}





// // panorama.setVisible(true)


// // x=map.getCenter()
// // panorama.setPosition(x)

// var somePlace = new google.maps.LatLng(12, 12)
// var panorama;
// panorama = map.getStreetView();
//   panorama.setPosition(somePlace);
//   panorama.setPov({
//     heading: 265,
//     pitch:0}
//   );
// }

$('#street-view-on').on('click', function(){

  panorama.setPosition( new google.maps.LatLng(current_pov.position.k, current_pov.position.B))

    heading = current_pov.pov.heading
    pitch = current_pov.pov.pitch

  panorama.setPov({

    heading: heading,
    pitch: pitch

  })

  map.setStreetView(panorama);
  panorama.setVisible(true)
  console.log("panorama launched:")
  console.log(panorama)
})


$('#street-view-off').on('click', function(){

  var panorama = map.getStreetView();

  panorama.setVisible(false)

})
$('#exit-spot-display').on('click', function(){
  marker.setVisible(false)

  $('.spot-display-panel').css('visibility', 'hidden')
  spotBrowser();

})

function streetView(){

  //set css to streetview mode...
  //set jquery to streetview mode
  //set map shit to streetview mode

  var fenway = new google.maps.LatLng(42.345573,-71.098326);

  var mapOptions = {
    center: fenway,
    zoom: 14
  };


  var panoramaOptions = {
    position: fenway,
    pov: {
      heading: 34,
      pitch: 10
    }
  };

  var panorama = new google.maps.StreetViewPanorama(document.getElementById("map-canvas"), panoramaOptions);
  map.setStreetView(panorama);
}