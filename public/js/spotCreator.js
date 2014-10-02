
function spotCreator(){

  google.maps.event.clearListeners(map);

  $('#spot-display-panel').css('visibility', 'hidden')

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

    form = $(this)
    title = form.children('.title').val();
    description = form.children('.new-description').val();
    address = form.children('.new-address').val();
    latitude = $('.x-coord').text();
    longitude = $('.y-coord').text();

    data = {
      title: title,
      description: description,
      address: address,
      latitude: latitude,
      longitude: longitude
    }
    console.log(data)

    $.ajax({
      type: 'post',
      url: '/spots/create',
      dataType: 'json',
      data: data

    }).done(function(serverData){
      updateSpots();
      spotBrowser();
    }).fail(function(){
      alert('oh fuck spot creation failed!!')

    }).always(function(){

    })
  })

}