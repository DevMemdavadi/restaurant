
<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj=json_decode(file_get_contents("php://input"));
$id=$obj->tid;
$n=$obj->title;
$c=$obj->capacity;

$up="update mtable set title='$n', capacity='$c' where tid='$id'";
$ex=mysqli_query( $link,$up);

if($ex)
{
    $msg=["Result"=>"Table Updated"];
    echo json_encode($msg);
}
else
{
    $msg=["Result"=>"Table Not Updated"];
    echo json_encode($msg);}

?>