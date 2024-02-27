<?php
// Database connection
$servername = "localhost";
$username = "fajemirokunbalagbedynasty_form"; // Your MySQL username
$password = "5aKvLDxJJftMeqcfZZmk"; // Your MySQL password
$dbname = "fajemirokunbalagbedynasty_form"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$relationship = $_POST['relationship'];

$children_name = $_POST['children_name'];
$current_location = $_POST['current_location'];
$num_children = $_POST['num_children'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// SQL insert statement
$sql = "INSERT INTO family_data (name, relationship,  children_name, current_location, num_children, email, phone) 
        VALUES ('$name', '$relationship',  '$children_name', '$current_location', '$num_children', '$email', '$phone')";

if ($conn->query($sql) === TRUE) {
    // Redirect to success page
    header("Location: success.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
