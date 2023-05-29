const http = require('http');
module.exports = function(req,res){
	const schema = {
		pulsa(req,res){
			const config = {
				host:'testprepaid.mobilepulsa.net',
				path:'/v1/legacy/index/',
				headers:{
					"content-type":"application/json"
				},
				method:'POST',
				data:JSON.stringify({
					commands:'pricelist',
					username:'0895605801484',
					sign:'7ad0dabf608f08ace635ece4d5393b3d',
					status:'active',
					type:'pulsa',operator:''
				})
			}
			http.request(config,resp=>{
				console.log(resp);
			}).on('error',resp=>{console.log(resp)})
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