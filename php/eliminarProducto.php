<?php
$data = file_get_contents("php://input");
$data = intval($data);

require("conexion.php");
$consultation = "DELETE FROM producto WHERE idProducto = '$data'" ;
$result = mysqli_query($conexion, $consultation);

if($result){
    echo json_encode([
        "Error"=>false,
        "message" => "Dato eliminado correctamente"
    ]);
}else{
    echo json_encode([
        "Error" =>true,
        "message" => "Ocurrio un error a la hora de eliminar el dato :("
    ]);
}


?>