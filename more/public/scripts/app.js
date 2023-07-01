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
		"PUBG MOBILE":"/file?fn=pm.png",
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
		buyMenu(info,filterBase,configaddition,uiinfo,dataid){
			const data = info.split(',');
			return makeElement('div',{
				userData:{
					products:{
						ammount:0,
						len:0
					},
					validationData:{
						name:'gema',
						email:null,
						phone:'0895605801484'
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
								>Masukan Data Tujuan Anda</div>
								<div style="display:${data[0]==='Games'?'block':'none'};">
									<div>
										<div>Game ID</div>
										<div style=display:flex;>
											<input placeholder="Masukan ID Game Anda" style=width:100%; id=targetData.gameid>
										</div>
									</div>
									<div>
										<div>Server ID / Jika Ada</div>
										<div style=display:flex;>
											<input placeholder="Masukan ID Server Anda" style=width:100%; id=targetData.serverid>
										</div>
									</div>
								</div>
								<div style="display:${data[0]!='Games'?'block':'none'};">
									<div>
										<div>Hp</div>
										<div style=display:flex;>
											<input placeholder="Masukan Nomor Anda" style=width:100%; id=targetData.hp type=number>
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
										"
										>
											<div   id=saldo.gmarket class=payment
											style="
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
										justify-content:flex-start;
										align-items:center;
										height:64px;
										overflow:auto;
									">
										<div  id=va.bri class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
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
										<div  id=va.bni class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
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
										<div  id=va.mandiri class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
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
										<div id=va.bca class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
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
										align-items:center;
										height:64px;
									">
										<div id=cstore.alfamart class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
											padding:5px;
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
										<div id=cstore.indomaret
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
											padding:5px;
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
										align-items:center;
										height:64px;
									">
										<div id=qris.qris class=payment
										style="
											display: flex;
											align-items: center;
											height: 32px;
											border: 2px solid #f1f1f1;
											border-radius: 10px;
											cursor:pointer;
											padding:5px;
										"
										>
											<img src=/file?fn=qris.png
											style="
												width: 75px;
												height: 40px;
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
								>Masukan Data Invoice Anda</div>
								<div style="margin-bottom:10px;">
									<div>
										<div>Email</div>
										<div style=display:flex;>
											<input placeholder="Masukan Email Anda" style=width:100%; id=validationData.email>
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
									<input placeholder="Masukan kode voucher anda" style=width:100%; id=targetData.voucher>
								</div>
							</div>
						</div>
						<div
						style="
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
							<div id=submitoncart
							style="
								background: #111340;
								color: white;
								padding: 5px 10px;
								display: flex;
								align-items: center;
								height: 32px;
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
								height: 32px;
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
					this.findall('input').forEach(input=>{
						input.oninput = ()=>{
							const inputinfo = input.id.split('.');
							this.userData[inputinfo[0]][inputinfo[1]] = input.value;
						}
					})
				},
				openPriceList(){
					const parentBox = this;
					const products = app.db[data[0]][data[1]];
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
						//getting markupPrice value.
						let markupPrice;
						if(!app.formatedPriceMarkup[data[0]])markupPrice = configaddition.itemmarkupprice;
						else{
							if(!app.formatedPriceMarkup[data[0]][data[1]])markupPrice = configaddition.itemmarkupprice;
							else markupPrice = app.formatedPriceMarkup[data[0]][data[1]];
						}
						markupPrice = Number(markupPrice);
						for(let j=0;j<2;j++){
							if(products[i+j]){
								const specialMarkup = !app.formatedPriceMarkup[data[0]][products[i+j].product_name]?markupPrice:app.formatedPriceMarkup[data[0]][products[i+j].product_name];
								const el = makeElement('div',{
									data:products[i+j],selected:false,
									markupPrice:specialMarkup,
									style:`
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
									`,
									innerHTML:`
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
											width: 90%;
											/* padding: 10px; */
											/* position: absolute; */
											color: black;
											text-align: center;
										"
										>
											<div>${products[i+j].category}</div>
											<div>${products[i+j].product_name}</div>
											<div>Rp ${getPrice(Number(products[i+j].price)+specialMarkup)}</div>
										</div>
									`,
									onclick(){
										this.selected = !this.selected?true:false;
										this.style.background = !this.selected?'white':'#f1f1f1';
										const price = Number(this.data.price)+this.markupPrice;
										if(this.selected){
											parentBox.userData.products[this.data.buyer_sku_code] = Object.assign(this.data,{ref_id:`GMP${getTime()}`});
											parentBox.userData.products.ammount += price;
											parentBox.userData.products.len += 1;
										}else{
											delete parentBox.userData.products[this.data.buyer_sku_code];
											parentBox.userData.products.ammount -= price;
											parentBox.userData.products.len -= 1;
										}
										parentBox.showTotal();
									},
									checkForDataId(){
										if(dataid && this.data.buyer_sku_code === dataid)this.click();
									},
									onadded(){
										this.checkForDataId();
									}
								})
								outel.addChild(el);
							}
						}
						this.find('#productparents').addChild(outel);
					}
				},
				showTotal(){
					this.find('#totaldisplay').innerHTML = `${this.userData.products.len} Item, Total Tagihan Rp. ${getPrice(this.userData.products.ammount)}. ${this.userData.payment?`Akan dibayar melalui ${this.userData.payment}.`:'Silahkan pilih metode pembayaran!'}`;
				},
				check(){
					//user input handle.
					for(let i in this.userData){
						if(i==='validationData' || i==='targetData'){
							for(let j in this.userData[i]){
								if(this.userData[i][j]===null)return {status:false,msg:`Silahkan Lengkapi ${i} ${j} Anda Terlebih Dahulu!`}
							}
						}
					}
					if(this.userData.products.ammount===0)return {status:false,msg:'Silahkan Pilih Produk Yang Anda Inginkan Terlebih Dahulu!'}
					if(!this.userData.payment)return {status:false,msg:'Pilih metode pembayarannya dulu bang!'}
					return {status:true}
				},
				putOnCart(){
					this.find('#submitoncart').onclick = ()=>{
						const validity = this.check();
						if(validity.status){
							const data = {
								ammount:this.userData.products.ammount,
								moredetails:this.userData,
								products:[]
							}
							for(let i in this.userData.products){
								if(i!=='ammount'&&i!=='len'){
									data.products.push({title:this.userData.products[i].product_name,price:this.userData.products[i].price})
								}
							}
							app.cartingData.push(data);
							app.cartingDataSave();
							forceRecheck(app.main,'Produk Dimasukan Kekeranjang!');
							app.givemehome();
						}else forceRecheck(app.main,validity.msg);
					}
				},
				setupSubmitButton(){
					this.find('#submitbutton').onclick = ()=>{
						const validity = this.check();
						if(validity.status){
							forceRecheck(app.main,'Semua data valid, mohon tunggu GMarket sedang memproses permintaaan.');
							this.userData.timestamp = getTime();
							app.content.addChild(openLoading('Mohon Tunggu...',(loading)=>{
								const PaymentHandler = {
									gmarket:{
										orderType:'gmarketsaldopay',
										onload(respdata,data){
											if(!respdata.valid)return forceRecheck(app.main,respdata.msg);
											forceRecheck(app.main,respdata.msg);
											if(respdata.vouchermsg)forceRecheck(app.main,respdata.vouchermsg);
											app.saveNewestTrxId(`GMTrx${JSON.parse(data).timestamp}`);
											app.userProfileData.ballance = respdata.leftballance;
											app.userProfileData.points = respdata.nowpoints;
											app.userProfileData.Trxs = respdata.mystrxs;
											app.saveSession(0,false);
											app.givemehome();
										}
									},
									pg:{
										orderType:'orderPay',
										onload(respdata,data){
											if(!respdata.responseJson.Success){
												return forceRecheck(app.main,respdata.responseJson.Message);
											}
											app.saveNewestTrxId(`GMTrx${JSON.parse(data).timestamp}`);
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
						}else forceRecheck(app.main,validity.msg);
					}
				},
				formatUserData(){
					if(data[0]==='Games'){
						this.userData.type = 'games';
						this.userData.targetData = {
							gameid:null,serverid:''
						}
					}else{
						this.userData.targetData = {hp:null};
						this.userData.type = 'pulsa';
					}
				},
				paymentEvents(){
					let buttonselected = null;
					this.findall('.payment').forEach(payment=>{
						payment.onclick = ()=>{
							//gmarket saldo check.
							if(payment.id.split('.')[0]==='saldo'){
								if(!app.userProfileData)return forceRecheck(app.main,'Harap Login Terlebih Dahulu!');
								this.userData.userInfo = app.userProfileData.email;
							}
							this.userData.payment = payment.id;
							payment.selected = !payment.selected?true:false;
							payment.style.background = payment.selected?'#f1f1f1':'white';
							if(buttonselected && buttonselected!=payment)buttonselected.style.background = 'white';
							buttonselected = payment;

							this.showTotal();
						}
					})
				},
				onadded(){
					this.formatUserData();
					this.find('#closebutton').onclick = ()=>{
						this.remove();
					}
					this.autoFillData();
					this.paymentEvents();
					this.openUserInput();
					this.openPriceList();
					this.putOnCart();
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
					background: rgb(0 0 0 / 40%);
					align-items:center;
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
						border-radius:20px;
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
							<div style="margin-bottom:10px;">
								<div>Password</div>
								<div id=password>
									<input placeholder="Masukan Password Anda..." type=password>
								</div>
							</div>
							<div id=putLupaPassword
							style="
								width:100%;
								cursor:pointer;
							"
							>
								Lupa Password?
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
							this.find('#putLupaPassword').onclick = ()=>{
								this.parent.putLupaPassword();
							}
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
					const ccs = this.findall('#loginlabelhead div');
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
		topuppanel(){
			return makeElement('div',{
				userData:{
					topupNominal:null,
					payment:null
				},
				style:`
					position: absolute;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: flex-start;
					justify-content: center;
					background: #00000059;
				`,
				innerHTML:`
					<div
					style="
						width: 95%;
						/* height: 60%; */
						background: white;
						border-radius: 20px;
						margin-top:20px;
					"
					>
						<div
						style="
							border-bottom: 2px solid #f1f1f1;
							height: 64px;
							width: 100%;
							display: flex;
							align-items: center;
						"
						>
							<div style="margin-left:18px;display:flex;" id=closepanel>
								<img src=/file?fn=blackclose.png
								style="
									width:16px;
									height:16px;
								">
							</div>
							<div style=font-size:24px;margin-left:20px;>Topup Panel</div>
						</div>
						<div
						style="
							width: 90%;
							padding: 0 5%;
							overflow: auto;
							height: 90%;
							border-radius: 0 0 20px 20px;
							display: flex;
							flex-direction: column;
							/* justify-content: center; */
							padding-bottom: 20px;
						"
						>
							<div style=margin-top:20px>
								<div>Nominal Topup</div>
								<div style=display:flex;>
									<input id=topupNominal placeholder="Masukan Nominal Topup" type=number
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div style=margin-top:10px;>
								<div>Pilih Metode Pembayaran</div>
								<div id=paymentinfo
								style="
									display:flex;
									align-items:center;
									gap:10px;
									width:100%;
									overflow:auto;
								"
								>
									<select
									style="
										padding:10px;
										width:100%;
										outline:none;
										border-radius:20px;
										border:1px solid #f1f1f1;
									"
									>
										<option>Pilih Metode Pembayaran</option>
										<option id=qris.qris>Qris</option>
										<option id=va.bri>Bri</option>
										<option id=va.mandiri>Mandiri</option>
										<option id=va.bni>Bni</option>
										<option id=cstore.alfamart>Alfamart</option>
									</select>
								</div>
							</div>
							<div style="margin-top:20px;display:flex;justify-content:center;">
								<div id=topupbutton
								style="
									background:#111340;
									padding:10px;
									border-radius:20px;
									cursor:pointer;
								"
								>Proses Topup</div>
							</div>
						</div>
					</div>
				`,
				paymentEvent(){
					const payment = this.find('select');
					payment.onchange = ()=>{
						this.userData.payment = payment.options[payment.options.selectedIndex].id;
					}
				},
				inputEvents(){
					this.findall('input').forEach(input=>{
						input.onchange = ()=>{
							this.userData[input.id] = input.value;
						}
					})
				},
				topupbutton(){
					this.find('#topupbutton').onclick = ()=>{
						const dataCheckResult = nonull(this.userData);
						const newdatapanel = this;
						if(dataCheckResult.valid){
							app.content.addChild(openLoading('Mohon Tunggu...',loading=>{
								cOn.post({
									url:'/topupuser',
									data:jsonstr({userInfo:app.userProfileData.email,userData:this.userData,timestamp:getTimestamp()}),
									onload(){
										loading.remove();
										const data = this.getJSONResponse();
										if(!data.Success)return forceRecheck(app.main,data.Message);
										const el = app.template.paythisman(data.Data);
										app.hometodelete.push(el);
										app.content.addChild(el);
									}
								})
							}))
						}else forceRecheck(app.main,`Tolong isi ${dataCheckResult.nullkeys.length} Data Lagi!`);
					}
				},
				onadded(){
					this.find('#closepanel').onclick = ()=>{this.remove()}
					this.inputEvents();
					this.paymentEvent();
					this.topupbutton();
				}
			})
		},
		myProfilePage(){
			return makeElement('div',{
				style:`
					position: absolute;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					background: rgb(237 238 241);
					flex-direction:column;
					gap:10px;
					overflow:hidden;
				`,
				innerHTML:`
					<div
					style="
						width: 100%;
						min-height: 100px;
						border: 2px solid #f1f1f1;
						/* border-radius: 10px; */
						background: white;
						margin-top: 10px;
						margin: 0;
						border-radius: 0 0 15px 15px;
						height: 50%;
					"
					>
						<div
						style="
							padding:10px;
							display:flex;
							align-items:center;
							justify-content:space-between;
							gap:10px;
							background:white;
							border-radius: 10px;
							padding-bottom:0;
						"
						>
								<div id=moresettings style="
								display: flex;
								align-items: center;
								gap: 5px;
								border: 1px solid #f1f1f1;
								padding: 8px;
								border-radius: 10px;
								cursor:pointer;
							">
								<img src=/file?fn=setting-lines.png
								style="
									width:16px;
									height:16px;
								"
								>
								Settings
							</div>
							<div id=logoutbutton style="
								display: flex;
								align-items: center;
								gap: 5px;
								border: 1px solid #f1f1f1;
								padding: 8px;
								border-radius: 10px;
								cursor:pointer;
							">
								Keluar
								<img src=/file?fn=exit.png
								style="
									width:16px;
									height:16px;
								"
								>
							</div>
						</div>
						<div
						style="
							display:flex;
							align-items:center;
							justify-content:center;
						"
						>
							<div
							style="
								border-radius: 50%;
								width: 100px;
								height: 100px;
								background: #03A9F4;
								font-size: 54px;
								/* border: 2px solid #f1f1f1; */
								background: #111340;
								display: flex;
								align-items: center;
								justify-content: center;
								color: white;
							"
							>${app.userProfileData.name[0]}</div>
						</div>
						<div
						style="
							padding:20px 10px;
						"
						>
							<div
							style="
								text-align:center;
							"
							>
								<span style="
									padding:5px;
									border:1px solid #f1f1f1;
									border-radius:20px;
								">Saldo Rp ${getPrice(app.userProfileData.ballance)}</span>
								<span style="
									padding:5px;
									border:1px solid #f1f1f1;
									border-radius:20px;
								">${!app.userProfileData.Trxs?0:getPrice(app.userProfileData.Trxs.length)} Transaksi</span>
							</div>
							<div
							style="
								display:flex;
								align-items:center;
								justify-content:center;
							"
							>
								<div id=topupbutton
								style="
									border-radius: 30px;
									border: 2px solid #f1f1f1;
									margin-top: 32px;
									display: flex;
									align-items: center;
									justify-content: center;
									padding: 11px;
									font-size: 18px;
									gap: 5px;
									background: #edeef1;
									cursor:pointer;
								"
								>
									<img src=/file?fn=save-money.png
									style="
										width:16px;
										height:16px;
										border-radius:50%;
										cursor:pointer;
										overflow:inherit;
									"
									>
									<div>Topup</div>
								</div>
							</div>
						</div>
					</div>
					<div id=historypanel
					style="
						background:white;
						width:100%;
						height:50%;
						border-radius:15px 15px 0 0;
						display:flex;
					"
					>
						<div style="
							padding: 32px;
							width: 100%;
							/* height: 100%; */
							overflow: auto;
							padding-top:0;
							display:flex;
							flex-direction:column;
						">
							<div
							style="
								font-size: 18px;
								/* margin-top: 10px; */
								border-bottom: 2px solid #f1f1f1;
								padding: 25px 0 10px 0;
							"
							>Riwayat Transaksi</div>
							<div id=dataparent
							style="
								overflow: auto;
								height: 100%;
							"
							>

							</div>
						</div>
					</div>
				`,
				openMoreSettings(){
					const el = app.template.changeUserData();
					app.hometodelete.push(el);
					app.content.addChild(el);
				},
				logout(){
					app.userProfileData = null;
					app.deleteSession();
					app.givemehome();
					forceRecheck(app.main,'Logout berhasil!');
				},
				processTopup(){
					//ithinkimgonnasleep.
					const el = app.template.topuppanel();
					app.hometodelete.push(el);
					app.content.addChild(el);
				},
				onadded(){
					this.find('#logoutbutton').onclick = ()=>{this.logout()};
					this.find('#topupbutton').onclick = ()=>{this.processTopup()};
					this.find('#moresettings').onclick = ()=>{this.openMoreSettings()}
					this.generateHistory();
				},
				generateHistory(){
					const dataparent = this.find('#dataparent');
					let index = 1;
					for(let data of app.userProfileData.Trxs){
						dataparent.addChild(makeElement('div',{
							data,
							style:`
								display:flex;
								gap:10px;
								padding:10px;
								font-size:18px;
								border-bottom:1px solid #f1f1f1;
								align-items:center;
							`,
							innerHTML:`
								<div>${index}.</div>
								<div>${data.id}</div>
								<div>${data.status}</div>
								<div style="width:100%;display:flex;justify-content:flex-end;">
									<div id=moreinfobutton
									style="
										padding:5px;
										background:#111340;
										color:white;
										border-radius:10px;
										cursor:pointer;
									"
									>Info</div>
								</div>
							`,
							onadded(){
								this.find('#moreinfobutton').onclick = ()=>{
									app.main.addChild(openLoading('Mengambil Info...',(loading)=>{
										cOn.get({
											url:`/check?trxid=${this.data.id}`,
											onload(){
												app.handleTrxCheckRequest(this.getJSONResponse(),loading);
											}
										})
									}))
								}
							}
						}))
						index += 1;
					}
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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
									${(i!='PaymentNo'&&i!='TransactionId')?'<div style="width:100%;overflow:auto;">'+datatodisplay[i]+'</div>':'<input style="width:100%;" value='+datatodisplay[i]+'>'}

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
		},
		trackTrxPanel(){
			return makeElement('div',{
				style:`
					position: absolute;
					background: #edeef1;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				`,
				innerHTML:`
					<div
					style="
						width:90%;
						height:90%;
					"
					>
						<div style="
						font-size: 24px;
						color: black;
						margin-bottom: 10px;">Lacak Pesanan Anda</div>
						<div
						style="
							padding: 30px;
							border-radius: 10px;
							border: 2px solid #f1f1f1;
							background:white;
						"
						>
							<div style=margin-bottom:5px;>ID Pesanan</div>
							<div style="display:flex;">
								<input placeholder="Masukan ID Pesanan Anda" value="${app.newesttrxid||''}"
								style="
									width:100%;
								"
								>
							</div>
							<div style="
								display:flex;
								margin-top:10px;
							">
								<div id=submitbutton
								style="
									padding: 10px 30px;
									background: #111340;
									color: white;
									border-radius: 20px;
									font-size: 18px;
									cursor:pointer;
								"
								>Lacak</div>
							</div>
						</div>
					</div>
				`,
				userInput:{
					trxid:app.newesttrxid||null
				},
				inputEvent(){
					this.find('input').onchange = ()=>{
						this.userInput.trxid = this.find('input').value;
					}
				},
				requestcheck(){
					app.main.addChild(openLoading('Mengambil Info...',(loading)=>{
						cOn.get({
							url:`/check?trxid=${this.userInput.trxid}`,
							onload(){
								app.handleTrxCheckRequest(this.getJSONResponse(),loading);
							}
						})
					}))
				},
				onadded(){
					this.inputEvent();
					this.find('#submitbutton').onclick = ()=>{
						this.requestcheck();
					}
				}
			})
		},
		openMyCart(){
			let cartItems = app.cartingData;
			return makeElement('div',{
				userInput:{
					selectedProducts:[],
				},
				style:`
					position:absolute;
					width:100%;
					height:100%;
					background:#edeef1;
					display:flex;
					align-items:center;
					justify-content:center;
					flex-direction:column;
				`,
				innerHTML:`
					<div
					style="
						width:90%;
						height:90%;
						background:white;
						border-radius:20px;
					"
					>
						<div
						style="
							height:10%;
							width:92%;
							padding:0 4%;
							font-size:18px;
							display:flex;
							align-items:center;
							justify-content:space-between;
							border-bottom:2px solid #f1f1f1;
						"
						>
							KeranjangKu
							<div style=cursor:pointer; id=deleteitems>
								<img src=/file?fn=trash.png
								style="
									width:24px;
									height:24px;
								">
							</div>
						</div>
						<div
						style="
							width:100%;
							height:67%;
							overflow:auto;
						"
						>
							<div id=parentItems
							style="
								padding:15px;
								display:flex;
								flex-direction:column;
								gap:10px;
							"
							>

							</div>
						</div>
						<div
						style="
							height:8%;
							width:96%;
							padding:0 2%;
							border-top:1px solid #f1f1f1;
							display:flex;
							align-items:center;
							justify-content:center;
						"
						>
							<div id=selectedlabel
							style="width:100%;text-align:center;"
							>
								0 Item
							</div>
							<div id=priceselectedlabel
							style="width:100%;text-align:center;"
							>Rp 0</div>
						</div>
						<div
						style="
							height:15%;
							width:100%;
							font-size:18px;
							display:flex;
							align-items:center;
							justify-content:center;
							border-top:2px solid #f1f1f1;
						"
						>
							<div
							style="
								padding:10px 64px;
								background:#111340;
								color:white;
								border-radius:20px;
								cursor:pointer;
							"
							>Beli</div>
						</div>
					</div>
				`,
				displayItems(){
					this.find('#parentItems').clear();
					const items = (data)=>{
						return makeElement('div',{
							parent:this,
							data,
							style:`
								width:96%;
								border:1px solid #f1f1f1;
								padding:2%;
								border-radius:10px;
								cursor:pointer;
							`,
							innerHTML:`
								<div
								style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-around;
								"
								>
									<div style=width:10%;display:flex;justify-content:center; id=radios>
										<div style="
											width:16px;
											height:16px;
											border:1px solid #f1f1f1;
											border-radius:50%;
										">

										</div>
									</div>
									<div style=width:80%;>
										<div>Rp ${getPrice(data.ammount)}</div>
										<div style="font-size:18px;">${data.products[0].title}${data.products.length>1?` Dan ${data.products.length-1} Lainnya`:''}</div>
										<div id=moredata style="
											margin-top:5px;
											border-top:1px solid #f1f1f1;
											padding:5px;
											display:none;
											flex-direction:column;
											gap:2px;
										">

										</div>
									</div>
									<div style=width:10%;display:flex;align-items:center;justify-content:center; id=wannamores>
										<img src=/file?fn=down.png
										style="
											width:16px;
											height:16px;
										">

									</div>
								</div>
							`,
							radiosSet(){
								let selected = false;
								const radios = this.find('#radios div');
								let iindex;

								radios.onclick = ()=>{
									selected = !selected?true:false;
									radios.style.background = !selected?'none':'#a5a5a7';
									if(selected){
										iindex = this.parent.userInput.selectedProducts.length;
										this.parent.userInput.selectedProducts.push(this.data);
									}else{
										const newarr = [];
										for(let i=0;i<this.parent.userInput.selectedProducts.length;i++){
											if(i!=iindex)newarr.push(this.parent.userInput.selectedProducts[i]);
										}
										this.parent.userInput.selectedProducts = newarr;
										iindex = null;
									}
									this.parent.showDetails();
								}
							},
							arrowDown(){
								let opened = false;
								const img = this.find('#wannamores img');
								this.find('#wannamores').onclick = ()=>{
									opened?hideElement(this.find('#moredata')):showElement(this.find('#moredata'),'flex');
									opened = !opened?true:false;
									img.src = !opened?'/file?fn=down.png':'/file?fn=up-arrow.png';
								}
							},
							displayMore(){
								this.data.products.forEach(item=>{
									this.find('#moredata').addChild(makeElement('div',{
										innerHTML:`${item.title} Rp ${getPrice(item.price)}`
									}))
								})
							},
							onadded(){
								this.radiosSet();
								this.arrowDown();
								this.displayMore();
							}
						})
					}
					cartItems.forEach(item=>{
						this.find('#parentItems').addChild(items(item));
					})
					//zero data handling.
					if(cartItems.length===0){
						this.find('#parentItems').parentElement.appendChild(makeElement('div',{
							style:`
								width:100%;
								text-align:center;
								justify-content:center;
							`,
							innerHTML:`
								Tidak ada data.
							`
						}));
					}
				},
				showDetails(){
					let prices = 0;
					//getting the prices.
					this.userInput.selectedProducts.forEach(product=>{
						prices += product.ammount;
					})
					this.find('#selectedlabel').innerHTML = this.userInput.selectedProducts.length+' Items';
					this.find('#priceselectedlabel').innerHTML = 'Rp '+getPrice(prices);
				},
				deleteItems(){
					const newarr = [];
					cartItems.forEach(item=>{
						if(!this.userInput.selectedProducts.includes(item)){
							newarr.push(item);
						}
					})
					cartItems = newarr;
					app.cartingData = newarr;
					app.cartingDataSave();
					this.userInput.selectedProducts = [];
					this.displayItems();
					this.showDetails();
				},
				onadded(){
					this.find('#deleteitems').onclick = ()=>{
						this.deleteItems();
					}
					this.displayItems();
				}
			})
		},
		checkTrx(data,loading){
			return makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					display:flex;
					align-items:center;
					justify-content:center;
					background:#00000040;
				`,
				innerHTML:`
					<div
					style="
						width:95%;
						height:90%;
						background:white;
						border-radius:20px;
					"
					>
						<div
						style="
							border-bottom:2px solid #f1f1f1;
							height:10%;
							width:100%;
							display:flex;
							align-items:center;
						"
						>
							<div style="margin-left:18px;display:flex;" id=closepanel>
								<img src=/file?fn=blackclose.png
								style="
									width:16px;
									height:16px;
								">
							</div>
							<div style=font-size:24px;margin-left:20px;>Panel Informasi</div>
						</div>
						<div
						style="
							width:90%;
							padding:0 5%;
							overflow:auto;
							height:90%;
							border-radius:0 0 20px 20px;
							display:flex;
							flex-direction:column;
						"
						>
							<div
							style="
								width:100%;
								height:40%;
								font-size:32px;
								display:flex;
								align-items:center;
								justify-content:center;
							"
							>
								Rp. ${getPrice(data.moredetails.products.ammount)}
							</div>
							<div
							style="
								font-size:18px;
								overflow:auto;
								padding:5%;
								border:2px solid #f1f1f1;
								max-height:40%;
								border-radius:20px;
							"
							>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Pembayaran</div>
									<div>${data.payment}</div>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Status</div>
									<div>${data.status}</div>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Expired</div>
									<div>${data.expired||'-'}</div>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Kode Pembayaran</div>
									<input value=${data.paymentCode||'-'}>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Tipe Produk</div>
									<div>${data.moredetails.type}</div>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Banyak Produk</div>
									<div>${data.moredetails.products.len}</div>
								</div>
								<div style="
									display:flex;
									gap:10px;
									align-items:center;
									justify-content:space-between;
								">
									<div>Status</div>
									<div>${data.status==='pending'?'Menunggu Pembayaran':data.statusproduct||'Sedang Diproses'}</div>
								</div>
						</div>
						</div>
					</div>
				`,
				onadded(){
					loading.remove();
					this.find('#closepanel').onclick = ()=>{this.remove()}
					console.log(data);
				}
			})
		},
		changeUserData(){
			return makeElement('div',{
				userData:{
					name:app.userProfileData.name,
					email:app.userProfileData.email,
					hp:app.userProfileData.hp,
					confirmpassword:null
				},
				style:`
					position: absolute;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: flex-start;
					justify-content: center;
					background: #00000059;
				`,
				innerHTML:`
					<div
					style="
						width: 95%;
						/* height: 60%; */
						background: white;
						border-radius: 20px;
						margin-top:20px;
					"
					>
						<div
						style="
							border-bottom: 2px solid #f1f1f1;
							height: 64px;
							width: 100%;
							display: flex;
							align-items: center;
						"
						>
							<div style="margin-left:18px;display:flex;" id=closepanel>
								<img src=/file?fn=blackclose.png
								style="
									width:16px;
									height:16px;
								">
							</div>
							<div style=font-size:24px;margin-left:20px;>User Settings</div>
						</div>
						<div
						style="
							width: 90%;
							padding: 0 5%;
							overflow: auto;
							height: 90%;
							border-radius: 0 0 20px 20px;
							display: flex;
							flex-direction: column;
							/* justify-content: center; */
							padding-bottom: 20px;
						"
						>
							<div style=margin-top:20px>
								<div>Username</div>
								<div style=display:flex;>
									<input id=name value=${app.userProfileData.name}
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div>
								<div>Email</div>
								<div style=display:flex;>
									<input value=${app.userProfileData.email} readonly
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div>
								<div>Hp</div>
								<div style=display:flex;>
									<input id=hp value=${app.userProfileData.hp}
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div>
								<div>New Password</div>
								<div style=display:flex;>
									<input id=newpassword value=Hidden
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div>
								<div>Masukan Password Akun Sebelumnya</div>
								<div style=display:flex;>
									<input id=confirmpassword type=password placeholder='Konfirmasi Password Untuk Melakukan Perubahan'
									style="
										width:100%;
									"
									>
								</div>
							</div>
							<div style="margin-top:20px;display:flex;">
								<div id=savebutton
								style="
									background:#111340;
									padding:10px;
									border-radius:20px;
								"
								>Save Changes</div>
							</div>
						</div>
					</div>
				`,
				inputEvents(){
					this.findall('input').forEach(input=>{
						input.onchange = ()=>{
							this.userData[input.id] = input.value;
						}
					})
				},
				saveButton(){
					this.find('#savebutton').onclick = ()=>{
						const dataCheckResult = nonull(this.userData);
						const newdatapanel = this;
						if(dataCheckResult.valid){
							app.content.addChild(openLoading('Mohon Tunggu Melakukan Perubahan!',(loading)=>{
								cOn.post({
									url:'/newuserdata',
									data:jsonstr(this.userData),
									onload(){
										const respdata = this.getJSONResponse();
										loading.remove();
										if(respdata.valid){
											forceRecheck(app.main,respdata.msg);
											Object.assign(app.userProfileData,respdata.newsettingdata);
											app.saveSession(0,false);
											app.generateMyProfile();
										}else forceRecheck(app.main,respdata.msg);
									}
								})
							}))
						}else forceRecheck(app.main,`Tolong isi ${dataCheckResult.nullkeys.length} Data Lagi!`);
					}
				},
				onadded(){
					this.find('#closepanel').onclick = ()=>{this.remove()}
					this.inputEvents();
					this.saveButton();
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
		//this.generateMyProfile();
		//this.openTrackTrxPanel();
		//this.openMyCart();
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
	processMarkupPriceList(){
		console.log(this.markupPriceList);
		const newFormat = {};
		for(let i in this.markupPriceList){
			const category = this.markupPriceList[i].category;
			const type = this.markupPriceList[i].type;
			const product = this.markupPriceList[i].products;
			const price = Number(this.markupPriceList[i].markupPrice);
			if(!newFormat[category]){
				newFormat[category] = {};
			}
			if(!product){
				newFormat[category][type] = price;
			}else newFormat[category][product] = price;
		}
		console.log(newFormat);
		this.formatedPriceMarkup = newFormat;
	},
	requestData(){
		cOn.get({
			url:'/info?type=all',
			onload(){
				const dataResponse = this.getJSONResponse();
				app.basedata = dataResponse.base.data;
				app.tweaks = dataResponse.tweaks;
				app.markupPriceList = dataResponse.markupPriceList;
				app.processDb();
				app.processMarkupPriceList();
				app.getCartingData();
				app.getNewestLocalTrx();
				app.setupGlobalNav();
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
	openCashier(info,filterBase=false,uiinfo,dataid){
		let el = this.template.buyMenu(info,filterBase,this.tweaks,uiinfo,dataid);
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
			gtovoucher:'iwannavoucher',
			openhistorypanel:'openTrackTrxPanel',
			cart:'openMyCart',
			searchBar:'openSearchBar'
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
					this.openCashier(boxin.info,true,boxin.find('img').src,boxin.dataid);
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
		const imglabel = this.content.find('#imglabel');
		if(this.scbopened){
			hideElement(scb);
			showElement(imglabel,'flex');
			this.scbopened = false;
			button.find('img').src = '/file?fn=whitefinder.png';
			scb.find('input').value = '';
		}else{
			showElement(scb,'flex');
			scb.find('input').focus();
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
			hideElement(imglabel);
			this.scbopened = true;
			button.find('img').src = '/file?fn=closex.png';
		}
	},
	forceLoginSystem(init=false){
		if(this.userProfileData||this.userLogCheck()){
			if(!init){
				this.generateMyProfile();
			}else this.updateDataSession();
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
		if(this.userProfileData){
			this.userProfileData.Trxs = ipaymuresponse.trxdata;
			this.saveSession(0,false)
		}
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
	updateDataSession(next){
		cOn.post({
			url:'/updateSession',
			data:jsonstr(this.userProfileData),
			onload(){
				app.userProfileData = this.getJSONResponse();
			}
		})
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
	},
	openTrackTrxPanel(){
		this.hometodelete.forEach(el=>{
			el.remove();
		})
		const el = app.template.trackTrxPanel();
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	openMyCart(){
		this.hometodelete.forEach(el=>{
			el.remove();
		})
		const el = app.template.openMyCart();
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	getCartingData(){
		this.cartingData = JSON.parse(localStorage.getItem('cartinggemastore')||'[]');
		return this.cartingData;
	},
	handleTrxCheckRequest(data,loading){
		if(!data.status){
			loading.remove();
			return forceRecheck(app.main,'Transaksi Tidak Ditemukan!');
		}
		const el = this.template.checkTrx(data,loading);
		this.hometodelete.push(el);
		this.content.addChild(el);
	},
	cartingDataSave(){
		localStorage.setItem('cartinggemastore',jsonstr(this.cartingData));
	},
	getNewestLocalTrx(){
		this.newesttrxid = localStorage.getItem('newesttrxid');
	},
	saveNewestTrxId(id){
		localStorage.setItem('newesttrxid',id);
		this.newesttrxid = id;
	}
}

//iamtheonlyonepersonhere.
app.init();