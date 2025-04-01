<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $u=$obj->unm;
    $p=$obj->pass;

   $sel="select * from admin where BINARY aname='$u' && BINARY apass='$p'";
   
    $ex=mysqli_query($link,$sel);
    $no=mysqli_num_rows($ex);
   
    if($no == 1)
    {
        $row=mysqli_fetch_assoc($ex);
        $msg=["Result"=>"Login Successfully", "info"=>$row];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"Wrong Username or Password"];
        echo json_encode($msg);
        
    }

?>