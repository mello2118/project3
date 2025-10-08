      var marker;

      function initMap(){
      var map = new google.maps.Map(document.getElementById('map'), {
      center:{lat: 10.2926, lng: 123.9022},
      zoom: 8
      });
      google.maps.event.addDomListener(window, 'load', initMap);
      
      marker = new google.maps.Marker({
        position:{lat: 10.2926, lng: 123.9022},
        map: map,
      });
    }