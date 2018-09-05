<?php
	$fname=isset($_GET['callback'])? $_GET['callback']:'fn';//判断括号里面的值是否存在,返回boolean
	$cityname=isset($_GET['city'])? $_GET['city']:'fn';//判断括号里面的值是否存在,返回boolean
	$date=file_get_contents("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=baidu");
	echo $fname."(".$date.")";
?>