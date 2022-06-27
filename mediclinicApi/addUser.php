<?php 

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header('Access-Control-Allow-Headers: * ');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);


$name = $data->name;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
$email = $data->email;
$cellNo = $data->cellNo;
$rank = $data->rank;
$password = $data->password;
$image = $data->image;

$passwordEncrypt = md5($password);

list($type, $image) = explode(';', $image);
list(, $image) = explode(',', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';

file_put_contents($newPath, $image);

$sql = "INSERT INTO receptionists (id, image, name, surname, age, gender, cellNo, email, password, rank) VALUES (NULL, '$newPath', '$name','$surname','$age', '$gender', '$cellNo', '$email', '$passwordEncrypt', '$rank');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}

?>