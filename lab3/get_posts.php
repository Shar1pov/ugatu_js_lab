<?php

$link = mysqli_connect("localhost", "sharipov-labs", "pass1234","sharipov-labs");
if ($link == false) {
	die("Ошибка подключения к серверу: " . mysqli_connect_error());
}

if (isset($_POST['kol'])) {
	$kol = $_POST['kol'];
}else{
	$kol = 5;
}

if (isset($_POST['tek'])) {
	$tek = $_POST['tek'];
}else{
	$tek = 0;
}

$result = mysqli_query($link,"SELECT * FROM posts LIMIT $tek, $kol"); 
if ($result -> num_rows > 0) {   
	while ($row = mysqli_fetch_array($result)){
		echo('
			<div class="posts-item" id="posts-item-id-'.$row["post_id"].'">
				<img src="'.$row["post_img"].'" class="post-img">
				<div class="post-content">
					<h5 class="post-title">'.$row["post_title"].'</h5>
					<p class="post-description">'.$row["post_description"].'</p>
				</div>
			</div>
		');
	}
	echo('<button type="button" class="btn btn-primary btn-md" id="getMorePosts">Загрузить еще</button>');
}
?>