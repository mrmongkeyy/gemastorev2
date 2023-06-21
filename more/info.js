const axios = require('axios');
const crypto = require('crypto-js');
const config = {
	username:"0895605801484",
	apiKey:'63764243965e5e29'
}
const paymentConfig = {
	va:'1179000899',
	apikey:'QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1',
	demourl:'https://sandbox.ipaymu.com/api/v2/payment/direct',
	productionurl:'https://my.ipaymu.com/api/v2/payment'
}
const sign = '7ad0dabf608f08ace635ece4d5393b3d';
const md5 = require('./md5');
const filterString = require('./stringfilter');
module.exports = function(type,req,res){
	const schema = {
		pricelist:{
			all(req,res){
				this.request(res,sign,'','');
			},
			pulsa(req,res){
				this.request(res,sign,'pulsa',req.query.operator);
			},
			data(req,res){
				this.request(res,sign,'data',req.query.operator);
			},
			pln(req,res){
				this.request(res,sign,'pln',req.query.operator);
			},
			games(req,res){
				this.request(res,sign,'game',req.query.operator);
			},
			voucher(req,res){
				this.request(res,sign,'voucher',req.query.operator);
			},
			request(res,sign,type,operator=''){
				// axios.get('https://api.tokovoucher.id/produk/code?member_code=M230618KCLS1906XT&signature=f61bf1a2a98739e2110613d2ccb765ff&'
				// ).then(resp=>{
				// 	res.json(resp.data);
				// })
				const devkey = 'dev-da2994f0-0eb9-11ee-af39-e78992aaf8f1';
				const username = 'gesawegwMkJD';
				const data = {
					cmd:'prepaid',
					username,
					sign:md5(username+devkey+'pricelist')
				}
				axios.post('https://api.digiflazz.com/v1/price-list',data,{
					headers:{
						"content-type":"application/json"
					}
				}).then(resp=>{
					res.json(resp.data);
				})
			}
		},
		orderCheck:{
			check(req,res){
				const data = {
					username:config.username,
					commands:'inquiry',
					sign:md5(config.username+config.apiKey+req.query.trxid),
					ref_id:req.query.trxid
				}
				axios.post('https://testprepaid.mobilepulsa.net//v1/legacy/index/',data,{
					headers:{
						"content-type":"application/json"
					}
				}).then(resp=>{
					res.json(resp.data);
				})
			}
		},
		order:{
			orderPay(req,res){
				const paymentInfo = req.body.payment.split('.');
				const data = {
					name:req.body.validationData.name,
					phone:req.body.validationData.phone,
					email:req.body.validationData.email,
					amount:req.body.products.ammount,
					comments:"GMarket Payment",
					"notifyUrl":"https://gemastore.cyclic.app/paymentcallback", // your callback url
					"referenceId":`gmtrx${req.body.timestamp}`, // your reference id or transaction id
					"paymentMethod":paymentInfo[0],
					"paymentChannel":paymentInfo[1]
				};
				const timestamp = req.body.timestamp;
				let bodyEncrypt = crypto.SHA256(JSON.stringify(data));
				let stringtosign = "POST:"+paymentConfig.va+":"+bodyEncrypt+":"+paymentConfig.apikey;
				let signature = crypto.enc.Hex.stringify(crypto.HmacSHA256(stringtosign, paymentConfig.apikey));
				fetch(
					paymentConfig.demourl,
					{
						method: "POST",
						headers: {
							Accept: 'application/json', 'Content-Type': 'application/json',
							va: paymentConfig.va,
							signature,
							timestamp
						},
						body: JSON.stringify(data)
					}
				)
				.then((response) => response.json())
				.then((responseJson) => {
					res.json(responseJson);
				})
			},
			orderPulsa(req,res){
				const data = req.body;
				const sign = md5(config.username+config.apiKey+data.ref_id);
				Object.assign(data,{sign,username:config.username,commands:'topup'});
				axios.post('https://testprepaid.mobilepulsa.net//v1/legacy/index/',{
					body:JSON.stringify(data)
				},{
					headers:{"content-type":"application/json"}
				}).then(resp=>{
					res.json(resp.data);
				})
			}
		}
		
	}
	//handling blocking host.
	if(req.header.Host==='localhost:8080'||req.header.Host===undefined){
		if(schema[type][req.query.type]){
			//handling 'spaces'.
			if(req.query.operator)req.query.operator = filterString(req.query.operator,'%20',' ');
			schema[type][req.query.type](req,res);
		}else res.json({msg:'invalid type given'})
	}else{
		res.json({msg:'access_denied'});
	}
}





