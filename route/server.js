var http=require("http");
var Route=require("./routes.js");
var url=require("url");

http.createServer(function(req,res){
	console.log(req.url);
	console.log(111);
	if(req.url !== "/favicon.ico"){
		
		res.setHeader("Access-Control-Allow-Origin","*");
		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
		var pathname=url.parse(req.url).pathname.replace(/\//,"");
		console.log(222);
		console.log(pathname);
		try{
			Route[pathname](req,res);
		}catch(e){
			Route["other"](req,res);
		}
		
		
//		res.write();
//		res.end();        //这个地方的res.end()可以再研究一下，这里如果开启的话，后面的模块可能就无法通过这个服务器了。
		
	}
	
}).listen(8000);
console.log("this server is : http://localhost:8000");