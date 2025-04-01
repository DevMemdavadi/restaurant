<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    
    $tid=$obj->table;
    $oid=$obj->order;
    
    $del="delete from orders where oid='$oid'";
    $ex=mysqli_query($link,$del);

    if($ex)
    {
        $up= "update mtable set status='Available' where tid='$tid'";
        $ex=mysqli_query($link,$up);
        $msg=["Result"=>"Order Deleted", "Table"=>"Table Available"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"Order Not Deleted"];
        echo json_encode($msg);
    }

  
?>