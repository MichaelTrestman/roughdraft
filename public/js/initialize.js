spotBrowser();

$('#create-new-spot-button').on('click', function(){

      $('.spot-creation-panel').css('visibility', 'visible')

})

$('.exit-button').on('click', function(){
  $('.spot-creation-panel').css('visibility', 'hidden')
})

