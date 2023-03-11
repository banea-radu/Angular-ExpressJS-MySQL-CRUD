<?php
    
// Database connection
require('angular_dbcon.php');

// Grab the json data
$json = file_get_contents("php://input");

// decode json to object
$object = json_decode($json);

// Grab values needed for query
$CodIdx = uniqid();
$CodMagazin = $object->CodMagazin;
$Denumire = $object->Denumire;
$now = (new DateTime('now'))->format('Y-m-d H:i:s');
$DataInregistrare = $now;
$Cantitate = $object->Cantitate;
$PretUnitar = $object->PretUnitar;

// check if all grabbed variables contain data
$incompleteData = false;
if (empty($CodMagazin) || empty($Denumire) || empty($CodIdx) || empty($Cantitate) || empty($PretUnitar)) {
    $incompleteData = true;
    $status = "Incomplete Data!";
}

// Add new Product to db
if (!$incompleteData) {
    try {
        $conn->exec("INSERT INTO produse VALUES ('$CodIdx', '$CodMagazin', '$Denumire', '$DataInregistrare', '$Cantitate', '$PretUnitar')");
        $status = "Saved!";
    } catch(PDOException $e) {
        $status = $e->getMessage();
    }
}

echo json_encode($status);

?>