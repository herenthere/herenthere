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
profilepage.php is the profile page of any registered user.
They can see the details on each of their roadtrips, modify
them and share them with other people. The rating of each
roadtrip is based on the ratings of each user who has seen
the roadtrip.
-->

<!DOCTYPE html>
<html>
    <title>HereNThere</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        div.container {
            width: 100%;
        }

        div.header1 { 
            color: #ffffff;
            background-color: #5483ce;
            text-align: center;
            border-width: 20px;
            border-bottom: 5px solid black;
        }

        div.header2 {
            background-image:url('img/profile.jpg'); /*tim old stuff*/
            width: 100%; /*tim old stuff, to check with photo*/
            height: auto; /*tim old stuff, to check with photo*/
            text-align: center;
            border-bottom: 5px solid black;
        }

        html, body {
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
            color: #66c2ff;
        }
    </style>
  
    <body>
        <div class="header1">
            <a type="button" href="mappage.php"><img src="img/logo.png" style="width:10%;height:10%;padding-left:450px;padding-right:430px;"></a>
            <a color=#ffffff href="mappage.php" vertical-align="button-top">Map Page</a>
        </div>
        
        <div class="header2">
            <br>
            <img src="img/profile.jpg" alt="?" height="250" width="250">
            <h1>Timbille Kulendi</h1>
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
<!---
    include('db.php');
    $conn = new mysqli('10.10.7.165', 'root', 'dgklppmarist');

    if ($conn -> connect_error){
            die ("Connection failed: " . $conn->connect_error);
    }
?>

<HTML>

<body>
    <td align="center">

</body>
</HTML>
-->

<!--
=========================
======  TODO    =========

- Height maps needs to be scalable, use % instead of px.
- Try pop ups
- Put destinations
- Put search location bar
-->