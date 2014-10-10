$('#delete-spot-button').on('click', function(e){

  $.ajax({

    type: 'delete',
    url: '/spots/delete',
    // same comment about content_type
    datatype: 'json',
    data: {id: currentSpot.id}

  }).done(function(){
    console.log("spot deleted!")
    updateSpots();
  }).fail(function(){
    console.log("uh oh, spot deletion failed!")
  })
})
