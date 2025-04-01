<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $id=$obj->tid;
    $status=$obj->sts;
    
    if($status == "Available")
    {
        $up="update mtable set status='Booked' where tid='$id'";
        $ex=mysqli_query($link,$up);
        $msg=["Result"=>"Table Booked"];
        echo json_encode($msg);
    }
    else 
    {
        $up="update mtable set status='Available' where tid='$id'";
        $ex=mysqli_query($link,$up);
        $msg=["Result"=>"Table Available"];
        echo json_encode($msg);
    }

?>