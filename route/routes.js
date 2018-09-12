module.exports={
	"home":function(res){
		res.write("主页");
	},
	"login":function(res){
		res.write("登录");
	},
	"register":function(res){
		res.write("注册");
	},
	"other":function(res){
		res.write("404");
	}
	
	
}
