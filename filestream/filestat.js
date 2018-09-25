var fs=require("fs");
fs.stat("./../filestream",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log("filestream is file:"+data.isFile());
		console.log("filestream is dir:"+data.isDirectory());
		
	}
});
fs.stat("./filestat.js",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log("filestat is file:" + data.isFile());
		console.log("filestat is file:"+data.isFile());
		console.log("filestat is dir:"+data.isDirectory());
	}
});

fs.readFile("./text.txt","utf-8",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
fs.readFile("./text.txt",function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
	}
});

fs.writeFile("./text.txt","这是我写的第一句话；",function(err){//如果原来有文本就会被替换；
	if(err){
		console.log(err);
	}else{
		console.log("ok");
	}
});
fs.writeFile("./text0.txt","这是我写的第一句话；",function(err){//没有则新创建一个文件，并写入内容；
	if(err){
		console.log(err);
	}else{
		console.log("ok");
	}
});
fs.appendFile("./text.txt","这是我追加的一句话；",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("ok");
	}
});

fs.mkdir("test",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("test创建完成");
	}
	
});

fs.rename("text0.txt","text111.txt",function(err){
	if(err){
		console.log(err);
	}else{
		console.log("修改成功");
	}
})



