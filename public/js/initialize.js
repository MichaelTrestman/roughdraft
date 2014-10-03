updateSpots();
spotBrowser();
addressInputOn();

$('.spot-creation-exit-button').on('click', function(){
  $('.spot-creation-panel').css('visibility', 'hidden')
})

$('.spot-display-exit-button').on('click', function(){
  $('.spot-display-panel').css('visibility', 'hidden')
})

$('.spot-display-panel').css('visibility', 'hidden')

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(0,0),
      map: map,
      title: 'Hello World!'
    });

marker.setVisible(false);
var panorama = map.getStreetView();
