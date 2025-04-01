<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj=json_decode(file_get_contents("php://input"));

$userid=$obj->uid;
$menuid=$obj->mid;
$quantity=$obj->qtid;

$sel="select * from orders where uid='$userid' && status='Not Completed'";
$exe=mysqli_query($link,$sel);
$row=mysqli_num_rows($exe);

if($row==1)
{
    $up="update orders set mid='$menuid', quantity='$quantity' WHERE uid='$userid' && status='Not Completed'";
    $ex=mysqli_query($link,$up);


    if($ex)
        {
            $msg=["Result"=>"Your Order Placed Successfully"];
            echo json_encode($msg);
        }
        else
        {
            $msg=["Result"=>"Try Again"];
            echo json_encode($msg);

        }
}
else
{
    $msg=["Result"=>"Booked Table First"];
    echo json_encode($msg);

}
?>