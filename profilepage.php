<?php
    include('db.php');
    $conn = new mysqli('10.10.7.165', 'root', 'dgklppmarist');

    if ($conn -> connect_error){
            die ("Connection failed: " . $conn->connect_error);
    }
?>