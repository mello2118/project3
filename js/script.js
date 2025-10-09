      function initMap(){
      const map = new google.maps.Map(document.getElementById("map"), {
      center:{lat: 10.292, lng: 123.902},
      zoom: 8
      });
      
      const marker = new google.maps.Marker({
        position:{lat: 10.292, lng: 123.902},
        map: map,
        title: "Cebu City",
      });
    }