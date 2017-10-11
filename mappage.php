<!--
Marist College - Capping Project - Prof. Arias
HereNThere
==========================
Juan Diaz
Francesco Galletti
Timbille Kulendi
Kulvinder Lotay
Tashi Palden
Joey Pupel  
==========================
mappage.php is the main page of the web application. Users can
see the details of their trips, see the points of interests
based on their filters and range selections, and can explore
different roadtrips. All the booking and planning is done on
this page.

Google Maps API v3 test
-->

<!DOCTYPE html>
<html>
  <head>
    <title>HereNThere</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
    /* Always set the map height explicitly to define the size of the div
    * element that contains the map. */
    #map {
        height: 97%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 96%;
        margin: 0;
        padding: 0;
        background-color: transparent;
    }
    .controls {
        margin-top: 10px;
        border: 1px solid transparent;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: 32px;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      }

      #origin-input,
      #destination-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 230px;
      }

      #floating-panel {
        position: absolute;
        top: 15%;
        left: 1%;
        z-index: 5;
        background-color: #214682;
        padding: 5px;
        border: 1px solid #fff;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
        height: 55%;
        width: 20%;
      }

      #origin-input:focus,
      #destination-input:focus {
        border-color: #4d90fe;
      }

      #mode-selector {
        color: #fff;
        background-color: #4d90fe;
        padding: 5px 11px 0px 11px;
        margin-bottom: 150px;
      }

      #mode-selector label {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 300;
      }

      body {
        background:url('img/backgroundhomepage.png');
        background-size: 150%;
        background-repeat: no-repeat;
      }

      header {
          background-image: url('img/cover.png');
          background-size: 75%;
          color: #ffffff;
          background-color: transparent;
          text-align: center;
          height: 75px;
      }
    </style>
  </head>
  <body>

    <header>
        <a type="button" href="mappage.php"><img src="img/logo.png" style="width:15%;height:75px;align:center;"></a>
        <a color=#ffffff href="profilepage.php"><img src="img/profileicon.png" style="width:40px;height:40px;overflow:hidden; "></a>
    </header>

    <div id="map"></div>

    <div id="floating-panel">
      <input id="origin-input" class="controls" type="text"
        placeholder="Enter an origin location"
        value="<?php 
                    if(isset($_POST['departure'])) {
                      echo $_POST['departure'];
                    }?>">

      <input id="destination-input" class="controls" type="text"
        placeholder="Enter a destination location"
        value="<?php 
                    if(isset($_POST['destination'])) {
                      echo $_POST['destination'];
                    }?>">

      <div id="mode-selector" class="controls">
        <input type="checkbox" name="type" id="changemode-walking" checked="checked"> <!-- TODO to change -->
        <label for="changemode-walking">Restaurants</label>

        <input type="checkbox" name="type" id="changemode-transit">
        <label for="changemode-transit">Hotel</label
  >

        <input type="checkbox" name="type" id="changemode-driving">
        <label for="changemode-driving">Points of Interest</label>
      </div>



    <script>
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initMap() {
        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
                [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                },
              ],
            {name: 'Map'});
            
          var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          fullscreenControl: false,
          mapTypeControlOptions: {
            mapTypeIds: ['styled_map', 'satellite'],
            position: google.maps.ControlPosition.TOP_RIGHT  
          },
          zoom: 9
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        new AutocompleteDirectionsHandler(map);
      }

       /**
        * @constructor
       */
      function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'DRIVING';
        var originInput = document.getElementById('origin-input');
        var destinationInput = document.getElementById('destination-input');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput, {placeIdOnly: true});

        this.setupClickListener('changemode-driving', 'DRIVING');

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

        this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(modeSelector);
      }

      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
        var radioButton = document.getElementById(id);
        var me = this;
        radioButton.addEventListener('click', function() {
          me.travelMode = mode;
          me.route();
        });
      };

      AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
          if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
          } else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };

      AutocompleteDirectionsHandler.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;

        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      };

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
      </script>

    <!--
      Connects the map to the API key that we have registered
    -->
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOVAWCWgAiZ_iTjXOVIBoJC0Y-_1xRNos&callback=initMap&libraries=places">
    </script>

  </body>
</html>

<!--
=========================
======  TODO    =========

- Height maps needs to be scalable, use % instead of px.
- Try pop ups
- Put destinations
- Put search location bar
- 23 waypoints MAX - NOTE

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
