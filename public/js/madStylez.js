$('.button').on('click', function(){
  console.log('hey')
  function randomColor (){
    rand = function(){return Math.floor(Math.random()*255)}
    return 'rgb(' + rand().toString() + ',' + rand().toString()  + ',' +  rand().toString() +  ')'
  }
  console.log(this)
  $(this).css('color', randomColor())

})