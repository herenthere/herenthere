<!-- 
db.php is a PhP file created to simply connect to the 
10.10.7.88 database. Note that the port is :8080
-->

<?php
	//Create connection
	$conn = mysqli_connect('10.10.7.165','root','dgklppmarist','herenthere');
	mysqli_set_charset($conn,'utf8');

	//Hi - Tim
?>