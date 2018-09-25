var fs = require("fs");
var filereadstream=fs.createReadStream("01text.txt");
var filewritestream=fs.createWriteStream("02text.txt");

//filereadstream.on("data",function(msg){
//	filewritestream.write(msg)
//});
//filereadstream.on("error",function(err){
//	console.log(err);
//});
//filereadstream.on("end",function(){
//	console.log("ok");
//});


//流的写法：
filereadstream.pipe(filewritestream);
