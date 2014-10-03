$('#create-new-spot-button').on('click', function(){
      spotCreator();
})

function spotBrowser(){

  google.maps.event.clearListeners(map);
  $('.spot-creation-panel').css('visibility', 'hidden')
  $('.spot-creation-panel form').css('visibility', 'hidden')

  $('#create-new-spot-button').on('click', function(){
      spotCreator();
  })
  setSpotSelector();
}

function spotDisplay(){

  google.maps.event.clearListeners(map);

  $('.spot-creation-panel').css('visibility', 'hidden')

  $('.spot-display-panel').css('visibility', 'visible')

}
