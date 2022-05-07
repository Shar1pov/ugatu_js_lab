<?php

$link = mysqli_connect("localhost", "sharipov-labs", "pass1234","sharipov-labs");
if ($link == false) {
	die("Ошибка подключения к серверу: " . mysqli_connect_error());
}

$result = mysqli_query($link,"SELECT * FROM reviews"); 
if ($result -> num_rows > 0) {   
	while ($row = mysqli_fetch_array($result)){
		echo('
			<div class="review-item">
				<h5 class="review-title">'.$row["review_name"].' ('.$row["review_email"].')</h5>
				<p class="review-message">'.$row["review_message"].'</p>
			</div>
		');
	}
}
?>