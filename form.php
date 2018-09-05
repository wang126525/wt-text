<?php
	$user=$_GET['username'];//中括号里面放表单的name值。
	$em=$_GET['email'];
	echo  "你的名字是:{$user}你的邮箱是:{$em}";
?>