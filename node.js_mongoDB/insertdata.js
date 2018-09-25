var mydata=require('./insertMany.js');
var MongoClient=require("mongodb").MongoClient;
var DB_CONN_STR="mongodb://127.0.0.1:27017/wts";
MongoClient.connect(DB_CONN_STR,{useNewUrlParser:true},(err,db)=>{
	if(err){
		console.log(err);
	}else{
		console.log("数据库连接成功");
		var data=[{
			"id":"4",
			"devicename":"水泵4",
			"info":"没有"
		},
		{
			"id":"5",
			"devicename":"水泵5",
			"info":"没有"
		}];
		mydata.insert(db,"wt2",data,function(result){
			console.log(result);
//			db.close();
		});
		
		mydata.finddata(db,"wt2",{"devicename":"水泵5"},{"_id":0,"devicename":1},function(result){
			console.log(result);
			db.close();
		})
		
		
		
	}
})

