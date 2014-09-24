$(document).ready(function() {

    var myLatlng = new google.maps.LatLng(25.433043377651217, 7.859001159667969);

     var coolLatLngs = [[25.433043377651217, 7.859001159667969]]

    var mapOptions = {
      zoom: 4,
      center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });

    var overlay = new google.maps.OverlayView();

    overlay.draw = function() {};

    overlay.setMap(map);
    google.maps.event.addListener(map, "click", function (event) {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      console.log( latitude + ', ' + longitude );
    });





    // google.maps.event.addListener(marker, 'mouseover', function() {

    //   var projection = overlay.getProjection();
    //   var pixel = projection.fromLatLngToContainerPixel(marker.getPosition());
    //   // use pixel.x, pixel.y ... (after some rounding)

    //   console.log(projection)

    // });












});

