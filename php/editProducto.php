<?php
    if(isset($_POST)){
        $nombre = $_POST["name"];
        $stock = $_POST["stock"];
        $precioProducto = $_POST["precio"];
        $marca = $_POST["selectMarca"];
        $categoria = $_POST["categoria"];
        $id = $_POST["id"];
        require("conexion.php");
        $consultation = "UPDATE  producto SET nombreProducto = '$nombre', stockProducto = '$stock', precioProducto = '$precioProducto', marcaProdcuto = '$marca', Categoria_idCategoria = '$categoria' WHERE idProducto = '$id' ";
        // $consultation = "UPDATE crudjeft SET nombre = '$name', apellido = '$last_name', deuda = '$debt' WHERE id = '$id' " ;
        $result = mysqli_query($conexion, $consultation);
        if($result){
            echo json_encode([
                "Error" => false,
                "message" => "Los datos se han actualizado con éxito :)"
            ]);
        }else{
            echo json_encode([
                "Error" => true,
                "message" => mysqli_error($conexion)
            ]);
        }
    }
