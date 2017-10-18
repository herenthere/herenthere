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
        <a type="button" href="mappage.php"><img src="img/logo.png" style="width:15%;height:85%;align:center;margin-left: 250px;"></a></div>
        <!-- Trigger the modal with a button -->
        <button type="button" class="btn btn-default btn-lg" id="myBtn" style="background-color: transparent; border-color: transparent;"><img src="img/profileicon.png" style="width:40px;height:40px; margin-left: 75px;"></button></div>
        
        <!-- Modal is another name for popup -->
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content -->
            <div class="modal-content">
              <div class="modal-body">
  
                <div id="initial-content"> <!-- id= initial-content means that this code will disappear when pressing on Sign Up-->
                  <div class="modal-header" style="padding:35px 50px;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4><span class="glyphicon glyphicon-lock"></span> Login</h4>
                  </div>
                  <form role="form">
                    <div class="form-group" style="color: black;"> <!-- Username LOGIN-->
                      <label for="username"><span class="glyphicon glyphicon-eye-open"></span> Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Enter username">
                    </div>
                    <div class="form-group" style="color: black;"> <!-- Password LOGIN-->
                      <label for="password"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Enter password">
                    </div>
                    <div class="checkbox" style="color: black;"> <!-- Remember me checkbox LOGIN-->
                      <label><input type="checkbox" value="" checked>Remember me</label>
                    </div>
                    <button type="submit" href="profilepage.php" class="btn btn-success btn-block" style="background:#214682;border-color:#fff"><span class="glyphicon glyphicon-off"></span> Login</button>
                  </form>
                  <div class="modal-footer" style="color: black;"> <!-- Footer LOGIN-->
                    <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                    <p>Not a member? <a class="btn btn-success btn-lg" style="background-color: #214682; border-color: #fff;" onclick="$('#signup-content').show();$('#initial-content').hide();">Sign Up</a></p>
                  </div>
                </div>
  
                <div id="signup-content" style="display :none;"> <!-- id= signup-content means that this code will disappear when pressing on Login-->
                  <form role="form">
                    <div class="modal-header" style="padding:35px 50px;">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4><span class="glyphicon glyphicon-lock"></span> Signup</h4>
                    </div>
                    <div class="form-group" style="color: black;"> <!-- First Name SIGNUP-->
                      <label for="firstname"><span class="glyphicon glyphicon-user"></span> First Name</label>
                      <input type="text" class="form-control" id="firstname" placeholder="Enter First Name">
                    </div>
                    <div class="form-group" style="color: black;"><!-- Last Name SIGNUP-->
                      <label for="lastname"><span class="glyphicon glyphicon-user"></span> Last Name</label>
                      <input type="text" class="form-control" id="lastname" placeholder="Enter Last Name">
                    </div>
                    <div class="form-group" style="color: black;"> <!-- Email SIGNUP-->
                      <label for="email"><span class="glyphicon glyphicon-envelope"></span> Email</label>
                      <input type="text" class="form-control" id="email" placeholder="Enter Valid E-mail">
                    </div>
                    <div class="form-group" style="color: black;"> <!-- Username SIGNUP-->
                      <label for="username"><span class="glyphicon glyphicon-eye-open"></span> Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Enter username">
                    </div>
                    <div class="form-group" style="color: black;"> <!-- Password SIGNUP-->
                      <label for="password"><span class="glyphicon glyphicon-eye-open"></span> Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Enter password">
                    </div>
                    <div class="checkbox" style="color: black;"> <!-- Remember checkbox SIGNUP-->
                      <label><input type="checkbox" value="" checked>Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-success btn-block" style="background:#214682;border-color:#fff"><span class="glyphicon glyphicon-off"></span>Signup</button>
                  </form>
                  <div class="modal-footer" style="color: black;">
                    <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                    <p>Already a member? <a class="btn btn-success btn-lg" style="background-color: #214682; border-color: #fff;"onclick="$('#signup-content').hide();$('#initial-content').show();">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
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