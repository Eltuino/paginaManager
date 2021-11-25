<?php
$data = file_get_contents("php://input");

if(strtolower($data) == "vegetal"){
    $data = 1;
}
else if(strtolower($data)== "fruta"){
    $data = 2;
}
else if(strtolower($data)== "enlatado"){
    $data = 3;
}
else if(strtolower($data)== "lacteo"){
    $data = 4;
}

require("conexion.php");
$consultation = "SELECT * FROM producto WHERE idProducto  = '$data' OR nombreProducto LIKE '%$data%' OR Categoria_idCategoria = '$data' ";
$result = mysqli_query($conexion, $consultation);
if ($result === false) {
    echo json_encode([
        "Error" => mysqli_error($conexion)
    ]);
} else {
    $response = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($response);
}
