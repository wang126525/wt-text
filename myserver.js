var http=require("http");
//引入接口；
var myServer=require("./2md/server02.js");
http.createServer(function(req,res){
	myServer.server(req,res);
	
	
}).listen(8000);
console.log("hello word")