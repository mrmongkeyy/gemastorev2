
module.exports = function(req,res,db){
  const schema = {
    gettweaksdata(req,res,db){
      db.ref('tweakdataconfig').get().then(data=>{
        const valueddata = data.val()||{};
        res.json(valueddata);
      })
    },
    getuserlist(req,res,db){
      db.ref('users').get().then(data=>{
        const valueddata = data.val()||{};
        res.json(valueddata);
      })
    },
    gethistory(req,res,db){
      db.ref('history').get().then(data=>{
        const valueddata = data.val()||{};
        res.json(valueddata);
      })
    },
    getvoucherlist(req,res,db){
      db.ref('vouchers').get().then(data=>{
        const valueddata = data.val()||{};
        res.json(valueddata);
      })
    },
    updatetweaks(req,res,db){
      db.ref('tweakdataconfig').update(req.body.data).then(()=>{
        res.json({valid:true});
      })
    }
  }
  if(!schema[req.body.type]){
    res.json({valid:false,msg:'invalid type given'})
  }else schema[req.body.type](req,res,db);
}