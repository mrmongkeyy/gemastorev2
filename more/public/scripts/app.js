
const app = {
	db:{},
	thumbnailpath:{
		"Free Fire":"/file?fn=ff.png",
		"Mobile Legend":"/file?fn=ml.png",
		"Higgs Domino":"/file?fn=hd.png",
		"Lords Mobile":"/file?fn=lordsmobile.png",
		"Call Of Duty Mobile":"/file?fn=codm.png",
		"Arena Of Valor":"/file?fn=aov.png",
		"Point Blank":"/file?fn=pointblank.png",
		"Light Of Thel":"/file?fn=lot.png",
		"Dragon Raja":"/file?fn=dragonraja.png",
		"Genshin Impact":"/file?fn=gi.png",
		"Sausage Man":"/file?fn=sgm.png",
		"Omega Legends":"/file?fn=omgl.png",
		"PUBG Mobile":"/file?fn=pm.png",
		"Apex Legend":"/file?fn=apexlegend.png",
		"Super SUS":"/file?fn=sussuper.png",
		"Hago Diamond ID":"/file?fn=hg.png",
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
		"Ludo Club":"/file?fn=ludoclub.png",
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
		"Token PLN":"/file?fn=pln.png",
		"Pulsa Telkomsel":"/file?fn=/data/telkom.png",
		"Pulsa AXIS":"/file?fn=/data/axis.png",
		"Pulsa INDOSAT":"/file?fn=/data/indosatooredo.png",
		"Pulsa XL":"/file?fn=/data/xl.png",
		"Pulsa SMARTFREN":"/file?fn=/data/smartfren.png",
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
		"DATA TRI":"/file?fn=/data/tri.png",
		"TELKOMSEL":"/file?fn=/data/telkom.png",
		"AXIS":"/file?fn=/data/axis.png",
		"XL":"/file?fn=/data/xl.png",
		"INDOSAT":"/file?fn=/data/indosatooredo.png",
		"Dana":"/file?fn=/wallet/dana.png",
		//"Ovo":"/file?fn=/wallet/ovo.png",
		"Gopay":"/file?fn=/wallet/gopay.png",
		"Shopee Pay":"/file?fn=/wallet/shopeepay.png",
		"Maxim":"/file?fn=/wallet/maxim.png",
		"Grab":"/file?fn=/wallet/grab.png",
		//"LinkAja":"/file?fn=/wallet/linkaja.png",
		//"i.Saku":"/file?fn=/wallet/isaku.png",
		"Injek V.Telkomsel":"/file?fn=/data/telkom.png",
		"Injek V.Axis":"/file?fn=/data/axis.png",
		"Injek V.XL":"/file?fn=/data/xl.png",
		"Nex Parabola":"/file?fn=nexparabola.png",
		"Telkomsell":"/file?fn=/data/telkom.png"
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
					background:aliceblue;
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
    boxItem(data,info,displayOption='operator_produk'){
			const imgsrc = app.thumbnailpath[data.operator_produk]?app.thumbnailpath[data.operator_produk]:'/file?fn=hg.png';
      return makeElement('div',{
				dataid:data.id,
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
          ${data[displayOption].slice(0,20)}
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
		buyMenu(info,filterBase){
			const data = info.split(',');
			return makeElement('div',{
				userData:{
					products:{},
					validationData:{
						email:null,
						phone:null
					},
					targetData:{
						hp:null,
						gameid:null,
						serverid:null
					}
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
						<div id=paymentboxcategory
						style="
							display:flex;
							padding:10px;
							height:32px;
							display:flex;
							align-items:center;
							border-bottom:1px solid #9ca3af;
							gap:10px;
						">
							<div id=productInfo class=activecc>Product Info</div>
							<div id=userInput>User Input</div>
							<div id=priceList>Price List</div>
							<div id=paymentMethod>Payment Method</div>
						</div>
						<div id=rootboxcontent
						style="
							height:100%;
							overflow:auto;
							font-size:18px;
							position:relative;
						"
						>
							<div class="item active"
							id=productInfo
							></div>
							<div class="item"
							id=userInput
							>
								<div
								id=topup
								style=${data[0]!='Topup Game'?'display:none;':''}padding:10px 0;
								>
									<div
									style=margin-bottom:10px;
									>
										<b>Validation Data</b>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>Email</div>
										<div
										style="
											width:70%;
											display: flex;
											justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan Email">
										</div>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>No. Hp</div>
										<div
										style="
											width:70%;
											display: flex;
											justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan No. Hp">
										</div>
									</div>
									<div
									style=margin-bottom:10px;
									>
										<b>Transaction Data</b>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>Game ID</div>
										<div
										style="
											width:70%;
											display: flex;
    									justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan Game Id">
										</div>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
									"
									>
										<div
										style="
											width:30%;
										"
										>Server ID</div>
										<div
										style="
											width:70%;
											display: flex;
    									justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan Server Id">
										</div>
									</div>
									<div
									style="
										display:flex;
										align-items:center;
										margin-top:15px;
										gap:10px;
									"
									>
										<div id=validationbutton class=notvalid
										>
											Cek
										</div>
										<div
										style="
											font-size:12px;
										"
										>
											Gunakan untuk memvalidasi data yang anda masukan.
										</div>
									</div>
								</div>
								<div
								id=pulsa
								style=${data[0]==='Topup Game'?'display:none':''};
								>
									<div
									style=margin-bottom:10px;
									>
										<b>Validation Data</b>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>Email</div>
										<div
										style="
											width:70%;
											display: flex;
											justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan Email">
										</div>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>No. Hp</div>
										<div
										style="
											width:70%;
											display: flex;
											justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="Masukan No. Hp">
										</div>
									</div>
									<div
									style=margin-bottom:10px;
									>
										<b>Transaction Data</b>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
										width:100%;
										align-items:center;
										margin-bottom:10px;
										gap:10px;
									"
									>
										<div
										style="
											width:30%;
										"
										>No. Hp</div>
										<div
										style="
											width:70%;
											display: flex;
    									justify-content: flex-end;
										"
										>
											<input id=gameid placeholder="08-xxx-xxx-xx">
										</div>
									</div>
								</div>
							</div>
							<div class="item"
							id=priceList
							>
								<div
								style="
									padding:15px;
									width:100%;
									display:flex;
									flex-wrap:wrap;
									justify-content:center;
									gap:16px;
									font-size:12px;
								"
								>
									
								</div>
							</div>
							<div class="item"
							id=paymentMethod
							>
								<div
								style="
									width:100%;
									padding-bottom:0;
								"
								>
									<div
									style="margin-bottom:5px;"
									>Gmarket Saldo</div>
									<div id=valist class=notvalid
									style="
										display:flex;
										gap:10px;
										justify-content:space-around;
										background:#ededed;
									"
									>
										<div id=gmarketsaldo>G Market Saldo</div>
									</div>
								</div>
								<div
								style="
									width:100%;
									padding-bottom:0;
								"
								>
									<div
									style="margin-bottom:5px;">Virtual Account / VA</div>
									<div id=valist
									style="
										display:flex;
										justify-content:space-around;
										background:#ededed;
									"
									>
										<div id=vabri>BRI</div>
										<div id=vabca>BCA</div>
										<div id=vamandiri>MANDIRI</div>
										<div id=vasyariah>SYARIAH</div>
										<div id=vabni>BNI</div>
									</div>
								</div>
								<div
								style="
									width:100%;
									padding-bottom:0;
								"
								>
									<div
									style="margin-bottom:5px;"
									>Convinence Store / CS</div>
									<div id=valist
									style="
										display:flex;
										gap:10px;
										justify-content:space-around;
										background:#ededed;
									"
									>
										<div id=csindomaret>Indomaret</div>
										<div id=csalfamart>Alfamart</div>
									</div>
								</div>
								<div
								style="
									width:100%;
									padding-bottom:0;
								"
								>
									<div
									style="margin-bottom:5px;"
									>Qris</div>
									<div id=valist
									style="
										display:flex;
										gap:10px;
										justify-content:space-around;
										background:#ededed;
									"
									>
										<div id=qris>Qris all payment</div>
									</div>
								</div>
							</div>
						</div>
						<div
						style="
							height: 32px;
							display: flex;
							justify-content: flex-end;
							align-items: center;
							padding: 20px;
							border-top: 1px solid;
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
							<div class=notvalid
							style="
								background: orange;
								color: white;
								padding: 10px 20px;
								display: flex;
								align-items: center;
								height: 100%;
								font-size: 24px;
								border-top: 1px solid orange;
								border-radius: 10px;
							"
							>
								Beli
							</div>
						</div>
					</div>
				`,
				openProdukInfo(){
					this.find('#rootboxcontent #productInfo').addChild(app.template.rootboxcontent([
						{key:'Tipe Produk',value:data[0]},
						{key:'Nama Produk',value:data[1]},
						{key:'Catatan',value:'Masukan data dengan benar, kesalahan data ditanggung sendiri.'}
					]))
				},
				openUserInput(){
					//this.find('#rootboxcontent').clear();
					this.find('#rootboxcontent').addChild(makeElement('div',{

					}))
				},
				openPriceList(){
					//this.find('#rootboxcontent').clear();
					const parentBox = this;
					const products = app.db[data[0]][data[1]];
					products.forEach(product=>{
						const item = makeElement('div',{
							data:product,selected:false,
							style:`
								padding:10px;
								border:1px solid;
								width:30%;
								min-height:50px;
								display:flex;
								flex-direction:column;
								gap:10px;
								justify-content:center;
							`,
							innerHTML:`
								<img src=${app.thumbnailpath[data[1]]}
								style="
									width:32px;height:32px;border-radius:50%;
								"
								>
								<div>${product.nama_produk}</div>
								<div>RP. ${getPrice(product.price)}</div>
							`,
							onadded(){
								this.onclick = ()=>{
									if(!this.selected){
										parentBox.userData.products[this.data.code] = {
											code:this.data.code,
											price:this.data.price
										}
										this.selected = true;
										this.classList.add('selectedprice');
									}else{
										delete parentBox.userData.products[this.data.code];
										this.classList.remove('selectedprice');
										this.selected = false;
									}
									parentBox.showTotal();
								}

								if(filterBase && this.data.id === filterBase)this.click();
							}
						})
						this.find('#priceList div').addChild(item);
					})
				},
				showTotal(){
					let total = 0;let itemlen = 0;
					for(let i in this.userData.products){
						total += this.userData.products[i].price;
						itemlen += 1;
					}
					this.find('#totaldisplay').innerHTML = `${itemlen} Item, Total Tagihan Rp. ${getPrice(total)}. Akan dibayar melalui ${this.userData.payment||'Belum Diset'}.`;
				},
				openPaymentMethod(){
					const pm = this.findall('#valist div');
					const parent = this;
					let selected = null;
					pm.forEach(button=>{
						button.onclick = ()=>{
							if(objlen(parent.userData.products)===0 || button.parentElement.classList.contains('notvalid'))return;
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
				setCcEvent(){
					const buttons = this.find('#paymentboxcategory').findall('div');
					const rootboxcontentitems = {};
					this.findall('#rootboxcontent .item').forEach(div=>{
						rootboxcontentitems[div.id] = div;
					});
					let activediv = buttons[0];
					let itemactive = rootboxcontentitems['productInfo'];
					buttons.forEach(div=>{
						div.onclick = ()=>{
							activediv.classList.remove('activecc');
							itemactive.classList.remove('active');
							div.classList.add('activecc');
							rootboxcontentitems[div.id].classList.add('active');
							itemactive = rootboxcontentitems[div.id];
							activediv = div;
						}
					})
				},
				onadded(){
					this.find('#closebutton').onclick = ()=>{
						this.remove();
					}
					this.setCcEvent();
					this.openProdukInfo();
					this.openPriceList();
					this.openPaymentMethod();
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
  scrollTheImg(speed=3){
    let frame;canMove=true;ontimeout=false;
    const imgbox = find('#imglabel');
    imgbox.onmouseover = ()=>{canMove=false}
    imgbox.onmouseleave = ()=>{canMove=true}
		imgbox.ontouchstart = ()=>{
			canMove = false;
		}
		imgbox.ontouchend = ()=>{
			canMove = true;
		}
    //animation frame.
    const scroll = ()=>{
      if(!ontimeout){
        if(canMove){
          imgbox.scrollLeft += speed;
          //imgbox.find('img')
        }
        if(imgbox.scrollLeft+imgbox.offsetWidth >= imgbox.scrollWidth ||imgbox.scrollLeft <= 0){
          ontimeout = true;
          setTimeout(()=>{
            ontimeout=false;
            speed *= -1;
          },500)
        }
      }
      frame = requestAnimationFrame(scroll);
    }
    scroll();
  },
  displayContent(typedata){
    const boxdiv = find('#box-div');
		boxdiv.clear();
		let datalen = 0;
    for(let i in this.db[typedata]){
			if(typeof this.db[typedata][i]!=='object' || !app.thumbnailpath[i])continue;
			const boxin = app.template.boxItem(app.db[typedata][i][0],typedata+','+i);
			boxin.onclick = ()=>{
				this.openCashier(boxin.info);
			}
      boxdiv.addChild(boxin);
			datalen += 1;
    }
		if(datalen===0){
			boxdiv.addChild(app.template.noData());
		}
  },
	content:find('content'),
  init(){
		this.requestData();
  },
	processDb(){
		this.basedata.forEach(data=>{
			if(this.db[data.category_name]){
				if(this.db[data.category_name][data.operator_produk]){
					this.db[data.category_name][data.operator_produk].push(data);
				}else{
					this.db[data.category_name][data.operator_produk] = [data];
				}
			}else{
				const obj = {};
				obj[data.operator_produk] = [data];
				this.db[data.category_name] = data;
			}
		})
	},
	requestData(){
		cOn.get({
			url:'/info?type=all',
			onload(){
				app.basedata = this.getJSONResponse().data;
				app.processDb();
				app.setupGlobalNav();
				app.setMoremenu();
				app.scrollTheImg();
				app.setCategory();
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
		console.log(this.thumbnailpath);
	},
	underDevelopmentFase(){
		this.main.addChild(app.template.underDevelopment());
	},
	main:find('main'),
	category:find('#category'),
	setCategory(){
		let state = 'Topup Game';
		const categorybuttons = this.category.findall('div');
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
		this.categoryState = state;
		this.displayContent(state);
	},
	openCashier(info,filterBase=false){
		this.content.addChild(this.template.buyMenu(info,filterBase));
	},
	setupGlobalNav(){
		const actionmap = {
			searchBar:'openSearchBar'
		}
		this.main.findall('.gnavbutton').forEach(button=>{
			button.onclick = ()=>{
				if(actionmap[button.id]){
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
				const boxin = this.template.boxItem(data,this.categoryState+','+data.operator_produk,'nama_produk');
				boxin.onclick = ()=>{
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
			hideElement(imglabel);
			this.scbopened = true;
			button.find('img').src = '/file?fn=closex.png';
		}
	}
}
app.init();