const https = require('https');
module.exports = function(req,res){
	const schema = {
		pulsa(req,res){
			
		},
		data(req,res){},
		electrics(req,res){
			
		},
		games(req,res){
		},
		orderCheck(req,res){
			
		}
	}
	//handling blocking host.
	if(req.header.Host==='localhost:8080'){
		if(schema[req.query.t]){
			schema[req.query.t](req,res);
		}else res.json({msg:'invalid type given'})
	}else{
		res.json({msg:'access_denied'});
	}
}