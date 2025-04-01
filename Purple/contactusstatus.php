<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $obj=json_decode(file_get_contents("php://input"));
    $id=$obj->status;
    
        $up="update contactus set status='Completed' where cid='$id'";
        $ex=mysqli_query($link,$up);

        if ($ex)
        {
            $msg = ["Result" => "Feedback Status Updated To Completed"];
        }
         else 
        {
            $msg = ["Result" => "Failed To Update Feedback Status "];
        }
        echo json_encode($msg);

?>