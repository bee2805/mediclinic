<?php 
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$newPatient = $data->newPatient;
$newTime = $data->newTime;
$newDoctor = $data->newDoctor;
$newRoom = $data->newRoom;
$newDate = $data->newDate;
$id = $data->id;

$sql = "UPDATE appointments SET patientName='$newPatient',doctorName='$newDoctor',room='$newRoom',date='$newDate',time='$newTime' WHERE id='$id';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Appointment was updated.");
}
?>