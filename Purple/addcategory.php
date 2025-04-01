<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj=json_decode(file_get_contents("php://input"));
$n=$obj->ctname;

$ins="insert into category (ctname) value('$n')";
$ex=mysqli_query( $link,$ins);

if($ex)
{
    $msg=["Result"=>"Category Added"];
    echo json_encode($msg);
}
else
{
    $msg=["Result"=>"Try Again"];
    echo json_encode($msg);}

?>