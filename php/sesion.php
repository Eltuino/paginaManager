<?php                       // Enviamos datos por post porque es mas seguro (la variable post solo se genera si es que se enviaron datos por post, si no, seria get)
if (isset($_POST)) {
    $nombre = $_POST["nombre"];
    $contra= $_POST["contra"];

    require("conexion.php");    // Trae todo lo que escribimos en conexion.php para aca.

    $consultation = "SELECT nombreUsuario, contraUsuario FROM usuario WHERE nombreUsuario = '$nombre' AND contraUsuario = '$contra' ";  // Esta wea compara lo que le envio desde la pagina con lo que hay en la base de datos en mysql de xampp
    $result = mysqli_query($conexion, $consultation);  // Estamos pasando la conexion y la consulta
    
    if ($result === false) {   // Si no se envio la consulta
        echo json_encode([
            "Error" => mysqli_error($conexion)
        ]);
    } else {              // Si se envio la consulta
        $response = mysqli_fetch_all($result, MYSQLI_ASSOC);      // almacena la consulta en una array

        if (count($response) === 0) {    // Si la consulta es 0, significa que no encontro nada que coincida con lo que se envio (ingreso mal el usuario)
            echo json_encode($response);
            exit();
        } else { 
            echo json_encode("correcto");
        }
    }

} else {
    echo json_encode([
        "_POST" => "No defined"
    ]);
}