var myLatlng = new google.maps.LatLng(40.85, -96.75);

var mapOptions = {
  zoom: 2,
  center: myLatlng
}

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
var mapClicker;


