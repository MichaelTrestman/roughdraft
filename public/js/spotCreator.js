
function spotCreator(){

  google.maps.event.clearListeners(map);

  $('.spot-creation-panel').css('visibility', 'visible')

  mapCLicker = google.maps.event.addListener(map, "click", function (
    event) {

    var latitude = event.latLng.lat(),
        longitude = event.latLng.lng(),
        latLng = [latitude, longitude];

        $('.x-coord').text(longitude)
        $('.y-coord').text(latitude)

    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map,
      title: 'Hello World!'
    });
  });


  $('.exit-button').on('click', function(){
    spotBrowser();
  })

  $('.spot-creation-form').on('submit', function(event){

    event.preventDefault();

    data = $(this).serialize()

    data["latitude"] =  $('.x-coord').text();
    data["longitude"] = $('.y-coord').text();

    $.ajax({
      type: 'post',
      url: '/spots/create',
      dataType: 'json',
      data: data

    }).done(function(serverData){

      alert(serverData.new_spot_id)

    }).always(function(){

    })
  })
    updateSpots();
}