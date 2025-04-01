<?php
include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $n=$_REQUEST["menu"];
    $p=$_REQUEST["price"];
    $in=$_REQUEST["info"];
    $img=$_FILES["photo"]["name"];
    $cid=$_REQUEST["cid"];

    $ins="insert into menu(mname,price,info,photo,cid) value('$n','$p','$in','$img','$cid')";
    $ex = mysqli_query($link,$ins);

    if($ex) 
    {
        move_uploaded_file($_FILES["photo"]["tmp_name"],"Upload/".$img);
        $msg=["Result"=>"Menu Added"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"Try Again"];
        echo json_encode($msg);
    }

?>
