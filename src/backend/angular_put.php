<?php
    
// Database connection
require('angular_dbcon.php');

// Grab the json data
$json = file_get_contents("php://input");

// decode json to object
$object = json_decode($json);

// Grab values needed for query
$CodIdx = $object->CodIdx;
$CodMagazin = $object->CodMagazin;
$Denumire = $object->Denumire;
$Cantitate = $object->Cantitate;
$PretUnitar = $object->PretUnitar;

// Edit Product
try {
    $conn->exec("UPDATE produse SET CodMagazin='$CodMagazin',Denumire='$Denumire',Cantitate='$Cantitate',PretUnitar='$PretUnitar' WHERE CodIdx='$CodIdx'");
    $status = "Updated!";
} catch(PDOException $e) {
    $status = $e->getMessage();
}

echo json_encode($status);

?>