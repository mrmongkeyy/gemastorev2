const app = {
	lsName:'gmarketsessionstorage',
	db:{},
	thumbnailpath:{
		"FREE FIRE":"/file?fn=ff.png",
		"MOBILE LEGENDS":"/file?fn=ml.png",
		"Higgs Domino":"/file?fn=hd.png",
		"Lords Mobile":"/file?fn=lordsmobile.png",
		"Call Of Duty Mobile":"/file?fn=codm.png",
		"ARENA OF VALOR":"/file?fn=aov.png",
		"POINT BLANK":"/file?fn=pointblank.png",
		"Light Of Thel":"/file?fn=lot.png",
		"Dragon Raja":"/file?fn=dragonraja.png",
		"Genshin Impact":"/file?fn=gi.png",
		"Sausage Man":"/file?fn=sgm.png",
		"Omega Legends":"/file?fn=omgl.png",
		"PUBG Mobile":"/file?fn=pm.png",
		"Apex Legend":"/file?fn=apexlegend.png",
		"Super SUS":"/file?fn=sussuper.png",
		"HAGO":"/file?fn=hg.png",
		"Valorant":"/file?fn=valo.png",
		"Be The King":"/file?fn=btk.png",
		"Honkai Impact 3":"/file?fn=honkaiimpact.png",
		"League of Legends":"/file?fn=lol.png",
		"Ragnarok M":"/file?fn=rog.png",
		"Ragnarok X ":"/file?fn=rog.png",
		"Tower Of Fantasy":"/file?fn=tof.png",
		"Chimeraland":"/file?fn=chimeraland.png",
		"Ys 6 Mobile":"/file?fn=ys6mobile.png",
		"Cloud Song":"/file?fn=cloudsong.png",
		"Hyper Front":"/file?fn=hf.png",
		"Life After":"/file?fn=lifeafter.png",
		"One Punch Man":"/file?fn=opm.png",
		"Never After":"/file?fn=nafter.png",
		"Heaven Saga":"/file?fn=sagaheaven.png",
		"Football Master 2":"/file?fn=footballmaster2.png",
		"Light of Thel":"/file?fn=lot.png",
		"Tom and Jerry: Chase":"/file?fn=tomandjerrychase.png",
		"League of legends":"/file?fn=log.png",
		"Chimeraland":"/file?fn=chimeraland.png",
		"MU Origin 2":"/file?fn=muorigin2.png",
		"MU Origin 3":"/file?fn=muorigin3.png",
		"Sky: Children of the Light":"/file?fn=skychildrenofthelight.png",
		"Marvel Super War":"/file?fn=marvelsuperwar.png",
		"Crossing Void":"/file?fn=crossingworld.png",
		"Conquer Online":"/file?fn=conqueronline.png",
		"Naruto Slugfest X":"/file?fn=narutoslug.png",
		"MangaToon":"/file?fn=mangatoon.png",
		"Laplace M":"/file?fn=laplacem.png",
		"Heroes Evolved":"/file?fn=heroesevolved.png",
		"Eudemons Online":"/file?fn=eudemonsonline.png",
		"LUDO CLUB":"/file?fn=ludoclub.png",
		"Revelation: Infinite Journey":"/file?fn=revalation.png",
		"Ace Racer":"/file?fn=aceracer.png",
		"Marvel Snap":"/file?fn=marvelsnap.png",
		"Ragnarok Origin Global":"/file?fn=rog.png",
		"Seal M Sea":"/file?fn=sealmsea.png",
		"Life Makeover":"/file?fn=lifemakeover.png",
		"Ensemble Stars Music":"/file?fn=esm.png",
		"Clash Of Clans":"/file?fn=coc.png",
		"Rise of Kingdom - ID Number":"/file?fn=risekingdom.png",
		"Goddess of Victory : Nikke":"/file?fn=gov.png",
		"Project Entropy":"/file?fn=projectentropy.png",
		"State of Survival: Zombie War":"/file?fn=stateofsurvival.png",
		"Luna Online New World":"/file?fn=lunathegame.png",
		"Mirage Perfect Skyline":"/file?fn=mps.png",
		"Lokapala":"/file?fn=lokapala.png",
		"Hay Day":"/file?fn=hayday.png",
		"Clash Royale":"/file?fn=cr.png",
		"PLN":"/file?fn=pln.png",
		"Pulsa Telkomsel":"/file?fn=/data/telkom.png",
		"Pulsa AXIS":"/file?fn=/data/axis.png",
		"Pulsa INDOSAT":"/file?fn=/data/indosatooredo.png",
		"Pulsa XL":"/file?fn=/data/xl.png",
		"SMARTFREN":"/file?fn=/data/smartfren.png",
		"Pulsa TRI":"/file?fn=/data/tri.png",
		"Razer Gold":"/file?fn=razergold.png",
		"Unipin Voucher":"/file?fn=unipin.png",
		"Google Play":"/file?fn=gplay.png",
		"Garena Shell":"/file?fn=garenashell.png",
		"Wifi ID":"/file?fn=wifiid.png",
		"PUBG Mobile Voucher":"/file?fn=pm.png",
		"Steam Wallet":"/file?fn=steamwallet.png",
		"Stumble Guys":"/file?fn=stumble.png",
		"Roblox":"/file?fn=roblox.png",
		"MINECRAFT":"/file?fn=minecraft.png",
		"Playstation":"/file?fn=pstore.png",
		"Voucher Valorant":"/file?fn=valo.png",
		"Honkai : Star Rail Google Play":"/file?fn=aov.png",
		"Vidio":"/file?fn=aov.png",
		"Bigo Live":"/file?fn=bigolive.png",
		"Lita":"/file?fn=litacoin.webp",
		"Mango Live":"/file?fn=mangolive.png",
		"Sugar Live":"/file?fn=sugarlive.webp",
		"Viu Premium":"/file?fn=viu.png",
		"We TV Premium":"/file?fn=wetv.webp",
		"Genflix":"/file?fn=genflix.png",
		"Voucher AXIS":"/file?fn=/data/axis.png",
		"Voucher TELKOMSEL":"/file?fn=/data/telkom.png",
		"Voucher TRI":"/file?fn=/data/tri.png",
		"Voucher XL":"/file?fn=/data/xl.png",
		"Voucher INDOSAT":"/file?fn=/data/indosatooredo.png",
		"Voucher SMARTFREN":"/file?fn=/data/smartfren.png",
		"DATA TELKOMSEL":"/file?fn=/data/telkom.png",
		"DATA AXIS":"/file?fn=/data/axis.png",
		"DATA XL":"/file?fn=/data/xl.png",
		"DATA INDOSAT":"/file?fn=/data/indosatooredo.png",
		"DATA SMARTFREN":"/file?fn=/data/smartfren.png",
		"TRI":"/file?fn=/data/tri.png",
		"TELKOMSEL":"/file?fn=/data/telkom.png",
		"AXIS":"/file?fn=/data/axis.png",
		"XL":"/file?fn=/data/xl.png",
		"INDOSAT":"/file?fn=/data/indosatooredo.png",
		"DANA":"/file?fn=/wallet/dana.png",
		//"Ovo":"/file?fn=/wallet/ovo.png",
		"GO PAY":"/file?fn=/wallet/gopay.png",
		"SHOPEE PAY":"/file?fn=/wallet/shopeepay.png",
		"Maxim":"/file?fn=/wallet/maxim.png",
		"Grab":"/file?fn=/wallet/grab.png",
		"LinkAja":"/file?fn=/wallet/linkaja.png",
		"Sakuku":"/file?fn=/wallet/sakuku.png",
		"Injek V.Telkomsel":"/file?fn=/data/telkom.png",
		"Injek V.Axis":"/file?fn=/data/axis.png",
		"Injek V.XL":"/file?fn=/data/xl.png",
		"Nex Parabola":"/file?fn=nexparabola.png",
		"Telkomsell":"/file?fn=/data/telkom.png",
		"by.U":'/file?fn=/wallet/byu.png'
	},
	template:{
		underDevelopment(){
			return makeElement('div',{
				style:`
					position:absolute;
					background:RGB(0,0,0,.5);
					width:100%;
					height:100%;
					display:flex;
					justify-content:center;
					align-items:center;
					z-index:1;
				`,
				innerHTML:`
					<div
					style="
						background:white;
						width:300px;
						height:300px;
						display:flex;
						align-items:center;
						flex-direction:column;
					"
					>
						<div
						style="
							display:flex;
							justify-content:flex-end;
							width:100%;
							background:#d1d9c7;
						"
						>
							<div id=closebutton
							style="
								width:24px;
								height:24px;
								padding:10px;
								background:#b9b9b9;
							"
							>
								<img src=/file?fn=closex.png
								style="
									width:100%;
									height:100%;
									cursor:pointer;
								"
								>
							</div>
						</div>
						<div
						style="
							height:100%;
							display:flex;
							flex-direction:column;
							align-items:center;
							justify-content:center;
						"
						>
							<div>
								This web is currently UNDERDEVELOPMENT!
							</div>
							<div>
								Cannot Process Your Request Yet!
							</div>
						</div>
					</div>
				`,
				onadded(){
					this.find('#closebutton').onclick = ()=>{
						this.remove();
					}
				}
			})
		},
		rootboxcontent(data){
			return makeElement('div',{
				style:`
					padding:32px;
					width:70%;
				`,
				data,
				innerHTML:`

				`,
				onadded(){
					this.processInfo();
				},
				processInfo(){
					this.data.forEach(datain=>{
						this.addChild(makeElement('div',{
							style:`
								display:flex;
								justify-content:space-between;
								width:100%;
								gap:10px;
								margin-bottom:5px;
							`,
							innerHTML:`
								<div
								style="
									width:30%;
								"
								>${datain.key}</div>
								<div
								style="
									width:70%;
								"
								>${datain.value}</div>
							`
						}))
					})
					
				}
			})
		},
		boxItem(data,info,displayOption){
				const imgsrc = app.thumbnailpath[data.brand]?app.thumbnailpath[data.brand]:'/file?fn=hg.png';
		return makeElement('div',{
					dataid:data.buyer_sku_code,
					info:info,
			id:'box-in',
			innerHTML:`
			<div id="thumbbox"
			>
			<img src="${imgsrc}"
			style="
				object-fit: cover;
				background:white;
							${data.settings?'width:'+data.settings.width+';'+'height:'+data.settings.height+';':''}
			"
			>
			</div>
			<div
			style="
			padding: 8%;
						width: 84%;
						text-align: center;
			"
			>
			${displayOption?data[displayOption]:data.brand}
			</div>
			`
		})
		},
		noData(){
			return makeElement('div',{
				style:`
					width:100%;
					height:100%;
					display:flex;
					align-items:center;
					justify-content:center;
					cursor:initial;
				`,
				innerHTML:`
					<div>Tidak Ada Data.</div>
				`
			})
		},
		buyMenu(info,filterBase,configaddition,uiinfo){
			const data = info.split(',');
			return makeElement('div',{
				userData:{
					products:{
						ammount:0
					},
					validationData:{
						email:null,
						phone:null,
						name:null
					},
					targetData:{
						hp:null,
						gameid:null,
						serverid:null
					},
					payment:null
				},
				style:`
					position:absolute;
					width:100%;
					height:100%;
					background:rgb(0 0 0 / 50%);
					display:flex;
					align-items:center;
					justify-content:center;
				`,
				innerHTML:`
					<div id=buymenuwhitebox
					style="
						background:white;
						height:100%;
						width:100%;
						display:flex;
						flex-direction:column;
					"
					>
						<div
						style="
							display:flex;
							justify-content:space-between;
							padding:10px;
							border-bottom:2px solid #f1f1f1;
						"
						>
							<div
							style="
								width:100%;
								height:16px;
								display:flex;
								align-items:center;
								padding:5px;
								font-size:16px;
							"
							>
								Pastikan Data anda benar!
							</div>
							<div id=closebutton
							style="
								width:16px;
								height:16px;
								display:flex;
								align-items:center;
								justify-content:center;
								padding:5px;
							"
							>
								<img src=/file?fn=blackclose.png
								style="
									width:14px;
									height:14px;
									cursor:pointer;
								"
								>
							</div>
						</div>
						<div id=rootboxcontent
						style="
							height:100%;
							overflow:auto;
							font-size:18px;
							position:relative;
							background:#edeef1;
						"
						>
							<div
							style="
								margin-bottom:8px;
								width:100%;
								border-radius:0 0 20px 20px;
							"
							>
								<div
								style="
									text-align:center;
									padding:10px;
									display:flex;
									justify-content:center;
									align-items:center;
									border:2px solid white;
									position:relative;
									border-radius:0 0 20px 20px;
									overflow:hidden;
								"
								>
									<img src=${uiinfo}
									style="
										width:100%;
										position:absolute;
										height:100%;
										object-fit:cover;
										opacity:.5;
									">
									<img src=${uiinfo}
									style="
										width:200px;
										height:200px;
										padding:5px;
										background:white;
										border-radius:50%;
										z-index:1;
									"
									>
								</div>
							</div>
							<div
							style="
								margin-bottom:8px;
								background:white;
								padding:32px;
								color:black;
								border-radius:20px;
							"
							>
								<div
								style="
									margin-bottom:10px;
									padding-bottom: 5px;
									font-weight:bold;
								"
								>Masukan Data Anda</div>
								<div style="margin-bottom:10px;">
									<div>
										<div>Email</div>
										<div style=display:flex;>
											<input placeholder="Masukan Email Anda" style=width:100%;>
										</div>
									</div>
									<div>
										<div>Phone</div>
										<div style=display:flex;>
											<input placeholder="Masukan Phone Anda" style=width:100%;>
										</div>
									</div>
								</div>
								<div style="display:${data[0]==='Games'?'block':'none'};">
									<div>
										<div>Game ID</div>
										<div style=display:flex;>
											<input placeholder="Masukan ID Game Anda" style=width:100%;>
										</div>
									</div>
									<div>
										<div>Server ID / Jika Ada</div>
										<div style=display:flex;>
											<input placeholder="Masukan ID Server Anda" style=width:100%;>
										</div>
									</div>
								</div>
								<div style="display:${data[0]!='Games'?'block':'none'};">
									<div>
										<div>Hp</div>
										<div style=display:flex;>
											<input placeholder="Masukan Nomor Anda" style=width:100%;>
										</div>
									</div>
								</div>
								<div>
								</div>
							</div>
							<div id=productparents
							style="
								margin-bottom:8px;
								background:white;
								color:black;
								padding:32px;
								display:flex;
								flex-wrap:wrap;
								border-radius:20px;
							"
							>
								<div
								style="
									margin-bottom:10px;
									padding-bottom: 5px;
									font-weight:bold;
								"
								>Pilih Produk</div>
								
							</div>
							<div
							style="
								margin-bottom:8px;
								background:white;
								color:black;
								padding:32px;
								border-radius:20px;
							"
							>
								<div
								style="
									margin-bottom:10px;
									padding-bottom: 5px;
									font-weight:bold;
								"
								>Pilih Metode Pembayaran</div>
								<div style="
									margin-bottom:10px;
								">
									<div
									style="
										padding: 10px;
										/* background: #111340; */
										/* border-bottom: 2px solid #f1f1f1; */
										color: black;
										border: 2px solid #f1f1f1;
										border-bottom: 0;
										border-radius:10px 10px 0 0;
									"
									>G Market Saldo</div>
									<div style="
										display: flex;
										gap: 10px;
										padding: 0 10px;
										border-radius: 0 0 10px 10px;
										border: 2px solid #f1f1f1;
									">
										<div
										style="
										display: flex;
										gap: 10px;
										padding: 0 10px;
										border-radius: 0 0 10px 10px;
										padding: 10px 0;
    								color: white;
										"
										>
											<div
											style="
											background: #111340;
											padding: 10px;
											border-radius: 5px;
											"
											>G Market Saldo</div>
										</div>
									</div>
								</div>
								<div style="
									margin-bottom:10px;
								">
									<div
									style="
										padding: 10px;
										/* background: #111340; */
										/* border-bottom: 2px solid #f1f1f1; */
										color: black;
										border: 2px solid #f1f1f1;
										border-bottom: 0;
										border-radius:10px 10px 0 0;
									"
									>Virtual Account</div>
									<div style="
										display: flex;
										gap: 10px;
										padding: 0 10px;
										border-radius: 0 0 10px 10px;
										border: 2px solid #f1f1f1;
										justify-content:space-around;
									">
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=bri.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=bni.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=mandiri.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=bca.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
									</div>
								</div>
								<div style=margin-bottom:10px;>
									<div
									style="
										padding: 10px;
										/* background: #111340; */
										/* border-bottom: 2px solid #f1f1f1; */
										color: black;
										border: 2px solid #f1f1f1;
										border-bottom: 0;
										border-radius:10px 10px 0 0;
									"
									>Convenience Store</div>
									<div style="
										display: flex;
										gap: 10px;
										padding: 0 10px;
										border-radius: 0 0 10px 10px;
										border: 2px solid #f1f1f1;
									">
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=alfamart.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=indomaret.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
									</div>
								</div>
								<div>
									<div
									style="
										padding: 10px;
										/* background: #111340; */
										/* border-bottom: 2px solid #f1f1f1; */
										color: black;
										border: 2px solid #f1f1f1;
										border-bottom: 0;
										border-radius:10px 10px 0 0;
									"
									>Qris</div>
									<div style="
										display: flex;
										gap: 10px;
										padding: 0 10px;
										border-radius: 0 0 10px 10px;
										border: 2px solid #f1f1f1;
									">
										<div
										style="
											display:flex;
											align-items:center;
										"
										>
											<img src=/file?fn=qris.png
											style="
												width:64px;
												height:64px;
												border-radius:10px;
												object-fit:contain;
											">
										</div>
									</div>
								</div>
							</div>
							<div
							style="
								margin-bottom:8px;
								background:white;
								color:black;
								padding:32px;
								display:flex;
								flex-wrap:wrap;
								border-radius:20px;
							"
							>
								<div
								style="
									margin-bottom:10px;
									padding-bottom: 5px;
									font-weight:bold;
								"
								>Tambahkan Voucher / Jika Ada</div>
								<div
								style="
									display:flex;
									gap:10px;
									width:100%;
								"
								>
									<input placeholder="Masukan kode voucher anda" style=width:100%;>
								</div>
							</div>
						</div>
						<div
						style="
							height: 32px;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							padding: 20px;
							border-top: 2px solid #f1f1f1;
							gap:10px;
						"
						>
							<div id=totaldisplay
							style="
								padding: 10px 20px;
								display: flex;
								align-items: center;
								height: 100%;
								width: 100%;
								/* border-top: 1px solid; */
								font-size: 14px;
								font-weight: bold;
							"
							>0 Item, Total Rp. 0</div>
							<div id=submitbutton
							style="
								background: #111340;
								color: white;
								padding: 5px 10px;
								display: flex;
								align-items: center;
								height: 100%;
								font-size: 16px;
								border-radius: 10px;
								gap:10px;
							"
							>
								<img src=/file?fn=keranjang.png
								style="
									width:24px;height:24px;
								"
								>Keranjangin
							</div>
							<div id=submitbutton
							style="
								background: #111340;
								color: white;
								padding: 5px 10px;
								display: flex;
								align-items: center;
								height: 100%;
								font-size: 16px;
								border-radius: 10px;
							"
							>
								Beli
							</div>
						</div>
					</div>
				`,
				autoFillData(){
					if(!app.userProfileData)return;
					this.findall('input').forEach(input=>{
						const inputid = input.id.split('.');
						if(inputid[0]==='validationData'){
							input.value = app.userProfileData[inputid[1]==='phone'?'hp':inputid[1]];
							this.userData['validationData'][inputid[1]] = input.value;
						}
					})
				},
				openUserInput(){
					const toDelete = data[0]==='Games'?'pulsa':'topup';
					this.find(`#userInput #${toDelete}`).remove();
					//handling some cases.
					if(toDelete==='pulsa'){
						delete this.userData.targetData.hp;
					}else{
						delete this.userData.targetData.gameid;
						delete this.userData.targetData.serverid;
					}
					this.findall('#userInput input').forEach(input=>{
						input.oninput = ()=>{
							const inputinfo = input.id.split('.');
							this.userData[inputinfo[0]][inputinfo[1]] = input.value;
						}
					})
				},
				openPriceList(){
					const parentBox = this;
					const products = app.db[data[0]][data[1]];
					console.log(products);
					for(let i=0;i<products.length;i+=2){
						const outel = makeElement('div',{
							style:`
							display:flex;
							width:100%;
							margin-bottom:10px;
							justify-content:space-between;
							`,
							onadded(){

							}
						})
						for(let j=0;j<2;j++){
							if(products[i+j]){
								outel.innerHTML += `
								<div
								style="
									width: 48%;
										position: relative;
										display: flex;
										border:2px solid #f1f1f1;
										border-radius:20px;
										overflow:hidden;
										flex-direction:column;
										padding-bottom:32px;
										cursor:pointer;
										align-items:center;
										gap:10px;
								"
								>
									<img src=${uiinfo}
									style="
										width:32px;
										height:32px;
										border-radius:50%;
										object-fit:cover;
										padding-top:10px;
									"
									>
									<div
									style="
										width: 100%;
										/* padding: 10px; */
										background: #ffffffbf;
										/* position: absolute; */
										color: black;
										text-align: center;
									"
									>
										<div>${products[i+j].category}</div>
										<div>${products[i+j].product_name}</div>
										<div>Rp ${getPrice(Number(products[i+j].price)+Number(configaddition.itemmarkupprice))}</div>
									</div>
								</div>
								`
							}
						}
						this.find('#productparents').addChild(outel);
					}
				},
				openVoucherList(){
					this.find('#voucherslistbox').addChild(app.template.vouchershop(app.userProfileData.vouchers,true,true));
					if(objlen(app.userProfileData.vouchers)===0){
						this.find('#voucherslistbox').addChild(makeElement('div',{
							style:`
							width: 100%;
							height: 100%;
							display: flex;
							position: absolute;
							align-items: center;
							justify-content: center;
							`,
							innerHTML:'Tidak Ada Voucher Untuk Digunakan!'
						}))
					}
				},
				showTotal(){
					let total = 0;let itemlen = 0;
					for(let i in this.userData.products){
						if(typeof this.userData.products[i]!='object')continue;
						total += this.userData.products[i].price;
						itemlen += 1;
					}
					this.userData.products.ammount = total;
					this.find('#totaldisplay').innerHTML = `${itemlen} Item, Total Tagihan Rp. ${getPrice(this.userData.products.ammount)}. ${this.userData.payment?`Akan dibayar melalui ${this.userData.payment}.`:'Silahkan pilih metode pembayaran!'}`;
				},
				openPaymentMethod(){
					const pm = this.findall('#valist div');
					const parent = this;
					let selected = null;
					pm.forEach(button=>{
						button.onclick = ()=>{
							if(objlen(parent.userData.products)===0 || button.id==='gmarketsaldo'){
								if(app.userProfileData){
									parent.userData.userInfo = app.userProfileData.email;
									parent.userData.gsaldopaybonus = app.tweaks.gsaldobonus;
								}else return forceRecheck(app.main,'Silahkan Login Terlebih Dahulu!');
							}else if(parent.userData.userInfo)delete parent.userData.userInfo;
							if(selected){
								selected.classList.remove('selectedprice');
							}
							selected = button;
							selected.classList.add('selectedprice');
							parent.userData.payment = button.id;
							parent.showTotal();
						}
					})
				},
				check(){
					//user input handle.
					for(let i in this.userData){
						if(i==='validationData' || i==='targetData'){
							for(let j in this.userData[i]){
								if(this.userData[i][j]===null)return {status:false,msg:`Silahkan Lengkapi User Info Anda Terlebih Dahulu!`}
							}
						}
					}
					if(this.userData.products.ammount===0)return {status:false,msg:'Silahkan Pilih Produk Yang Anda Inginkan Terlebih Dahulu!'}
					if(!this.userData.payment)return {status:false,msg:'Pilih metode pembayarannya dulu bang!'}
					return {status:true}
				},
				setupSubmitButton(){
					this.find('#submitbutton').onclick = ()=>{
						const validity = this.check();
						if(validity.status){
							forceRecheck(app.main,'Semua data valid, mohon tunggu GMarket sedang memproses permintaaan.');
							this.userData.timestamp = getTimestamp();
							app.content.addChild(openLoading('Mohon Tunggu...',(loading)=>{
								const PaymentHandler = {
									gmarket:{
										orderType:'gmarketsaldopay',
										onload(respdata){
											if(!respdata.valid)forceRecheck(app.main,respdata.msg);
											else{
												forceRecheck(app.main,respdata.msg);
												app.userProfileData.ballance = respdata.leftballance;
												app.userProfileData.points = respdata.nowpoints;
												app.userProfileData.Trxs = respdata.mystrxs;
												app.saveSession(0,false);
												app.givemehome();
											}
										}
									},
									pg:{
										orderType:'orderPay',
										onload(respdata,data){
											if(!respdata.responseJson.Success){
												return forceRecheck(app.main,respdata.Message);
											}
											app.orderpaymentresponseSuccessHandler(respdata,JSON.parse(data).products);
										}
									}
								}
								let state = 'gmarket';
								if(!this.userData.userInfo)state = 'pg';
								cOn.post({
									url:`/order?type=${PaymentHandler[state].orderType}`,
									someSettings:[
										['setRequestHeader','content-type','application/json']
									],
									data:jsonstr(this.userData),
									onload(){
										loading.remove();
										//simple check.
										const respdata = this.getJSONResponse();
										PaymentHandler[state].onload(respdata,this.data);
									}
								})
							}))
						}else{
							forceRecheck(app.main,validity.msg);
						}
					}
				},
				onadded(){
					this.find('#closebutton').onclick = ()=>{
						this.remove();
					}
					//this.setCcEvent();
					this.openPriceList();
					this.setupSubmitButton();
				}
			})
		},
		loginSystem(){
			return makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					display:flex;
					background:#111340c7;
					align-items:flex-start;
					justify-content:center;
					z-index:1;
				`,
				innerHTML:`
					<div
					style="
						background: white;
						display: flex;
						flex-direction: column;
						width: 80%;
						border-radius:0 0 20px 20px;
					"
					>
						<div id=loginlabelhead
						style="
							height: 64px;
							display: flex;
							align-items: center;
							font-size: 18px;
							cursor: pointer;
							justify-content: space-around;
							gap: 10px;
							font-size: 16px;
							border-bottom:2px solid #f1f1f1;
						"
						>
							<div class=active id=putLogin
							style="
								width:100%;
								text-align:center;
							"
							>
								Masuk
							</div>
							<div id=putNewAcount
							style="
								width:100%;
								text-align:center;
							"
							>
								Buat Akun
							</div>
							<div id=putLupaPassword
							style="
								width:100%;
								text-align:center;
							"
							>
								LupaPassword
							</div>
						</div>
						<div id=canvas
						style="
							padding: 5%;
							display: flex;
							align-items: center;
							justify-content: center;
							position:relative;
						"
						>
						</div>
						<div
						style="
							padding:10px 0;
							display:flex;
							align-items:center;
							display:flex;
							justify-content:center;
						"
						>
							<div class="active getborder" id=continuewithnoaccount
							style="
								text-align:center;
								font-size:18px;
								padding:10px;
								cursor:pointer;
							"
							>
								Lanjutkan Tanpa Akun
							</div>
						</div>
					</div>
				`,
				putLupaPassword(){
					this.find('#canvas').clear();
					this.find('#canvas').addChild(makeElement('div',{
						parent:this,
						style:`
							height: 100%;
							display: flex;
							flex-direction: column;
							padding: 20px;
						`,
						innerHTML:`
							<div
							style="
								font-size:18px;
								margin-bottom:10px;
							"
							>
								Masukan Email Anda!
							</div>
							<div style="margin-bottom:24px;">
								<div id=email>
									<input placeholder="Masukan Email Anda..." type=email>
								</div>
							</div>
							<div id=submit
							style="
								margin-top:10px;
								padding:10px;
								background:#111340;
								font-size:18px;
								color:white;
								text-align:center;
								border-radius:20px;
								cursor:pointer;
							"
							>
								Kirim Otp
							</div>
						`,
						dataUser:{
							email:null
						},
						notEmpty(){
							let valid = true;
							for(let i in this.dataUser){
								if(!this.dataUser[i])valid = false;
							}
							return valid;
						},
						validCheck(){

						},
						userInputEvent(){
							this.findall('input').forEach(input=>{
								input.oninput = ()=>{
									this.dataUser[input.parentElement.id] = input.value;
								}
							})
						},
						checkMyData(){
							const responseHandle = (resp)=>{
								if(resp.valid){
									forceRecheck(app.main,'Otp Terkirim!');
									this.parent.remove();
								}else{
									forceRecheck(app.main,resp.msg);
									this.parent.putLogin();
								}
							}
							cOn.post({
								url:'/sendotp',
								someSettings:[
									['setRequestHeader','content-type','application/json']
								],
								data:jsonstr(this.dataUser),
								onload(){
									const resp = this.getJSONResponse();
									responseHandle(resp);
								}
							})
						},
						onadded(){
							this.userInputEvent();
							this.submitEvent();
						},
						submitEvent(){
							this.find('#submit').onclick = ()=>{
								if(this.notEmpty()){
									this.showLoading();
									this.checkMyData();
								}else forceRecheck(app.main,'Tolong diperiksa kembali!');
							}
						},
						onadded(){
							this.userInputEvent();
							this.submitEvent();
						},
						showLoading(){
							this.parentElement.addChild(makeElement('div',{
								id:'loading',
								style:`
									position:absolute;
									width:100%;
									height:100%;
									background:white;
									display:flex;
									align-items:center;
									justify-content:center;
								`,
								innerHTML:`
									<div>
										Tunggu Sebentar...
									</div>
								`
							}))
						}
					}))
				},
				putLogin(){
					this.find('#canvas').clear();
					this.find('#canvas').addChild(makeElement('div',{
						parent:this,
						style:`
							height: 100%;
							display: flex;
							flex-direction: column;
							padding: 20px;
						`,
						innerHTML:`
							<div
							style="
								font-size:18px;
								margin-bottom:10px;
							"
							>
								Masukan Data Anda!
							</div>
							<div>
								<div>Email</div>
								<div id=email>
									<input placeholder="Masukan Email Anda..." type=email>
								</div>
							</div>
							<div style="margin-bottom:24px;">
								<div>Password</div>
								<div id=password>
									<input placeholder="Masukan Password Anda..." type=password>
								</div>
							</div>
							<div id=submit
							style="
								margin-top:10px;
								padding:10px;
								background:#111340;
								font-size:18px;
								color:white;
								text-align:center;
								border-radius:20px;
								cursor:pointer;
							"
							>
								Login
							</div>
						`,
						dataUser:{
							email:null,
							password:null
						},
						notEmpty(){
							let valid = true;
							for(let i in this.dataUser){
								if(!this.dataUser[i])valid = false;
							}
							return valid;
						},
						validCheck(){

						},
						userInputEvent(){
							this.findall('input').forEach(input=>{
								input.oninput = ()=>{
									this.dataUser[input.parentElement.id] = input.value;
								}
							})
						},
						checkMyData(){
							const responseHandle = (resp)=>{
								if(resp.valid){
									forceRecheck(app.main,'Login Berhasil!');
									app.processSuccessLogin(resp);
									this.parent.remove();
								}else{
									forceRecheck(app.main,resp.msg);
									this.parent.putLogin();
								}
							}
							cOn.post({
								url:'/login',
								someSettings:[
									['setRequestHeader','content-type','application/json']
								],
								data:jsonstr(this.dataUser),
								onload(){
									const resp = this.getJSONResponse();
									responseHandle(resp);
								}
							})
						},
						onadded(){
							this.userInputEvent();
							this.submitEvent();
						},
						submitEvent(){
							this.find('#submit').onclick = ()=>{
								if(this.notEmpty()){
									this.showLoading();
									this.checkMyData();
								}else forceRecheck(app.main,'Tolong diperiksa kembali!');
							}
						},
						onadded(){
							this.userInputEvent();
							this.submitEvent();
						},
						showLoading(){
							this.parentElement.addChild(makeElement('div',{
								id:'loading',
								style:`
									position:absolute;
									width:100%;
									height:100%;
									background:white;
									display:flex;
									align-items:center;
									justify-content:center;
								`,
								innerHTML:`
									<div>
										Tunggu Sebentar...
									</div>
								`
							}))
						}
					}))
				},
				putNewAcount(){
					this.find('#canvas').clear();
					this.find('#canvas').addChild(makeElement('div',{
						parent:this,
						style:`
							height: 100%;
							display: flex;
							flex-direction: column;
							padding: 20px;
						`,
						innerHTML:`
							<div
							style="
								font-size:18px;
								margin-bottom:10px;
							"
							>
								Masukan Data Anda!
							</div>
							<div>
								<div>Email</div>
								<div id=email>
									<input placeholder="Masukan Email Anda..." type=email>
								</div>
							</div>
							<div>
								<div>No. Hp</div>
								<div id=hp>
									<input placeholder="Masukan No Hp Anda..." type=number>
								</div>
							</div>
							<div>
								<div>Nama Anda</div>
								<div id=name>
									<input placeholder="Masukan Nama Anda..." type=email>
								</div>
							</div>
							<div style="margin-bottom:24px;">
								<div>Password</div>
								<div id=password>
									<input placeholder="Masukan Password Anda..." type=password>
								</div>
							</div>
							<div id=submit
							style="
								margin-top:10px;
								padding:10px;
								background:#111340;
								font-size:18px;
								color:white;
								text-align:center;
								border-radius:20px;
								cursor:pointer;
							"
							>
								Buat Akun
							</div>
						`,
						dataUser:{
							email:null,
							hp:null,
							name:null,
							password:null
						},
						notEmpty(){
							let valid = true;
							for(let i in this.dataUser){
								if(!this.dataUser[i])valid = false;
							}
							return valid;
						},
						validCheck(){

						},
						userInputEvent(){
							this.findall('input').forEach(input=>{
								input.oninput = ()=>{
									this.dataUser[input.parentElement.id] = input.value;
								}
							})
						},
						saveDataRegis(){
							this.dataUser.origin = origin;
							this.dataUser.timeStamp = getTime();
							const processResponse = (resp)=>{
								if(resp.valid){
									forceRecheck(app.main,'Prosess Registrasi Berhasil Dilakukan! Silahkan Cek Email Anda!');
									this.parent.putLogin();
								}else{
									forceRecheck(app.main,`Prosess Registrasi Mengalami Masalah, ${resp.msg}`);
									this.parent.putNewAcount();
								}
							}
							cOn.post({
								url:'/newfriendscome',
								someSettings:[
									['setRequestHeader','content-type','application/json']
								],
								data:jsonstr(this.dataUser),
								onload(){
									const response = this.getJSONResponse();
									processResponse(response);
								}
							})
						},
						submitEvent(){
							this.find('#submit').onclick = ()=>{
								if(this.notEmpty()){
									this.showLoading();
									this.saveDataRegis();
								}else forceRecheck(app.main,'Tolong diperiksa kembali!');
								
							}
						},
						onadded(){
							this.userInputEvent();
							this.submitEvent();
						},
						showLoading(){
							this.parentElement.addChild(makeElement('div',{
								id:'loading',
								style:`
									position:absolute;
									width:100%;
									height:100%;
									background:white;
									display:flex;
									align-items:center;
									justify-content:center;
								`,
								innerHTML:`
									<div>
										Tunggu Sebentar...
									</div>
								`
							}))
						}
					}))
				},
				setupCc(){
					const ccs = this.findall('#loginlabelhead div')
					let activecc = ccs[0];
					ccs.forEach(div=>{
						div.onclick = ()=>{
							if(activecc){
								activecc.classList.remove('active');
							}
							div.classList.add('active');
							activecc = div;
							this[div.id]();
						}
					})
					ccs[0].click();
				},
				onadded(){
					this.setupCc();
					this.find('#continuewithnoaccount').onclick = ()=>{
						this.remove();
					}
				}
			})
		},
		myProfilePage(){
			return makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					background:white;
					display:flex;
					align-items:center;
					justify-content:center;
				`,
				innerHTML:`
					<div
					style="
						width:90%;
						height:90%;
						display:flex;
						flex-direction:column;
						gap:15px;
					"
					>
						<div id=profileupperbuttons
						style="
							height:10%;
							width:100%;
							display:flex;
							justify-content:flex-end;
							gap:10px;
							align-items:center;
							font-size:16px;
						"
						>
							<div id=makedepo>
								Deposit
							</div>
							<div id=logout>
								Keluar
							</div>
						</div>
						<div
						style="
							width:100%;
							height:40%;
							display:flex;
							gap:15px;
						"
						>
							<div
							style="
								height:100%;
								width:40%;
								display:flex;
								align-items:center;
								justify-content:center;
								border:1px solid #edeef1;
								border-radius:20px;
								overflow:hidden;
							"
							>
								<div
								style="
									width:100%;
									height:100%;
									background:#edeef1;
									overflow:hidden;
									display:flex;
									align-items:center;
									justify-content:center;
								"
								>
									<div
									style="
										font-size:64px;
									"
									>${app.userProfileData.name[0]}</div>
								</div>
							</div>
							<div
							style="
								width:60%;
								height:100%;
								display:flex;
								justify-content:center;
								flex-direction:column;
								align-items:center;
							">
								<div
								style="
									display:flex;
									flex-direction:column;
									font-size:14px;
									width:100%;
									gap:10px;
									align-items:center;
									font-weight:bold;
								"
								>
									<div
									style="
										width:90%;
										font-size:32px;
									"
									>Hi, ${app.userProfileData.name}</div>
									<div
									style="
										height:100%;
										width:90%;
										display:flex;
										flex-direction:column;
										justify-content:center;
										gap:5px;
									"
									>
										<div
										style="
											display:flex;
											justify-content:space-between;
										"
										>
											<div>Ballance</div>
											<div>Rp. ${getPrice(app.userProfileData.ballance)}</div>
										</div>
										<div
										style="
											display:flex;
											justify-content:space-between;
										"
										>
											<div>G Points</div>
											<div>${app.userProfileData.points} G</div>
										</div>
										<div
										style="
											display:flex;
											justify-content:space-between;
										"
										>
											<div>Email</div>
											<div
											style="
												width:50%;
												display:flex;
												overflow:auto;
											"
											>
												${app.userProfileData.email}
											</div>
										</div>
										<div
										style="
											display:flex;
											justify-content:space-between;
										"
										>
											<div>Hp</div>
											<div
											>${app.userProfileData.hp}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
						style="
							width:100%;
							height:60%;
							border:1px solid #edeef1;
							border-radius:20px;
							display:flex;
							flex-direction:column;
						"
						>
							<div
							style="
								height:20%;
								width:100%;
								display:flex;
								border-bottom:1px solid #edeef1;
								font-size:16px;
								align-items:center;
								justify-content:space-around;
								gap:2px;
								background:#edeef1;
								border-radius:20px 20px 0 0;
							"
							>
								<div class=activecc
								style="
									background:none;
								"
								>History</div>
								<div>Voucher</div>
							</div>
							<div id=moreinforbox
							style="
							display: flex;
							align-items: flex-start;
							justify-content: flex-start;
							height: 100%;
							font-size: 14px;
							font-weight: bold;
							overflow: auto;
							"
							>
								<div>Belum ada data!</div>
							</div>
						</div>
					</div>
				`,
				moreinfostate:'hs',
				generateHistory(){
					// mystrxs
					const moreinfobox = this.find('#moreinforbox');
					const datatrxs = app.userProfileData.Trxs;
					if(datatrxs.length>0)moreinfobox.clear();
					moreinfobox.addChild(makeElement('div',{
						style:`
						`,
						innerHTML:`
							<div
							style="
							display: flex;
							align-items: center;
							gap: 10px;
							padding: 10px 0;
							border-bottom: 1px solid;
							margin-bottom: 10px;
							position:sticky;
							top:0;
							background:white;
							"
							>
								<div
								style="
									width:32px;
									text-align:center;
								"
								>No</div>
								<div
								style="
									width:100px;
									text-align:center;
								">ID</div>
								<div
								style="
									width:100px;
									text-align:center;
								">Ammount</div>
								<div
								style="
									width:100px;
									text-align:center;
								">Payment</div>
								<div
								style="
									width:100px;
									text-align:center;
								">PaymentCode</div>
								<div
								style="
									width:100px;
									text-align:center;
								">Expired</div>
								<div
								style="
									width:100px;
									text-align:center;
								">Status</div>
							</div>
						`,
						generate(){
							datatrxs.forEach((data,i)=>{
								this.addChild(makeElement('div',{
									style:`
										display:flex;
										align-items:center;
										gap:10px;
										margin-bottom:5px;
										font-size:12px;
									`,
									innerHTML:`
										<div
										style="
											width:32px;
											text-align:center;
											overflow:auto;
										"
										>${i+1}.</div>
										<input
										style="
											width:80px;
											text-align:center;
											overflow:auto;
										" value=${data.id}>
										<div
										style="
											width:100px;
											text-align:center;
											overflow:auto;
										">Rp. ${getPrice(data.details.products.ammount)}</div>
										<div
										style="
											width:100px;
											text-align:center;
											overflow:auto;
										">${data.details.payment}</div>
										<input
										style="
											width:80px;
											text-align:center;
											overflow:auto;
										" value=${data.paymentCode||'-'}>
										<div
										style="
											width:100px;
											text-align:center;
											overflow:auto;
										">${data.expired||'-'}</div>
										<div
										style="
											width:100px;
											text-align:center;
											overflow:auto;
										">${data.status}</div>
									`
								}))
							})
						},
						onadded(){
							this.generate();
						}
					}))
				},
				makedepo(){
					forceRecheck(app.main,'Maaf fitur ini sedang dikerjakan!');
				},
				logout(){
					app.userProfileData = null;
					app.deleteSession();
					app.givemehome();
					forceRecheck(app.main,'Logout berhasil!');
				},
				topButtonsSetup(){
					this.findall('#profileupperbuttons div').forEach(button=>{
						button.onclick= ()=>{
							this[button.id]();
						}
					})
				},
				onadded(){
					this.topButtonsSetup();
					this.generateHistory();
				}
			})
		},
		paythisman(ipaymudata,productsbefore){
			return makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					display:flex;
					background:white;
					align-items:center;
					justify-content:center;
				`,
				innerHTML:`
					<div
					style="
						width:90%;
						height:90%;
						display:flex;
						flex-direction:column;
						gap:15px;
					"
					>
						
					</div>
				`,
				QRIS(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=qristitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<img src=https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${ipaymudata.QrString}
								style="
									width:300px;
									height:300px;
									background:aliceblue;
								">
							</div>
							<div
							style="
								width:100%;
								height:50%;
								display:flex;
								align-items:center;
								justify-content:center;
								flex-direction:column;
								gap:10px;
							"
							>
								<div>Silahkan Scan Menggunakan</div>
								<img src=/file?fn=/qris/appthatcanscan.png
								style="
									max-width:90%;
								"
								>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				onadded(){
					this[ipaymudata.Channel]();
				},
				ALFAMART(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=alfamarttitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`,
								StoreFee:`Rp. ${getPrice(ipaymudata.StoreFee)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				INDOMARET(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=indomarettitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`,
								StoreFee:`Rp. ${getPrice(ipaymudata.StoreFee)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				BRI(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=brivatitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note||'Silahkan Lakukan Pembayaran Dengan Nomor Pembayaran '+ipaymudata.PaymentNo}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				BCA(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=bcavatitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note||'Silahkan Lakukan Pembayaran Dengan Nomor Pembayaran '+ipaymudata.PaymentNo}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				MANDIRI(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=mandirivatitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note||'Silahkan Lakukan Pembayaran Dengan Nomor Pembayaran '+ipaymudata.PaymentNo}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				},
				BNI(){
					this.find('div').addChild(makeElement('div',{
						style:`
								padding: 5%;
								width: 90%;
								display: flex;
								flex-direction: column;
								gap: 15px;
						`,
						innerHTML:`
							<div
							style="
								font-size:28px;
								text-align:center;
							"
							>
								<img src=/file?fn=bnivatitle.png
								style="
									max-width:90%;
								"
								>
								<div>Rp. ${getPrice(ipaymudata.Total)}</div>
							</div>
							<div
							style="
								width:100%;
								text-align:center;
							"
							>
								<div
								style="
									font-size: 18px;
									text-align: left;
									padding: 31px;
									border: 1px solid aliceblue;
								">
									${ipaymudata.Note||'Silahkan Lakukan Pembayaran Dengan Nomor Pembayaran '+ipaymudata.PaymentNo}
								</div>
							</div>
							<div id=detailfor
							style="
								width:92%;
								height:50%;
								display:flex;
								align-items:space-between;
								justify-content:center;
								flex-direction:column;
								gap:10px;
								padding:4%;
								border:1px solid;
								font-size:18px;
								border-radius:10px;
							"
							>
								
							</div>
						`,
						initDetail(){
							const datatodisplay = {
								TransactionId:ipaymudata.SessionId,
								Expired:ipaymudata.Expired,
								PaymentNo:ipaymudata.PaymentNo,
								Fee:`Rp. ${getPrice(ipaymudata.Fee)}`,
								Total:`Rp. ${getPrice(ipaymudata.Total)}`,
								SubTotal:`Rp. ${getPrice(ipaymudata.SubTotal)}`
							}
							for(let i in datatodisplay){
								this.find('#detailfor').addChild(makeElement('div',{
								style:`
									display:flex;
									align-items:center;
									justify-content:center;
									gap:10px;
								`,
								innerHTML:`
									<div style="
										width:100%;
									">${i}</div>
									${i!='PaymentNo'?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<textarea style="width:100%;">'+datatodisplay[i]+'</textarea>'}
									
								`
							}))
							}
						},
						onadded(){
							this.initDetail();
						}
					}))
				}
			})
		},
		vouchershop(data,deleteheader,cashier=false){
			return makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					background:white;
					display:flex;
					justify-content:center;
					flex-direction:column;
				`,
				innerHTML:`
					<div id=header
					style="
						border-bottom:1px solid #f1f1f1;
						display:flex;
						align-items:center;
						justify-content:space-between;
						width:100%;
						font-size:18px;
						padding:10px 0;
					"
					>
						<div
						style="margin-left:10px;"
						>Voucher List</div>
						<div id=closepanel
						style="
							margin-right:10px;
							padding:2px;
							width:16px;
							height:16px;
							color:black;
							display:flex;
							align-items:center;
							justify-content:center;
							cursor:pointer;
						"
						>X</div>
					</div>
					<div id=voucherbox
					style="
						padding: 5%;
						width: 90%;
						height: 90%;
						display: flex;
						gap: 5px;
						flex-wrap: wrap;
						justify-content: center;
						align-items: flex-start;
						align-content: flex-start;
					"
					>
						
					</div>
				`,
				generateVoucher(){
					const template = (content,id)=>{
						return makeElement('div',{
							id,
							style:`
								display: flex;
								gap: 5px;
								padding: 5px;
								border-radius: 10px;
								border: 1px solid;
								width: 100px;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								position:relative;
							`,
							innerHTML:`
								<img src=/file?fn=voucherdiscount.png
								style="
									width:32px;
									height:32px;
									border-radius:50%;
									background:lightgray;

								"
								>
								<div>
									Diskon ${content.pricecutter}%
								</div>
								<div>
									${content.category+' '+content.type}
								</div>
								<div>
									${content.gpointneeded} G Points
								</div>
								<div>
									exp on ${content.expired}
								</div>
								<div id=buyvoucherbutton
								style="
									background:orange;
									color:white;padding:5px 10px;
									border-radius:20px;
									cursor:pointer
								"
								>
									${!cashier?'Beli':'Pakai'}
								</div>
							`,
							onadded(){
								this.find('#buyvoucherbutton').onclick = ()=>{
									app.buyvoucher(this.id);
								}
							}
						})
					}
					for(let i in data){
						this.find('#voucherbox').addChild(template(data[i],i));
					}
				},
				closepanel(){
					this.find('#closepanel').onclick = ()=>{
						this.remove();
					}
				},
				onadded(){
					this.closepanel();
					this.generateVoucher();
					if(deleteheader){
						this.find('#header').remove();
					}
				}
			})
		}
  },
  setMoremenu(){
		this.openmorebutton = find('#openmoremenu');
		this.moremenu = find('#moremenu');
		this.closemoremenu = find('#closemoremenu');
		this.openmorebutton.onclick = ()=>{
			showElement(this.moremenu.parentElement,'flex');
		}
		this.closemoremenu.onclick = ()=>{
			hideElement(this.moremenu.parentElement);
		}
	},
  scrollTheImg(){
		const imglabel = find('#imglabel');
		const imgs = findall('#imglabel img');
		let imgindex = 0;

		let topme = false;
		let grabbingme = false;
		let movedir = 1;
		const letscheck = ()=>{
			const pos = imgindex + movedir;
			if(pos>=0 && pos<=imgs.length-1){
				imgs[pos].scrollIntoView();
				imgindex = pos;
			}
		}
		imglabel.onmouseover = ()=>{topme=true}
		imglabel.onmouseleave = ()=>{
			topme=false;
			grabbingme=false;
			letscheck();
		}
		
		imglabel.onmousedown = ()=>{grabbingme=true}
		imglabel.onmouseup = ()=>{
			grabbingme=false;
			letscheck();
		}
		
		imglabel.onmousemove = (e)=>{
			if(topme && grabbingme){
				if(e.movementX===0)return;
				imglabel.scrollLeft -= e.movementX;
				movedir = e.movementX>0?-1:1;
			}
		}
		let touchstartposx = 0;
		let movement = 0;
		imglabel.ontouchstart = (e)=>{
			touchstartposx = e.targetTouches[0].clientX;
		}
		imglabel.ontouchmove = (e)=>{
			movement = e.targetTouches[0].clientX-touchstartposx;
			touchstartposx = e.targetTouches[0].clientX;
			if(movement===0)return;
			imglabel.scrollLeft -= movement;
			movedir = movement>0?-1:1;
		}
		imglabel.ontouchend = ()=>{
			letscheck();
		}

  },
  displayContent(typedata){
    const boxdiv = find('#box-div');
		boxdiv.clear();
		let datalen = 0;
    for(let i in this.db[typedata]){
			//if(typeof this.db[typedata][i]!=='object' || !app.thumbnailpath[i])continue;
			const boxin = app.template.boxItem(app.db[typedata][i][0],typedata+','+i);
			boxin.onclick = ()=>{
				this.openCashier(boxin.info,false,boxin.find('img').src);
			}
      boxdiv.addChild(boxin);
			datalen += 1;
    }
		if(datalen===0){
			boxdiv.addChild(app.template.noData());
		}

		//giving scrolling content-box event.
		// this.content.find('#box-div').onscroll = ()=>{
		// 	this.imglabel.style.height = "64px";
		// }
		// this.content.find('#box-div').onscrollend = ()=>{
		// 	this.imglabel.style.height = "300px";
		//}
  },
	content:find('content'),
  init(){
		//this.forceLoginSystem();
		this.requestData();
  },
	processDb(){
		// this.basedata.forEach(data=>{
		// 	if(this.db[data.category_name]){
		// 		if(this.db[data.category_name][data.operator_produk]){
		// 			this.db[data.category_name][data.operator_produk].push(data);
		// 		}else{
		// 			this.db[data.category_name][data.operator_produk] = [data];
		// 		}
		// 	}else{
		// 		const obj = {};
		// 		obj[data.operator_produk] = [data];
		// 		this.db[data.category_name] = data;
		// 	}
		// })
		this.basedata.forEach(item=>{
			if(this.db[item.category]){
				if(this.db[item.category][item.brand]){
					this.db[item.category][item.brand].push(item);
				}else{
					this.db[item.category][item.brand] = [item];
				}
			}else{
				const obj = {};
				obj[item.brand] = [item];
				this.db[item.category] = obj;
			}
		})
	},
	requestData(){
		cOn.get({
			url:'/info?type=all',
			onload(){
				app.basedata = this.getJSONResponse().base.data;
				app.tweaks = this.getJSONResponse().tweaks;
				app.processDb();
				app.setupGlobalNav();
				app.openSearchBar();
				app.scrollTheImg();
				app.setCategory();
				app.forceLoginSystem(true);
			}
		})
	},
	automateThis(){
		for(let i in this.db){
			//handling not necesarry data.
			if(typeof this.db[i]!=='object')continue;
			for(let j in this.db[i]){
				if(typeof this.db[i][j]!=='object')continue;
				this.db[i][j].forEach(data=>{
					if(typeof data==='object'){
						if(!this.thumbnailpath[data.operator_produk]){
							this.thumbnailpath[data.operator_produk] = '/file?fn=';
						}
					}
				})
			}
		}
	},
	underDevelopmentFase(){
		this.main.addChild(app.template.underDevelopment());
	},
	main:find('main'),
	imglabel:find('#imglabel'),
	category:find('#category'),
	setCategory(){
		//generating the categories.
		for(let i in this.db){
			this.category.addChild(makeElement('div',{
				id:i,
				onadded(){
					let text = i;
					text = filterString(text,'-','');
					text = filterString(text,'&','');
					text = filterString(text,' ','');
					this.innerHTML = text;
				}
			}))
		}
		const categorybuttons = this.category.findall('div');
		let state = categorybuttons[0].id;
		let activecc = categorybuttons[0];
		categorybuttons.forEach(button=>{
			button.onclick = ()=>{
				if(activecc)activecc.classList.remove('activecc');
				button.classList.add('activecc');
				activecc = button;
				state = button.id;
				this.categoryState = state;
				this.displayContent(state);
			}
		})
		activecc.click();
		this.categoryState = state;
		this.displayContent(state);
	},
	openCashier(info,filterBase=false,uiinfo){
		let el = this.template.buyMenu(info,filterBase,this.tweaks,uiinfo);
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	hometodelete:[],
	givemehome(){
		this.hometodelete.forEach(el=>{
			el.remove();
		})
	},
	setupGlobalNav(){
		const actionmap = {
			account:'forceLoginSystem',
			home:'givemehome',
			gtovoucher:'iwannavoucher'
		}
		this.main.findall('.gnavbutton').forEach(button=>{
			button.onclick = ()=>{
				if(actionmap[button.id]){
					this.closeSideMenu();
					if(button.id==='account'){
						this[actionmap[button.id]]();
						return;
					}
					this[actionmap[button.id]](button);
				}else this.underDevelopmentFase();
			}
		})
	},
	doFilteringData(value){
		const validdata = {};
		for(let i in this.db[this.categoryState]){
			if(typeof this.db[this.categoryState][i] != 'object')continue;
			if(i.toLowerCase().indexOf(value.toLowerCase())!=-1){
				validdata[i] = this.db[this.categoryState][i];
			}
		}
		const boxdiv = find('#box-div');
		boxdiv.clear();
		let datalen = 0;
    for(let i in validdata){
			validdata[i].forEach(data=>{
				const boxin = this.template.boxItem(data,this.categoryState+','+data.brand,'product_name');
				boxin.onclick = ()=>{
					console.log(boxin.dataid);
					this.openCashier(boxin.info,boxin.dataid);
				}
				boxdiv.addChild(boxin);
				datalen += 1;
			})
    }
		if(datalen===0){
			boxdiv.addChild(this.template.noData());
		}
	},
	openSearchBar(button){
		const scb = this.content.find('#searchBarInput');
		//const imglabel = this.content.find('#imglabel');
		if(this.scbopened){
			//hideElement(scb);
			//showElement(imglabel,'flex');
			this.scbopened = false;
			//button.find('img').src = '/file?fn=whitefinder.png';
			scb.find('input').value = '';
		}else{
			//showElement(scb,'flex');
			//scb.find('input').focus();
			if(!scb.find('input').onkeydown){
				scb.find('input').onkeydown = (e)=>{
					if(e.code==='Enter' && scb.find('input').value.length>0){
						this.doFilteringData(scb.find('input').value);
					}
				}
			}
			if(!scb.find('div').onclick){
				scb.find('div').onclick = (e)=>{
					if(scb.find('input').value.length>0){
						this.doFilteringData(scb.find('input').value);
					}
				}
			}
			//hideElement(imglabel);
			this.scbopened = true;
			//button.find('img').src = '/file?fn=closex.png';
		}
	},
	forceLoginSystem(init=false){
		if(this.userProfileData||this.userLogCheck()){
			if(!init)this.generateMyProfile();
		}else this.main.addChild(app.template.loginSystem());
	},
	generateMyProfile(){
		this.hometodelete.forEach(el=>{
			el.remove();
		})
		const el = app.template.myProfilePage();
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	orderpaymentresponseSuccessHandler(ipaymuresponse,databefore){
		app.userProfileData.Trxs = ipaymuresponse.trxdata;
		app.saveSession(0,false);
		ipaymuresponse = ipaymuresponse.responseJson.Data;
		this.content.find('#buymenuwhitebox').parentElement.remove();
		const el = app.template.paythisman(ipaymuresponse,databefore);
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	userLogCheck(){
		const UserSession = this.getSession();
		if(UserSession && UserSession.valid > new Date().getTime()){
			this.userProfileData = UserSession;
			return true;
		}
		return false;
	},
	getSession(){
		return JSON.parse(localStorage.getItem(this.lsName));
	},
	saveSession(timeplus,setValidity=true){
		if(setValidity)return localStorage.setItem(this.lsName,jsonstr(Object.assign(this.userProfileData,{valid:getTimePlus(timeplus)})))
		localStorage.setItem(this.lsName,jsonstr(this.userProfileData));
	},
	processSuccessLogin(response){
		this.userProfileData = response.msg;
		this.saveSession(1800000);
	},
	closeSideMenu(){
		//hideElement(this.main.find('#moremenu').parentElement);
	},
	deleteSession(){
		localStorage.removeItem(this.lsName);
	},
	iwannavoucher(){
		this.loadVoucher();
	},
	loadVoucher(){
		const onload = (data)=>{
			const voucherpanel = this.template.vouchershop(data);
			this.hometodelete.push(voucherpanel);
			this.content.addChild(voucherpanel);	
		}
		cOn.post({
			url:'/admin',
			someSettings:[
				['setRequestHeader','content-type','application/json']
			],
			data:jsonstr({type:'getvoucherlist'}),
			onload(){
				onload(this.getJSONResponse());
			}
		})
	},
	buyvouchersuccesshandler(data){
		this.userProfileData.vouchers = data.currentVouchers;
		this.userProfileData.points = data.points;
	},
	buyvoucher(voucherid){
		if(!this.userProfileData)return forceRecheck(app.main,'Harap Login Terlebih Dahulu!');
		else{
			cOn.post({
				url:'/admin',
				someSettings:[
					['setRequestHeader','content-type','application/json']
				],
				data:jsonstr({type:'buyyingvoucher',userinfo:this.userProfileData.email,voucherid}),
				onload(){
					const data = this.getJSONResponse();
					forceRecheck(app.main,data.msg);
					if(data.valid){
						app.buyvouchersuccesshandler(data);
					}
				}
			})
		}
	}
}

//iamtheonlyonepersonhere.
app.init();  