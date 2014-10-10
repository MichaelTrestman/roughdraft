function updateSpots(){
  // don't forget 'var'! don't want global variables!
  data = {}
  $.ajax({

  type: 'get',
  url: '/spots/list?collection_id=#{currentCollection.id}',
  // set the content_type on your server and this won't be necessary
  dataType: 'json',
  data: data

  }).done(function(serverData){
    console.log('list updated!')
    // serverData
    $('#spot-list ul li').remove();

    // separate this logic out into its own function
    for (var i = 0; i < serverData.length; i++) {
      thisSpot = serverData[i]
      $('#spot-list ul').append("<li draggable='true' id='spot-list-"+ thisSpot.id +"'>" + thisSpot.title + "</li>");
    };

  }).always(function(){

  })
  // don't forget to add 'fail' callback for error handling
  // $('#spot-list').css('overflow', 'scroll')

}


