var mongodb=require("mongodb");
var server=new mongodb.Server(
	"127.0.0.1",
	27017,
	{auto_reconnect:true}
);
var db=new mongodb.Db(
	"text",
	server,
	{safe:true}
);
db.open(function(err,db){
	if(err){
		console.log(err);
	}else{
		console.log("success")
		db.collection("text",{safe:true},function(err,conn){
			if(err){
				console.log(err)
			}else{
				conn.find({},{id:1,name:1,_id:0}).limit(3).skip(1).toArray(function(err,res){
					if(!err){
						res.forEach(function(value){
							console.log(value.name)
						})
					}
				});
			}
		})
	}
})
