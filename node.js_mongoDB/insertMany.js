var mydata={
	insert:function(db,cllectionName,data,callback){
		var db = db.db("wts");
		var coll=db.collection(cllectionName);
		coll.insertMany(data,(err,result)=>{
			if(err){
				console.log(err);
			}else{
				callback(result);
			}
		})
	},
	
	finddata:function(db,cllectionName,select1,select2,callback){
		var db = db.db("wts");
		var coll=db.collection(cllectionName);
		coll.find(select1,select2).toArray((err,result)=>{
			if(err){
				console.log(err);
			}else{
				callback(result);
			}
		})
		
	}
	
	
	
	
	
	
}
module.exports=mydata;
