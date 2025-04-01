<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $id=$obj->uid;
    $n=$obj->name;
    $p=$obj->pass;
    $c=$obj->contact;
    $m=$obj->email;
    $ci=$obj->city;

    $up="update muser set name='$n', pass='$p', contact='$c', email='$m', city='$ci' where uid='$id'";
    $ex=mysqli_query($link,$up);

    if($ex)
    {
        $msg=["Result"=>"Profile Updated"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"Profile Not Updated"];
        echo json_encode($msg);
    }

?>