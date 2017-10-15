<!--
Marist College - Capping Project - Prof. Arias
HereNThere || Rights reserved
==========================
Juan Diaz
Francesco Galletti
Timbille Kulendi
Kulvinder Lotay
Tashi Palden
Joey Pupel  
==========================
profilepage.php is the profile page of any registered user.
They can see the details on each of their roadtrips, modify
them and share them with other people. The rating of each
roadtrip is based on the ratings of each user who has seen
the roadtrip. 
==========================
Google Maps API v3
Google Places API v3
==========================
Version 0.1 - October 13, 2017
- Trip from point A to B
- Auto completion in text areas
- Google Places API v3, implemented
- Google Maps API v3 (+ skin), implemented
- Basic homepage, mappage, profile page created
Version 0.3 - October 20, 2017
- Login popup
- Registration popup
- hashing / encryption - TODO
- Registration - TODO
- Database tables for USERS - TODO
Version 0.5 - October 27, 2017
- Multiple stops  in a trip - TODO
- Duration and distance each stop - TODO
-->

<!DOCTYPE html>

<?php
    include('db.php');

    $sql = 'SELECT FirstName, LastName FROM USER Where UserID = 1';
    $result = $conn->$query($sql);    
?>

<html>
    <title>HereNThere</title>
    
    <!--These are the typical Bootstrap (BS) characteristics and basic libraries that BS is based on.
        We are just importing these libraries -->
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <!--Style has all the CSS and modifications to edit how things look on the screen.
    For example #map will modify how the Google Maps window looks like. -->
    <style>

        div.container {
        width: 100%;
        }

        div.header1 { 
            background-image: url('img/cover.png');
            background-size: 75%;
            color: #ffffff;
            background-color: transparent;
            text-align: center;
            height: 11%;
        }

        div.header2 {
            background-image:url('img/coverpic.jpg'); /*tim old stuff*/
            width: 100%; /*tim old stuff, to check with photo*/
            height: 250px; /*tim old stuff, to check with photo*/
            text-align: center;
            border-bottom: 5px solid black;
        }

        html, body {
            background: #214682;
            height: 96%;
            margin: 0;
            padding: 0;
        }

        table, th, td {
            text-align: center;
            margin:1em auto;
            border-collapse: separate;
            border-spacing: 50px 0;
            padding: 10px 0; 
        }

        th {
            color: #99d5fc;
        }

        tr {
            color: #4b92c1;
        }

    </style>
<!-- 
  ==========================
  ==========================
  =====   END STYLE   ======
  ==========================
  ==========================
-->

    <body>
        <!-- Top header TODO implement homepage-mappage header-->
        <div class="header1">
            <a type="button" href="mappage.php"><img src="img/logo.png" style="width:15%;height:85%;align:center;"></a>
            <a color=#ffffff href="profilepage.php"><img src="img/profileicon.png" style="width:40px;height:40px;overflow:hidden; "></a>
        </div>
        
        <!-- Cover photo -->
        <div class="header2">
            <br>
            <img src="img/profile.jpg" alt="?" height="150" width="150" class="img-circle">
            
            <h1 style="color: #214682"><?php
                                        if ($result->num_rows > 0) {
                                            // output data of each row
                                            while($row = $result->fetch_assoc()) {
                                                echo $row["FirstName"] . " " . $row["LastName"];
                                            }
                                        } else {
                                            echo "Timbille Kulendi";
                                        }
                                        ?></h1>
        </div>
         
        <div class="container">
            <table>
                <tr>
                    <th>Trip Name</th>
                    <th># of stops</th>
                    <th>Duration</th>
                    <th>Distance</th>
                    <th>Cost</th>
                    <th>Ratings</th>
                    <th>Extra Tools</th>
                </tr>
                <tr>
                    <td>Washington Trip</td>
                    <td>2 Places</td>
                    <td>5:23</td>
                    <td>303 mi</td>
                    <td>$876 USD</td>
                    <td><img src="img/goldstar.png" alt="?" height="15" width="15"><img src="img/goldstar.png" alt="?" height="15" width="15"><img src="img/goldstar.png" alt="?" height="15" width="15"><img src="img/greystar.png" alt="?" height="15" width="15"><img src="img/greystar.png" alt="?" height="15" width="15"></td>
                    <td><img src="img/exit.png" alt="x" height="15" width="15"></td>
                </tr>
                <tr>
                    <td>Los Angeles Trip</td>
                    <td>4 Places</td>
                    <td>12:12</td>
                    <td>1208 mi</td>
                    <td>$1950 USD</td>
                    <td><img src="img/goldstar.png" alt="?" height="15" width="15"><img src="img/goldstar.png" alt="?" height="15" width="15"><img src="img/greystar.png" alt="?" height="15" width="15"><img src="img/greystar.png" alt="?" height="15" width="15"><img src="img/greystar.png" alt="?" height="15" width="15"></td>
                    <td><img src="img/exit.png" alt="x" height="15" width="15"></td>
                </tr>
            </table>
        </div>
    </body>
</html>

<!--
=========================
======  TODO    =========


-->