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
homepage.php is the page where the user first goes in.
The user can set a departure and destination, click GO
and go to the mappage.
-->

<!DOCTYPE html>
<html>
  <head>
    <title>HereNThere</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <!-- Link to Bootstrap libraries -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <style>
    /* Always set the map height explicitly to define the size of the div
    * element that contains the map. */
    #map {
        height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 96%;
        margin: 0;
        padding: 0;
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
        height: 175px;
    }
    </style>
  </head>

  <body>
    <header>
        <a type="button" href="mappage.php"><img src="img/logo.png" style="width:15%;height:40%;align:center;"></a>
        <a color=#ffffff href="profilepage.php"><img src="img/profileicon.png" style="width:40px;height:40px;overflow:hidden; "></a>
    </header>

    <br><br> <!-- to delete -->
    <div class="container-fluid" style="color:#ffffff" align="center" style="border:20px solid #ffffff;">
        <h1>Explore and hit the road</h1>
        <p>Select a departure and destination and hit GO!</p>
        <form action="mappage.php" method="post" onkeydown="noGoInput()">
        <div class="row">
            <div class="col-xs-2 col-md-2 col-lg-2" class="form-group">
            </div>
            <div class="col-xs-2 col-md-3 col-lg-4" class="form-group">
                <label for="departure">Departure:</label>
                <input type="text" class="form-control" id="origin-input" name="departure">
            </div>
            <div class="col-xs-2 col-md-3 col-lg-4" class="form-group">
                <label for="destination">Destination:</label>
                <input type="text" class="form-control" id="destination-input" name="destination">
            </div>
            <div class="col-xs-1 col-md-1 col-lg-1">
                <br>
                <input type="submit" class="btn btn-primary" value="GO" id="GO"></button>
            </div>
        </div>
        <ul class="pagination">
            <button type="button" class="btn btn-primary btn-circle" name="resturant"><img src="img/restauranticon.png" style="width:30px;height:30px;"></button>
            <button type="button" class="btn btn-success btn-circle" name="hotel"><img src="img/hotelicon.png" style="width:30px;height:30px;"></button>
            <button type="button" class="btn btn-info btn-circle" name="poi"><img src="img/pointsofinteresticon.png" style="width:30px;height:30px;"></button>
        </ul>
        </form>
    </div>
  </body>

  <script type="text/javascript">
    function noGoInput(){
      var originInput=document.getElementById("origin-input");
      var destinationInput=document.getElementById("destination-input");

      if(originInput.value=="" && destinationInput.value=="") {
        document.getElementById("GO").disabled=true;
      }
      else
        document.getElementById("GO").disabled=false;
    }


  </script>
  <script>
    
    new AutocompleteDirectionsHandler(map);
     /**
        * @constructor
       */
       function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'WALKING';
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

        this.setupClickListener('changemode-walking', 'WALKING');
        this.setupClickListener('changemode-transit', 'TRANSIT');
        this.setupClickListener('changemode-driving', 'DRIVING');

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
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
  </script>

    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOVAWCWgAiZ_iTjXOVIBoJC0Y-_1xRNos&callback=AutocompleteDirectionsHandler&libraries=places">
    </script>

</html>


<!--
=========================
======  TODO    =========

- Logo on top does not show
- Google maps has text areas for destination? implement google api?
-->


<!--
    TO BLUR THINGS  , PUT IN DIVs
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);

    Navigation Bar Bootstrap
        <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
        </div>
-->