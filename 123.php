<?php 
	$fc=file_get_contents('http://www.kuitao8.com/api/joke');
	$arr=json_decode($fc,true);
	echo $arr['content'];
?> 