<?php
if (isset($_POST)) {
    $nombre = $_POST["name"];
    $stock = $_POST["stock"];
    $precioProducto = $_POST["precio"];
    $marca = $_POST["selectMarca"];
    $categoria = $_POST["categoria"];

    require("conexion.php");

    $consultation = "INSERT INTO producto (nombreProducto, stockProducto, precioProducto, marcaProdcuto, Categoria_idCategoria) VALUES ('$nombre', '$stock', '$precioProducto', '$marca', '$categoria')";
    $result = mysqli_query($conexion, $consultation);
    if ($result === false) {
        echo json_encode([
            "Error" => mysqli_error($conexion)
        ]);
    } else {
        echo json_encode([
            "Error" => false
        ]);
    }
}