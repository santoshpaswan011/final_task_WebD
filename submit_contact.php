<?php
$conn = new mysqli("localhost", "username", "password", "college_club");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('Error sending message.'); window.location.href='index.html';</script>";
}

$stmt->close();
$conn->close();
?>