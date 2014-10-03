updateSpots();
spotBrowser();
addressInputOn();

$('.spot-creation-exit-button').on('click', function(){
  $('.spot-creation-panel').css('visibility', 'hidden')
})

$('.spot-display-exit-button').on('click', function(){
  $('.spot-display-panel').css('visibility', 'hidden')
})

$('.spot-display-panel').css('visibility', 'hidden')

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(0,0),
      map: map,
      title: 'Hello World!'
    });

marker.setVisible(false);
var panorama = map.getStreetView();

$('.exit-button').on('click', function(){
  spotBrowser();
  marker.setVisible(false)
})


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