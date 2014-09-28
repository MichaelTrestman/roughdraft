function spotCreator(){

  google.maps.event.removeListener(mapClicker);

  mapCLicker = google.maps.event.addListener(map, "click", function (event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    console.log( latitude + ', ' + longitude );
    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map,
      title: 'Hello World!'
    });

  });



}