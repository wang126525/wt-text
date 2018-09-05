var http=require("http");
http.createServer(function(request,response){
	response.setHeader("Access-Control-Allow-Origin","*");
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write("hello world");
	response.end();
}).listen(8000);
console.log("Server running at http://localhost:8000/");
