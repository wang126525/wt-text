var http=require("http");
var Route=require("./routes.js");


http.createServer(function(req,res){
	console.log(req.url);
	console.log(111);
	if(req.url !== "/favicon.ico"){
		
		res.setHeader("Access-Control-Allow-Origin","*");
		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
		var pathname=req.url.replace(/\//,"");
		console.log(222);
		console.log(pathname);
		try{
			Route[pathname](res);
		}catch(e){
			Route["other"](res);
		}
		
		
//		res.write();
		res.end();
		
	}
	
}).listen(8000);
console.log("this server is : http://localhost:8000");