var myLatlng = new google.maps.LatLng(40.85, -96.75);

var mapOptions = {
  zoom: 6,
  center: myLatlng
}

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


var mapClicker;


