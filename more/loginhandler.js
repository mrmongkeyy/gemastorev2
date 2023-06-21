
module.exports = function(req,res,db){
	db.ref('users').get().then((data)=>{
		const newData = data.val()||{};
		req.body.email = req.body.email.split('@')[0];
		if(newData[req.body.email]){
			if(newData[req.body.email].password===req.body.password){
				delete newData[req.body.email].password;
				res.json({
					valid:true,
					msg:newData[req.body.email]
				})
			}else{
				res.json({valid:false,msg:'Wrong Password'})
			}
		}else{
			res.json({
				valid:false,msg:'Account Not Found'
			})
		}
	})
}