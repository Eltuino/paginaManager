<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "tienda";

$conexion = mysqli_connect($db_host, $db_user, $db_pass, $db_name);     //Esto introduce todo lo de arriba para conectarse a la base :)

if (mysqli_connect_errno()) {
    echo ("Ocurrio un error"); 
    exit();
}

?>