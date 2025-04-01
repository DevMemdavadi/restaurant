<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $id=$obj->uid;
    $status=$obj->sts;
    
    if($status == "Deactive")
    {
        $up="update muser set status='Active' where uid='$id'";
        $ex=mysqli_query($link,$up);
        $msg=["Result"=>"Active"];
        echo json_encode($msg);
    }
    else if($status == "Active")
    {
        $up="update muser set status='Deactive' where uid='$id'";
        $ex=mysqli_query($link,$up);
        $msg=["Result"=>"Deactive"];
        echo json_encode($msg);
    }

?>