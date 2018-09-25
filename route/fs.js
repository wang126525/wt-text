var fs=require("fs");
module.exports={
	readfile:function(res,opath){
		fs.readFile(opath,"utf-8",function(err,data){
			if(err){
				console.log(err);
			}else{
				res.write(data);
				res.end();
			}
		});
	}
	
	
	
	
	
}
