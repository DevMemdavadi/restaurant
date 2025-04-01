<?php
error_reporting(0);
include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$i = $_REQUEST["mid"];
$n = $_REQUEST["menu"];
$p = $_REQUEST["price"];
$in = $_REQUEST["info"];
$img = $_FILES["photo"]["name"];
$cid = $_REQUEST["cid"];

if ($img == "") 
{
    $up = "update menu set mname='$n',price='$p',info='$in',cid='$cid' where mid='$i'";
    $ex = mysqli_query($link, $up);
} 
else 
{
    $up = "update menu set mname='$n',price='$p',info='$in',cid='$cid',photo='$img' where mid='$i'";
    $ex = mysqli_query($link, $up);
    move_uploaded_file($_FILES["photo"]["tmp_name"], "Upload/" . $img);
}

if ($ex) 
{
    $msg = ["Result" => "Menu Updated"];
    echo json_encode($msg);
} 
else 
{
    $msg = ["Result" => "Menu Not Updated"];
    echo json_encode($msg);
}

?>