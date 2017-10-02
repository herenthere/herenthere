<!DOCTYPE html>
<html>
<head>
<style>
div.container {
    width: 100%;
    border: 1px solid gray;
}

header { 
    background-image:url('profile.jpg');
    width: 100%;
    height: auto;

}

header, footer {
    padding: 1em;
    color: white;
    background-color: #004d80;
    clear: left;
    text-align: center;
}

profilepic {

    border-radius:25px;
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
</head>
<body>

<div class="container">

<header>
   <profilepic><img src="profile.jpg" alt="?" height="250" width="250"></profilepic>
   <h1> Big Dick </h1 style>
</header>
  
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
  <td></td>
  <td></td>
</tr>
<tr>
<td>Los Angeles Trip</td>
<td>4 Places</td>
<td>12:12</td>
<td>1208 mi</td>
<td>$1950 USD</td>
<td></td>
<td></td>
</tr>
</table>

<footer>HERE N THERE</footer>

</div>

</body>
</html>
=======
<?php
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