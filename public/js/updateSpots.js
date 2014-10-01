function updateSpots(){

  data = {}
  $.ajax({

  type: 'get',
  url: '/spots/list',
  dataType: 'json',
  data: data

  }).done(function(serverData){

    serverData
    for (var i = 0; i < serverData.length; i++) {
      $('#spot-list ul').append("<li>" + serverData[i].title + "</li>");
    };

  }).always(function(){

  })
  // $('#spot-list').css('overflow', 'scroll')

}


