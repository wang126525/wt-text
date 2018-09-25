var fs=require("fs");
var Read=require("./fs.js");
var url=require("url");
module.exports={
	"home":function(req,res){
		Read.readfile(res,"./index.html");
	},
	"login":function(req,res){
		res.write("登录");
		res.end();
	},
	"register":function(req,res){
		res.write("注册");
		res.end();
	},
	"other":function(req,res){
		res.write("404");
		res.end();
	}
	
	
}
