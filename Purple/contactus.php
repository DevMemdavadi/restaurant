<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj=json_decode(file_get_contents("php://input"));

$n=$obj->name;
$em=$obj->email;
$p=$obj->phone;
$f=$obj->feedback;

$ins="insert into contactus(name,email,phone,feedback) value('$n','$em','$p','$f')";
$ex = mysqli_query($link,$ins);

if($ex)
    {
        $msg=["Result"=>"We Appreciate Your Feedback On Our Customer Services"];
        echo json_encode($msg);
    }
    else
    {
        $msg=["Result"=>"There Was An Error Submitting Your Feedback. Please Try Again Later"];
        echo json_encode($msg);

    }

?>