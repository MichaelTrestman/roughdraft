updateSpots();
spotBrowser();
addressInputOn();

$('.spot-creation-exit-button').on('click', function(){
  // spotCreator();
  $('.spot-creation-panel').css('visibility', 'hidden')
})

$('.spot-display-exit-button').on('click', function(){
  // spotCreator();
  $('.spot-display-panel').css('visibility', 'hidden')
})

$('.spot-display-panel').css('visibility', 'hidden')


