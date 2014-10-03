var current_pov;

function spotCreator(){

  google.maps.event.clearListeners(map);
  google.maps.event.addListener(map, "click", function (
  event) {

  var latitude = event.latLng.lat(),
      longitude = event.latLng.lng(),
      latLng = [latitude, longitude];

      $('.x-coord').text(longitude)
      $('.y-coord').text(latitude)

      marker.setPosition(event.latLng)
      marker.setVisible(true)
});

  $('#spot-display-panel').css('visibility', 'hidden')
  $('.spot-creation-form').css('visibility', 'visible')
  $('.spot-creation-panel').css('visibility', 'visible')


  var this_pov;


}