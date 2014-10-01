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