<?php

require("conexion.php");

$consultation = "SELECT * FROM producto";
$result = mysqli_query($conexion, $consultation);
if ($result === false) {
    echo json_encode([
        "Error" => mysqli_error($conexion)
    ]);
} else {

    $response = mysqli_fetch_all($result, MYSQLI_ASSOC);
     echo json_encode($response);
}