function updateSpots(){

  data = {}
  $.ajax({

  type: 'get',
  url: '/spots/list?collection_id=#{currentCollection.id}',
  dataType: 'json',
  data: data

  }).done(function(serverData){
    console.log('list updated!')
    // serverData
    $('#spot-list ul li').remove();

    for (var i = 0; i < serverData.length; i++) {
      thisSpot = serverData[i]
      $('#spot-list ul').append("<li draggable='true' id='spot-list-"+ thisSpot.id +"'>" + thisSpot.title + "</li>");
    };

  }).always(function(){

  })
  // $('#spot-list').css('overflow', 'scroll')

}


