<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    
    $usid=$obj->userid;
    $tid=$obj->tableid;
    
    $ins="insert into orders (uid,tid) value ('$usid', '$tid')";
    $ex=mysqli_query($link,$ins);
    $up="update mtable set status='Booked' where tid='$tid'";
    $ex=mysqli_query($link,$up);

    if($ex)
    {
        $msg=["Result"=>"Table Booked"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"Table Not Booked"];
        echo json_encode($msg);
    }

?>