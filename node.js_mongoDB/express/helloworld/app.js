//var express=require("express");//引入express
//var app=express();//生成实例
var express=require(express)();
app.get("/",(req,res)=>{
	res.send("hello world");
});//设定路由
app.get("/login",(req,res)=>{
	res.send("登录");
});//设定路由
app.get("/register",(req,res)=>{
	res.send("注册");
});//设定路由
app.listen(3000,()=>{
	console.log("服务运行在：http://localhost:3000");
})

