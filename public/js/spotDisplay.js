var currentSpot;

function setSpotSelector(){

  $('#spot-list ul').on('click', 'li', function(e){

    var this_id = $(this).attr('id')
    this_id = parseInt(this_id.split('-')[2]);

    // displaySpot(this_id)

    updateSpotbyID(this_id);

    // currentSpot = this_spot

    // console.log(this_spot)
    // displaySpot(this_spot)


  })
}

function displaySpot(spot_id){
}


function updateSpotbyID(id){

  $.ajax({

    type: 'post',
    url: '/spots/find',
    datatype: 'json',
    data: {id: id}

  }).done(function(serverData){
    currentSpot = JSON.parse(serverData)
    currentSpot.lat = parseInt(currentSpot.lat)
    currentSpot.lng = parseInt(currentSpot.lng)
    // currentSpot.pov = JSON.parse(currentSpot.pov)

    if (currentSpot.lat)
    map.setCenter(new google.maps.LatLng(currentSpot.lat, currentSpot.lng))


    console.log(currentSpot)

    $('#spot-display-panel #spot-title').text(currentSpot.title)

    $('#spot-display-panel #spot-description').text(currentSpot.description)

    $('#spot-display-panel #address').text(currentSpot.address)

    $('.lat').text(currentSpot.lat.toString())
    $('.lng').text(currentSpot.lng.toString())

    $('.spot-creation-panel').css("visibility", "hidden")

    $('.spot-display-panel').css("visibility", "visible")

    marker.setPosition(new google.maps.LatLng(currentSpot.lat, currentSpot.lng))
    marker.setVisible(true)

  }).fail(function(){alert('some shit went wrong with aaaaajax')})

}