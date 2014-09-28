function spotBrowser(){

  google.maps.event.clearListeners(map);
  $('.spot-creation-panel').css('visibility', 'hidden')

  $('#create-new-spot-button').on('click', function(){
      spotCreator();
  })
}