var geocoder = new google.maps.Geocoder();
var map;

  // var latlng = new google.maps.LatLng(-34.397, 150.644);
  // var mapOptions = {
  //   zoom: 8,
  //   center: latlng
  // }


function codeAddress(address) {

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
function addressInputOn(){

  $('.address-panel').css('visibility', 'visible');

  $('#address-input-form').on('submit', function(event){

    event.preventDefault();
    console.log($('#address-input').val())
    var address = $('#address-input').val()
    codeAddress(address);
  })
};



//https:maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY

// https://maps.googleapis.com/maps/api/js?v=3.exp&'


        // map.setCenter(marker.getPosition());

    // send googlemaps request for reverse geocode, reload map with new latlng
