var http=require("http");

var myserver={
	server:function(str){
		
		http.createServer(function(request,response){
			response.setHeader("Access-Control-Allow-Origin","*");
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write(str);
			response.end();
		}).listen(8000);
		console.log("Server running at http://localhost:8000/");
		
	}
	
}


module.exports=myserver;
