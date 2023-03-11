<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT');
header('Content-Type: application/json; charset=utf-8');
    
$dbservername = "localhost";
$dbusername = "u629943965_debo";
$dbpassword = "webAppDeBo.675083";
$dbname = "u629943965_debo";

// Database connection
try {
    $conn = new PDO("mysql:host=$dbservername;dbname=$dbname", $dbusername, $dbpassword);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {    
    echo "Connection to Database failed: " . $e->getMessage();
}

?>