<?php

include("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj = json_decode(file_get_contents("php://input"));
$orderid = $obj->order;
$tableid = $obj->table;
$status = $obj->orderstatus;
if ($status =="Completed") 
{

$up = "update orders set status='$status' where oid='$orderid'";
$ex = mysqli_query($link, $up);


    $up = "update mtable set status='Available' where tid='$tableid'";
    $ex = mysqli_query($link, $up);
    $arr=["Result" => "Order Status Updated","Table Status" => "Table Available"];
    echo json_encode($arr);
}
else
{
    $arr=["Result" => "Enter Only Completed Status","Table Status" => "Table Status Not Updated"];
    echo json_encode($arr);

}
?>