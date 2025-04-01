<?php
include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj = json_decode(file_get_contents("php://input"));

$usid = $obj->uid;

$sel = "SELECT * FROM orders JOIN muser on muser.uid=orders.uid JOIN menu on menu.mid=orders.mid JOIN mtable on mtable.tid=orders.tid WHERE orders.uid=$usid";
$ex = mysqli_query($link, $sel);
$no = mysqli_num_rows($ex);

if ($no > 0) 
{
    while ($row = mysqli_fetch_array($ex)) 
    {
        $arr[] = $row;

        $marr = explode(",", $row[2]);

        foreach ($marr as $v) 
        {
            $s = "select * from menu where mid='$v'";
            $exe = mysqli_query($link, $s);
            $menu[] = mysqli_fetch_assoc($exe);
        }
    }
        $res = ["Result" => $arr, "Menu" => $menu];
        echo json_encode($res);
} 
else 
{
    $res = ["Result" => [], "Menu" => []];
        
    echo json_encode($res);
}

?>