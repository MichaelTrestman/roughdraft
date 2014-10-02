

function spotCreator(){

  google.maps.event.clearListeners(map);

  $('#spot-display-panel').css('visibility', 'hidden')
  $('.spot-creation-form').css('visibility', 'visible')
  $('.spot-creation-panel').css('visibility', 'visible')


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


  $('.exit-button').on('click', function(){
    spotBrowser();
  })

  $('.spot-creation-form').on('submit', function(e){
    e.preventDefault();
    console.log('submitting creation form!')



    form = $(this)
    title = form.children('.title').val();
    description = form.children('.new-description').val();
    address = form.children('.new-address').val();
    latitude = parseInt($('.y-coord').text());
    longitude = parseInt($('.x-coord').text());

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
    $('.spot-creation-form').css('visibility', 'hidden')
      $('.x-coord').text('')
      $('.y-coord').text('')
      $('.spot-creation-form input').val('')
  })

}