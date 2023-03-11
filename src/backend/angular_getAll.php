<?php
    
// Database connection
require('angular_dbcon.php');

// Get all data from db
$query = "SELECT * FROM produse";
$result =  $conn->query($query);
$resultToSend = [];
foreach ($result as $row) {
    $item = [];
    $item ['CodIdx'] = $row['CodIdx'];
    $item ['CodMagazin'] = $row['CodMagazin'];
    $item ['Denumire'] = $row['Denumire'];
    $item ['DataInregistrare'] = $row['DataInregistrare'];
    $item ['Cantitate'] = $row['Cantitate'];
    $item ['PretUnitar'] = $row['PretUnitar'];
    $resultToSend [] = (object) $item;
}

echo json_encode( $resultToSend );

?>