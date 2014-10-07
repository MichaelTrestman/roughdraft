updateSpots();
spotBrowser();
addressInputOn();


$('.spot-display-panel').css('visibility', 'hidden')

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(0,0),
      map: map,
      title: 'Hello World!'
    });

marker.setVisible(false);
var panorama = map.getStreetView();

