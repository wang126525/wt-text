//定义接口；
var myServer={
	server:function(req,res){
		res.setHeader("Access-Control-Allow-Origin","*");
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("hello word");
		res.end();
	}
};

//暴露接口；
module.exports = myServer;
