function updateSpots(){

  data = {}
  $.ajax({

  type: 'get',
  url: '/spots/list',
  dataType: 'json',
  data: data

  }).done(function(serverData){

    // serverData
    for (var i = 0; i < serverData.length; i++) {
      thisSpot = serverData[i]
      $('#spot-list ul').append("<li id='spot-list-"+ thisSpot.id +"'>" + thisSpot.title + "</li>");
    };

  }).always(function(){

  })
  // $('#spot-list').css('overflow', 'scroll')

}


