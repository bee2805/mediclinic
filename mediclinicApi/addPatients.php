$password = $data->password;
$medicalAidNo = $data->medicalAidNo;
$image = $data->image;

$passwordEncrypt = md5($password);

list($type, $image) = explode(';', $image);
list(, $image) = explode(',', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';

file_put_contents($newPath, $image);

if ($name === ''){
    echo "There are no patients";
} else {
    $sql = "INSERT INTO patients(id, name, surname, age, gender, cellNo, email, password, medicalAidNo, image) VALUES (NULL, '$name', '$surname', '$age', '$gender', '$cellNo', '$email', '$passwordEncrypt', '$medicalAidNo', '$newPath');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo "true";
    }
}
?>