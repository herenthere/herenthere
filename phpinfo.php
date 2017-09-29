<HTML>
<body>
	hello world
</body>
</HTML>


<?php
	//page title hi
	
	include('db.php');

	$conn = new mysqli('10.10.7.165', 'root', 'dgklppmarist');

	if ($conn -> connect_error){
			die ("Connection failed: " . $conn->connect_error);
	}
	$query = 'SELECT * FROM USERS';

echo '<pre>';
echo 'LOADED EXTENSIONS:<br/>';
print_r(get_loaded_extensions());
echo '</pre>';
echo phpinfo();
?>