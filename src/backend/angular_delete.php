<?php
    
// Database connection
require('angular_dbcon.php');

// Grab values needed for query
$CodIdx = $_GET['CodIdx'];

// Delete Product
try {
    $conn->exec("DELETE FROM produse WHERE CodIdx='$CodIdx'");
    $status = "Deleted!";
} catch(PDOException $e) {
    $status = $e->getMessage();
}

echo json_encode($status);

?>