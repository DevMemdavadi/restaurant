<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $id= $obj->did;
    
    $del="delete from muser where uid='$id'";
    $ex=mysqli_query($link,$del);

    if($ex)
    {
        $msg=["Result"=>"User Deleted"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"User Not Deleted"];
        echo json_encode($msg);
    }

?>