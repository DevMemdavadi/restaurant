<?php
include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$sel1 = "SELECT * FROM menu JOIN category on category.cid=menu.cid order by menu.mid ASC";
$ex1 = mysqli_query($link, $sel1);
$no = mysqli_num_rows($ex1);

if ($no > 0) 
{
    while ($row = mysqli_fetch_assoc($ex1)) 
    {
        $arr[] = $row;   
    }

    
    echo json_encode($arr);
} 
else 
{
    echo json_encode([]);
}

?>