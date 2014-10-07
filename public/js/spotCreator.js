var current_pov;

function spotCreator(){

  google.maps.event.clearListeners(map);
  google.maps.event.addListener(map, "click", function (
  event) {

  var latitude = event.latLng.lat(),
      longitude = event.latLng.lng(),
      latLng = [latitude, longitude];

      $('.x-coord').text(longitude)
      $('.y-coord').text(latitude)

      marker.setPosition(event.latLng)
      marker.setVisible(true)
});

  $('#spot-display-panel').css('visibility', 'hidden')
  $('.spot-creation-form').css('visibility', 'visible')
  $('.spot-creation-panel').css('visibility', 'visible')


  var this_pov;


}




$('.spot-creation-form').on('submit', function(e){
  e.preventDefault();

  var allTheFieldsAreFilled = true;

  // $.each(fields, function(index, field){
  //   field.val() == "" ? allTheFieldsAreFilled = false : console.log('field verified')
  // })

  // if (
  //   (
  //     $('.spot-creation-form').children('.new-address').first().val() === ""
  //   ) || (
  //     $('.spot-creation-form').children('.title').first().val() === ""
  //   ) || (
  //     $('.y-coord').text() === ""
  //   ) || (
  //     $('.x-coord').text() === ""
  //   )
  // ) {
  //   allTheFieldsAreFilled = false;
  //   console.log('field(s) missing');
  // } else{
  //   allTheFieldsAreFilled = true;
  //   console.log('field verified');
  // };


  // $('.spot-creation-form').children('.new-address').first().val() === "" ? allTheFieldsAreFilled = false : console.log('field verified')

  // $('.spot-creation-form').children('.title').first().val() === "" ? allTheFieldsAreFilled = false : console.log('field verified')

  // $('.y-coord').text() == "" ? allTheFieldsAreFilled = false : console.log('field verified')

  // $('.x-coord').text() == "" ? allTheFieldsAreFilled = false : console.log('field verified')

  if (allTheFieldsAreFilled===true) {

    console.log('submitting creation form!')

    var form = $('.spot-creation-form')
    title = form.children('.title').val();
    description = form.children('.new-description').val();
    address = form.children('.new-address').val();
    link = form.children('.new-link').val();
    latitude = parseFloat($('.y-coord').text());
    longitude = parseFloat($('.x-coord').text());

    data = {
      title: title,
      description: description,
      address: address,
      latitude: latitude,
      longitude: longitude,
      link: link,
      pov: JSON.stringify(current_pov)
    }
    console.log(data)

    $.ajax({
      type: 'post',
      url: '/spots/create',
      dataType: 'json',
      data: data

    }).done(function(serverData){
      updateSpots();
      spotBrowser();
      // $('.spot-creation-form').off('submit')
      console.log("spot created!")
    }).fail(function(){
      alert('oh fuck spot creation failed!!')

    }).always(function(){

    })
    $('.spot-creation-form').css('visibility', 'hidden')
    $('.x-coord').text('')
    $('.y-coord').text('')
    $('.spot-creation-form input').val('')
  } else{
    alert('fill out your fucking forms please or it fucks shit up!!')
  };
})

$('#pov-save-button').on('click', function(e){
  e.preventDefault();


  this_pov = getPOV();
  current_pov = getPOV();
  console.log(this_pov)
})
