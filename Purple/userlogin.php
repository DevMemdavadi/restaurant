<?php

include ("conn.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

$obj = json_decode(file_get_contents("php://input"));
$n = $obj->unm;
$p = $obj->upass;

$sel = "select * from muser where BINARY name='$n' && BINARY pass='$p'";
$ex = mysqli_query($link, $sel);
$no = mysqli_num_rows($ex);

if ($no == 1) 
{
    $row = mysqli_fetch_assoc($ex);

    if ($row['status'] === "Active") 
    {
        $msg = ["Result" => "Login Successfully", "Info" => $row];
        echo json_encode($msg);
    }
     else 
     {
        $msg = ["Result" => "Your Account Is Not Active"];
        echo json_encode($msg);
     }
} 
else 
{
    $msg = ["Result" => "These Credentials Do Not Match Our Records"];
    echo json_encode($msg);
}

?>