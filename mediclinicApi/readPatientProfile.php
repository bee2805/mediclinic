<?php 

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header('Access-Control-Allow-Headers: * ');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = $data->id;

$sql = "SELECT image FROM patients WHERE id = '$id';";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if($resultCheck > 0){

    $emparray = array();

    while($row = mysqli_fetch_assoc($result)){
        $emparray[] = $row;
    }

    echo json_encode($emparray);
} else {
    echo "false";
}
?>