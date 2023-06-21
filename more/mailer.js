const nodemailer = require('nodemailer');
const mailerTransforter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'mrmongkeyy@gmail.com',
    pass:'iuxbxcerqssluupr'
  }
})
module.exports = function(onfine,onerror,details){
	let mailDetails = details||{
		from:'gmarket.cyclic.app',
		to:data.email,
		subject:'Gmarket Verification Account!',
		text:'Just verify your email address!',
		html:`
			<div>
				<div>
					<div style="font-size:24px">Email Verification</div>
					<div>
						Hallo ${data.name}, Selamat bergabung dengan GMARKET.<p>
            Silahkan Verifikasi Akun Anda dengan mengklik Link Verifikasi Dibawah ini.
					</div>
					<div>
          <div>
            <a href=${data.origin}/verifymyaccount?id=${data.id}&&valid=${data.timeStamp}>${data.origin}/verify?id=${data.id}&&valid=${data.timeStamp}</a></div>
          </div>
          <div>
            Link akan kadaluwarsa dalam 24 jam, gunakan waktu anda dengan baik!
          </div>    
        </div>
			</div>
		`
	};
	mailerTransforter.sendMail(details, function(err) {
		if(err) {
			console.log(err);
			onerror();
		}else {
			onfine();
		}
	});
}