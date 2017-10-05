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
homepage.php is....
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
        <div class="row">
            <div class="col-xs-2 col-md-2 col-lg-2" class="form-group">
            </div>
            <div class="col-xs-2 col-md-3 col-lg-4" class="form-group">
                <label for="departure">Departure:</label>
                <input type="text" class="form-control" id="departure">
            </div>
            <div class="col-xs-2 col-md-3 col-lg-4" class="form-group">
                <label for="destination">Destination:</label>
                <input type="text" class="form-control" id="destination">
            </div>
            <div class="col-xs-1 col-md-1 col-lg-1">
                <br>
                <button type="button" class="btn btn-primary">GO</button>
            </div>
        </div>
        <ul class="pagination">
            <button type="button" class="btn btn-primary btn-circle"><img src="img/restauranticon.png" style="width:30px;height:30px;"></button>
            <button type="button" class="btn btn-success btn-circle"><img src="img/hotelicon.png" style="width:30px;height:30px;"></button>
            <button type="button" class="btn btn-info btn-circle"><img src="img/pointsofinteresticon.png" style="width:30px;height:30px;"></button>
        </ul>
    </div>
  </body>
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