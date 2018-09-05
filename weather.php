//
//	$fname=isset($_GET['callback'])? $_GET['callback']:'fn';//判断括号里面的值是否存在,返回boolean
//	$cityname=isset($_GET['city'])? $_GET['city']:'fn';//判断括号里面的值是否存在,返回boolean
//	$date=file_get_contents("https://www.sojson.com/open/api/weather/json.shtml?city={$cityname}");
//	echo $fname."(".$date.")";
//


<?php
    $host = "https://jisutqybmf.market.alicloudapi.com";
    //$path = "/weather/query";
    $method = "GET";
    $appcode = "1f05cfd91d7049c78c4d228a2f0178b1";
    $headers = array();
    array_push($headers, "Authorization:APPCODE " . $appcode);
    $querys = $_GET['city'];
    $bodys = "";
    $url = $host . "?city=" . $querys;

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_FAILONERROR, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HEADER, true);
    if (1 == strpos("$".$host, "https://"))
    {
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    }；
//  $fname=isset($_GET['callback'])? $_GET['callback']:'fn';
   
    var_dump(curl_exec($curl));
//	echo $fname."(".$date.")";
?>