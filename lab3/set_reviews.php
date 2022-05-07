<?php 

	$link = mysqli_connect("localhost", "sharipov-labs", "pass1234","sharipov-labs");
	if ($link == false) {
		die("Ошибка подключения к серверу: " . mysqli_connect_error());
	}

	$name = $_POST['name'];
    $email =$_POST['email'];
    $message = $_POST['message'];
 
    $sql = "INSERT INTO reviews (review_name, review_email, review_message) VALUES('" . $name . "', '" . $email . "', '" . $message . "')";

	if (mysqli_query($link, $sql)) {
		echo "Ваш отзыв успешно отправлен!";
	} else {
		echo "Ошибка создания отзыва";
	}

    mysqli_close($link);

?>