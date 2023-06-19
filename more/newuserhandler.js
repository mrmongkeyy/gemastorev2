const mailer = require('./mailer');
module.exports = function(req,res,db){
	
  const savetopending = ()=>{
    const fixedemail = req.body.email.split('@');
    db.ref(`pendingregis/${fixedemail[0]}`).set(req.body).then(()=>{
      req.body.id = fixedemail[0];
      mailer(req.body,()=>{
        res.json({
			    valid:true,
          msg:'Email Sended'
        })
      },()=>{
        res.json({
			    valid:true,
          msg:'Cannot Sending VEmail'
        })
      });
    })
  }
  db.ref('users').get().then((data)=>{
    const datanew = data.val()||{};
    if(datanew[req.body.email.split('@')[0]]){
      res.json({valid:false,msg:'Email exist'});
    }else{
      savetopending();
    }
  })
}