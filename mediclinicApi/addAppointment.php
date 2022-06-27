<?php 

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header('Access-Control-Allow-Headers: * ');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);


$patientName = $data->patientName;
$date = $data->date;
$time = $data->time;
$doctorName = $data->doctorName;
$room = $data->room;

$sql = "INSERT INTO appointments (id, patientName, doctorName, room, date, time) VALUES (NULL,'$patientName','$doctorName','$room','$date','$time');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added an appointment");
}

?>