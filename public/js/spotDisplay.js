$('#spot-list ul').on('click', 'li', function(e){

  var this_id = $(this).attr('id')
  this_id = parseInt(this_id.split('-')[2]);

  var this_spot = getSpotbyID(this_id);

  console.log(this_spot)
  // displaySpot(this_spot)

  $('.spot-display-panel').css("visibility", "visible")

})

function getSpotbyID(id){

  $.ajax({

  type: 'post',
  url: '/spots/find',
  data: {id: id}

  }).done(function(serverData){
    return serverData
  }).fail(function(){alert('some shit went wrong with aaaaajax')})

}