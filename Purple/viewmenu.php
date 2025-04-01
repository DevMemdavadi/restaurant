<?php
include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$page=$_REQUEST["page"];
$l=$_REQUEST["limit"];

$sel = "SELECT * FROM menu JOIN category on category.cid=menu.cid order by menu.mid ASC limit $page,$l";
$ex = mysqli_query($link, $sel);

$sel1 = "SELECT * FROM menu JOIN category on category.cid=menu.cid order by menu.mid ASC";
$ex1 = mysqli_query($link, $sel1);
$no = mysqli_num_rows($ex1);

if ($no > 0) 
{
    while ($row = mysqli_fetch_assoc($ex)) 
    {
        $arr[] = $row;   
    }

    $totalrow = count($arr);
    
    $msg=["Data"=>$arr, "Totalrow"=>$no,"sel"=>$sel];
    echo json_encode($msg);
} 
else 
{
    echo json_encode([]);
}

?>