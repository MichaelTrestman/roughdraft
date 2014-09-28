

    var myLatlng = new google.maps.LatLng(33.583882,85.85044922);

    var mapOptions = {
      zoom: 6,
      center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);




    // var marker = new google.maps.Marker({
    //   position: myLatlng,
    //   map: map,
    //   title: 'Hello World!'
    // });

    // google.maps.event.addListener(marker, 'click', function() {
    //   map.setZoom(8);
    //   map.setCenter(marker.getPosition());
    // });

    // var overlay = new google.maps.OverlayView();

    // overlay.draw = function() {};

    // overlay.setMap(map);



    var mapClicker;
    // spotBrowser();

// $('*').off('click')

