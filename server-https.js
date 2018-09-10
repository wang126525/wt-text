var https = require("https");
var myserver=require("./server-myserver.js");
var options = {
	hostname:"tile-service.weather.microsoft.com",
	port:443,
	path:"/zh-CN/livetile/preinstall?region=CN&appid=C98EA5B0842DBB9405BBF071E1DA76512D21FE36&FORM=Threshold",
	method:"GET"
}

var req=https.request(options,function(res){
	var htmlstr="";
	res.on("data",function(html){
		htmlstr+=html;
	});
	res.on("end",function(){
		console.log(htmlstr);
		myserver.server(htmlstr);
	});
});
req.on("error",function(err){
	console.log(err);
});
req.end();
	

