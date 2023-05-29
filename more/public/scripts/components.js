const background = makeElement('img',{
	src:'/file?fn=wood-g71d4f0bb7_1920.jpg',
	style:`
		width:100%;
		height:100%;
		object-fit:cover;
		position:relative;
	`,
})

const main = makeElement('main',{
	style:`
		display:flex;
		width:100%;
		height:100%;
		background:whitesmoke;
		position:absolute;
		flex-direction:column;
		font-family:goodone;
		align-items:center;
		justify-content:center;
		font-weiaght:normal;
	`,
	listedToday:[],
	onadded(){
		//this.addChild(background);
		this.addChild(header);
		this.addChild(category);
		this.addChild(content);
	}
})


const content = makeElement('div',{
	style:`
		height:80%;
		display:flex;align-items:center;
		position:relative;
	`,
	id:'whitebox',
	innerHTML:`
		<div id=contentcontainer
		style="
			background:white;
			width:100%;
			height:100%;
			box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
			display:flex;
			flex-direction:column;
			justify-content:flex-start;
			overflow:auto;
			position:relative;
		"
		>
			
		</div>
	`,
	onadded(){
		actions.target = this.find('#contentcontainer');
		category.cs[0].click();
	}
})

const category = makeElement('div',{
	style:`
		width:100%;
		height:12%;
		display:flex;
		justify-content:center;
	`,
	innerHTML:`
		<div
		id=whitebox
		style="
			position:sticky;
			top:0;
			background:#1cd219;
			display:flex;
			justify-content:space-around;
			align-items:center;
			height:100%;
			font-size:14px;
			box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
		"
		>
			<div id=pulsa
			style="
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				cursor:pointer;
			"
			>
				<img src=/file?fn=phone.png
				style="
					width:24px;
					height:24px;
					object-fit:cover;
					padding:5px;
					border-radius:50%;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				"
				>
				<span>Pulsa</span>
			</div>
			<div id=data
			style="
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				cursor:pointer;
			">
				<img src=/file?fn=hotspot.png
				style="
					width:24px;
					height:24px;
					object-fit:cover;
					padding:5px;
					border-radius:50%;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				"
				>
				<span>Data</span>
			</div>
			<div id=electrics
			style="
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				cursor:pointer;
			">
				<img src=/file?fn=plug.png
				style="
					width:24px;
					height:24px;
					object-fit:cover;
					padding:5px;
					border-radius:50%;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				"
				>
				<span>Listrik</span>
			</div>
			<div id=games
			style="
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				cursor:pointer;
			">
				<img src=/file?fn=console.png
				style="
					width:24px;
					height:24px;
					object-fit:cover;
					padding:5px;
					border-radius:50%;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				"
				>
				<span>Games</span>
			</div>
			<div id=orderCheck
			style="
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				cursor:pointer;
			"
			>
				<img src=/file?fn=search.png
				style="
					width:24px;
					height:24px;
					object-fit:cover;
					padding:5px;
					border-radius:50%;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				"
				>
				<span>Cek Pesanan</span>
			</div>
		</div>
	`,
	onadded(){
		const cs = this.firstElementChild.querySelectorAll('div');
		cs.forEach((c,i)=>{
			c.onclick = ()=>{
				if(actions.banned)return;
				actions[c.id]();
				cs.forEach(cin=>{
					cin.style.color = 'black';
					cin.querySelector('img').style.background = 'none';
				})
				c.style.color = 'white';
				c.querySelector('img').style.background = 'white';
			}
		})
		this.cs = cs;
	}
})

const actions = {
	banned:false,
	target:null,
	loading(cb){
		this.banned = true;
		this.target.clear();
		this.target.addChild(openLoading('Please Wait...',(el)=>{
			setTimeout(()=>{
				el.remove();
				cb();
				this.banned = false;
			},1000)
		}))
	},
	orderCheck(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>Cek Pesanan</span>
					</div>
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Masukan Id Transaksi Anda</span>
						</div>
						<div>
							<input type=number id=ref_id placeholder="Pastikan ID Benar!"
							style="
								border-radius:10px;
								width:94%;
							"
							>
						</div>
					</div>
					<div
					style="
						margin-top:20px;
						margin-bottom:10px;
					"
					>
						<span
						style="
							background:#fb8c00;
							color:white;
							padding:10px 20px;
							cursor:pointer;
							border-radius:10px;
							box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
						"
						id=checkbutton
						>Cek Pesanan</span>
					</div>
				`,
				onadded(){
					this.buttonEvent();
				},
				buttonEvent(){
					const checkbutton = this.find('#checkbutton');
					const ref_id = this.find('#ref_id');
					checkbutton.onclick = ()=>{
						if(String(ref_id.value).length===0){
							recheckvalue(ref_id);
							return;
						}
						statusGet(String(ref_id.value));
					}
				}
			}))
		})
	},
	pulsa(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>Pulsa</span>
					</div>
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Masukan Nomor Tujuan</span>
						</div>
						<div>
							<input type=number id=goalnumber placeholder="Pastikan Nomor Benar!"
							style="
								border-radius:10px;
								width:94%;
							"
							>
						</div>
					</div>
				`,
				inputEventSetup(){
					const numberEl = this.find('#goalnumber');
					numberEl.oninput = ()=>{
						if(String(numberEl.value).length!=4)return;
						const operator = this.getOperator(String(numberEl.value));
						getPulsaInfo(false,operator,this.parentNode);
					}
				},
				onadded(){
					this.inputEventSetup();
				},
				getOperator(number){
					const operatorMapping = {
						indosat:["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
						three:["0896", "0897", "0898", "0899", "0895"],
						telkomsel:["0811", "0812", "0813", "0852", "0853", "0821", "0823", "0822", "0851"],
						axis:["0838", "0837", "0831", "0832"],
						smart:["0881", "0882", "0883", "0884", " 0885", "0886", "0887", "0888"]
					}
					let result;
					for(let name in operatorMapping){
						if(operatorMapping[name].includes(number)){
							result = name;
							break;
						}
					}
					return result;
				}
			}))
			
			this.target.addChild(makeElement('div',{
				style:`
					margin:0 2% 2% 2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:50%;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						flex-direction:column;
					"
					>
						<div
						style="
							width:100%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:100%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
								width:94%;
							"
							id=filtering
							>
						</div>
					</div>
					<div
					style="
						height:100%;
						background:white;
						border-radius:10px;
						overflow:auto;
						position:relative;
					"
					id=spaceproducts
					>
					</div>
				`,
				onadded(){
					getPulsaInfo(false,'',this);
					this.filteringInput();
				},
				filteringInput(){
					const filterEl = this.find('#filtering');
					filterEl.oninput = ()=>{
						const result = this.parentNode.gamesData.filter(data=>(data.pulsa_op+' '+getPrice(data.pulsa_nominal)).toLowerCase().indexOf(filterEl.value.toLowerCase())!=-1);
						getPulsaInfo(result,'',this);
					}
				}
			}))
		})
	},
	data(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>Data</span>
					</div>
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Masukan Nomor Tujuan</span>
						</div>
						<div>
							<input type=number id=goalnumber placeholder="Pastikan Nomor Benar!"
							style="
								border-radius:10px;
								width:94%;
							"
							>
						</div>
					</div>
				`,
				inputEventSetup(){
					const numberEl = this.find('#goalnumber');
					numberEl.oninput = ()=>{
						if(String(numberEl.value).length!=4)return;
						const operator = this.getOperator(String(numberEl.value));
						getDataInfo(false,operator,this.parentNode);
					}
				},
				onadded(){
					this.inputEventSetup();
				},
				getOperator(number){
					const operatorMapping = {
						'Indosat Paket Internet':["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
						'Tri Paket Internet':["0896", "0897", "0898", "0899", "0895"],
						'Telkomsel Paket Internet':["0811", "0812", "0813", "0852", "0853", "0821", "0823", "0822", "0851"],
						'Axis Paket Internet':["0838", "0837", "0831", "0832"],
						'Smart Paket Internet':["0881", "0882", "0883", "0884", " 0885", "0886", "0887", "0888"]
					}
					let result;
					for(let name in operatorMapping){
						if(operatorMapping[name].includes(number)){
							result = name;
							break;
						}
					}
					return result;
				}
			}))
			
			this.target.addChild(makeElement('div',{
				style:`
					margin:0 2% 2% 2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:50%;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						flex-direction:column;
					"
					>
						<div
						style="
							width:100%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:100%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
								width:94%;
							"
							id=filtering
							>
						</div>
					</div>
					<div
					style="
						height:100%;
						background:white;
						border-radius:10px;
						overflow:auto;
						position:relative;
					"
					id=spaceproducts
					>
					</div>
				`,
				onadded(){
					getDataInfo(false,'',this);
					this.filteringInput();
				},
				filteringInput(){
					const filterEl = this.find('#filtering');
					filterEl.oninput = ()=>{
						const result = this.parentNode.gamesData.filter(data=>(data.pulsa_op+' '+data.pulsa_nominal).toLowerCase().indexOf(filterEl.value.toLowerCase())!=-1);
						getDataInfo(result,'',this);
					}
				}
			}))
		})
	},
	electrics(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>Listrik</span>
					</div>
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Masukan Nomor Meter</span>
						</div>
						<div>
							<input type=number id=goalnumber placeholder="Pastikan Nomor Benar!"
							style="
								border-radius:10px;
								width:94%;
							"
							>
						</div>
					</div>
				`,
				inputEventSetup(){
					const input = this.find('input');
					input.oninput = ()=>{
						console.log(input.value);
					}
				},
				onadded(){
					this.inputEventSetup();
				}
			}))
			
			this.target.addChild(makeElement('div',{
				style:`
					margin:0 2% 2% 2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:50%;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						flex-direction:column;
					"
					>
						<div
						style="
							width:100%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:100%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
								width:94%;
							"
							id=filtering
							>
						</div>
					</div>
					<div
					style="
						height:100%;
						background:white;
						border-radius:10px;
						overflow:auto;
						position:relative;
					"
					id=spaceproducts
					>
					</div>
				`,
				onadded(){
					getPlnInfo(false,'',this);
					this.filteringInput();
				},
				filteringInput(){
					const filterEl = this.find('#filtering');
					filterEl.oninput = ()=>{
						const result = this.parentNode.gamesData.filter(data=>data.pulsa_nominal.toLowerCase().indexOf(filterEl.value.toLowerCase())!=-1);
						getPlnInfo(result,'',this);
					}
				}
			}))
		})
	},
	games(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					position:sticky;
					top:0;
				`,
				innerHTML:`
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Pilih Game</span>
						</div>
						<div>
							<select
							style="
								background:white;
								padding:2% 3%;
								width:100%;
								border:1px solid gray;
								border-radius:10px;
							"
							id=gamecategory
							>
								<option value=''>All</option>
								<option value="Mobile Legend">Mobile Legend</option>
								<option value=garena>Garena</option>
								<option value="Free Fire">Free Fire</option>
								<option value="Arena of Valor">AOV</option>
							</select>
						</div>
					</div>
					<div>
						<div
						style="font-size:18px;"
						>
							<span>Masukan Game Id</span>
						</div>
						<div>
							<input type=text placeholder="Game ID Anda..."
							style="
								width:96%;
								padding:1% 2%;
								border-radius:10px;
							"
							id=gameId
							>
						</div>
					</div>
				`,
				onadded(){
					this.find('select').onchange = ()=>{
						getGamesVouceherInfo(false,this.find('select').value,this);
					}
				}
			}))
			this.target.addChild(makeElement('div',{
				style:`
					margin:0 2% 2% 2%;
					padding:2%;
					background:white;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:50%;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						flex-direction:column;
					"
					>
						<div
						style="
							width:100%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:100%;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
								width:94%;
							"
							id=filtering
							>
						</div>
					</div>
					<div
					style="
						height:100%;
						background:white;
						border-radius:10px;
						overflow:auto;
						position:relative;
					"
					id=spaceproducts
					>
					</div>
				`,
				onadded(){
					getGamesVouceherInfo(false,'',this);
					this.filteringInput();
				},
				filteringInput(){
					const filterEl = this.find('#filtering');
					filterEl.oninput = ()=>{
						const result = this.parentNode.gamesData.filter(data=>data.pulsa_nominal.toLowerCase().indexOf(filterEl.value.toLowerCase())!=-1);
						getGamesVouceherInfo(result,'',this);
					}
				}
			}))
		})
	}
}


const getPulsaInfo = function(filtered,op,el){
	const displayData = (data)=>{
		find('#spaceproducts').clear();
		data.forEach(d=>{
			find('#spaceproducts').addChild(makeElement('div',{
				data:d,
				style:`
					margin:2%;
					padding:2%;
					display:flex;
					justify-content:space-between;
					border-radius:10px;
					cursor:pointer;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>${d.pulsa_op+' '+getPrice(d.pulsa_nominal)}</span>
					</div>
					<div>
						<span>RP ${getPrice(d.pulsa_price)}</span>
					</div>
				`,
				onclick(){
					const goalNumber = find('#goalnumber');
					if(String(goalNumber.value).length===0){
						recheckvalue(goalNumber,2000);
						return;
					}
					const dts = this.data;
					dts.goalNumber = goalNumber.value;
					content.find('#contentcontainer').addChild(makeElement('div',{
						style:`
							position:absolute;
							width:100%;
							height:100%;
							display:flex;
							align-items:flex-start;
							justify-content:center;
							background:RGB(255,255,255,0.5);
						`,
						initButtons(){
							const buttonsMap = {
								closepayment(el){
									el.remove();
								},
								processBuyying(el){
									reqTrx(dts.goalNumber,dts.pulsa_code);
								}
							}
							this.findall('#buttons span').forEach(button=>{
								button.onclick = ()=>{
									buttonsMap[button.id](this);
								}
							})
						},
						innerHTML:`
							<div
							style="
								background:white;
								border-radius:0 0 10px 10px;
								padding:20px;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
							id=whitebox
							>
								<div>
									<span>Informasi Barang</span>
								</div>
								<div
								style="
									margin-top:5px;
									padding:20px;
									border-radius:10px;
									box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
								"
								>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nama Barang</span>
										<span>${this.data.pulsa_op+' '+this.data.pulsa_nominal}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Tipe Barang</span>
										<span>${this.data.pulsa_type}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nomor Tujuan</span>
										<span>${goalNumber.value}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Harga Barang</span>
										<span>RP ${getPrice(this.data.pulsa_price)}</span>
									</div>
								</div>
								<div
								style="
									margin:20px 0 10px 0;
									text-align:right;
								"
								id=buttons
								>
									<span
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									id=processBuyying
									>Bayar</span>
									<span
									id=closepayment
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Batal</span>
								</div>
							</div>
						`,
						onadded(){
							this.initButtons();
						}
					}))
				}
			}))
		})
		if(data.length===0){
			find('#spaceproducts').addChild(makeElement('div',{
				style:`
					height: 100%;
					justify-content: center;
					align-items: center;
					display: flex;
				`,
				innerHTML:`
					<div>
						<span>Tidak Ada Data...</span>
					</div>
				`
			}))
		}
	}
	//displayData();
	if(filtered){
		displayData(filtered);
		return;
	}
	find('#spaceproducts').addChild(openLoading('Memuat Data!',(loading)=>{
		cOn.post({
			url:'https://testprepaid.mobilepulsa.net/v1/legacy/index/',
			someSetting:[['setRequestHeader','content-type','application/json']],
			data:JSON.stringify({
				commands:'pricelist',
				username:'0895605801484',
				sign:'7ad0dabf608f08ace635ece4d5393b3d',
				status:'active',
				type:'pulsa',operator:op
			}),
			onload(){
				console.log(JSON.parse(this.response).data);
				displayData(JSON.parse(this.response).data);
				el.parentNode.gamesData = JSON.parse(this.response).data;
				loading.remove();
			}
		})
	}))
}

const getPlnInfo = function(filtered,op,el){
	const displayData = (data)=>{
		find('#spaceproducts').clear();
		data.forEach(d=>{
			find('#spaceproducts').addChild(makeElement('div',{
				data:d,
				style:`
					margin:2%;
					padding:2%;
					display:flex;
					justify-content:space-between;
					border-radius:10px;
					cursor:pointer;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>${d.pulsa_op+' '+getPrice(d.pulsa_nominal)}</span>
					</div>
					<div>
						<span>RP ${getPrice(d.pulsa_price)}</span>
					</div>
				`,
				onclick(){
					const goalNumber = find('#goalnumber');
					if(String(goalNumber.value).length===0){
						recheckvalue(goalNumber,2000);
						return;
					}
					content.find('#contentcontainer').addChild(makeElement('div',{
						style:`
							position:absolute;
							width:100%;
							height:100%;
							display:flex;
							align-items:flex-start;
							justify-content:center;
							background:RGB(255,255,255,0.5);
						`,
						initButtons(){
							this.findall('#buttons span').forEach(button=>{
								button.onclick = ()=>{
									if(button.id==='closepayment'){
										this.remove();
									}
								}
							})
						},
						innerHTML:`
							<div
							style="
								background:white;
								border-radius:0 0 10px 10px;
								padding:20px;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
							id=whitebox
							>
								<div>
									<span>Informasi Barang</span>
								</div>
								<div
								style="
									margin-top:5px;
									padding:20px;
									border-radius:10px;
									box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
								"
								>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nama Barang</span>
										<span>${this.data.pulsa_op+' '+this.data.pulsa_nominal}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Tipe Barang</span>
										<span>${this.data.pulsa_type}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nomor Tujuan</span>
										<span>${goalNumber.value}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Harga Barang</span>
										<span>RP ${getPrice(this.data.pulsa_price)}</span>
									</div>
								</div>
								<div
								style="
									margin:20px 0 10px 0;
									text-align:right;
								"
								id=buttons
								>
									<span
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Bayar</span>
									<span
									id=closepayment
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Batal</span>
								</div>
							</div>
						`,
						onadded(){
							this.initButtons();
						}
					}))
				}
			}))
		})
		if(data.length===0){
			find('#spaceproducts').addChild(makeElement('div',{
				style:`
					height: 100%;
					justify-content: center;
					align-items: center;
					display: flex;
				`,
				innerHTML:`
					<div>
						<span>Tidak Ada Data...</span>
					</div>
				`
			}))
		}
	}
	//displayData();
	if(filtered){
		displayData(filtered);
		return;
	}
	find('#spaceproducts').addChild(openLoading('Memuat Data!',(loading)=>{
		cOn.post({
			url:'https://testprepaid.mobilepulsa.net/v1/legacy/index/',
			someSetting:[['setRequestHeader','content-type','application/json']],
			data:JSON.stringify({
				commands:'pricelist',
				username:'0895605801484',
				sign:'7ad0dabf608f08ace635ece4d5393b3d',
				status:'active',
				type:'pln',operator:'pln'
			}),
			onload(){
				console.log(JSON.parse(this.response).data);
				displayData(JSON.parse(this.response).data);
				el.parentNode.gamesData = JSON.parse(this.response).data;
				loading.remove();
			}
		})
	}))
}

const getDataInfo = function(filtered,op,el){
	const displayData = (data)=>{
		find('#spaceproducts').clear();
		data.forEach(d=>{
			find('#spaceproducts').addChild(makeElement('div',{
				data:d,
				style:`
					margin:2%;
					padding:2%;
					display:flex;
					justify-content:space-between;
					border-radius:10px;
					cursor:pointer;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>${d.pulsa_op+' '+d.pulsa_nominal}</span>
					</div>
					<div>
						<span>RP ${getPrice(d.pulsa_price)}</span>
					</div>
				`,
				onclick(){
					const goalNumber = find('#goalnumber');
					if(String(goalNumber.value).length===0){
						recheckvalue(goalNumber,2000);
						return;
					}
					content.find('#contentcontainer').addChild(makeElement('div',{
						style:`
							position:absolute;
							width:100%;
							height:100%;
							display:flex;
							align-items:flex-start;
							justify-content:center;
							background:RGB(255,255,255,0.5);
						`,
						initButtons(){
							this.findall('#buttons span').forEach(button=>{
								button.onclick = ()=>{
									if(button.id==='closepayment'){
										this.remove();
									}
								}
							})
						},
						innerHTML:`
							<div
							style="
								background:white;
								border-radius:0 0 10px 10px;
								padding:20px;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
							id=whitebox
							>
								<div>
									<span>Informasi Barang</span>
								</div>
								<div
								style="
									margin-top:5px;
									padding:20px;
									border-radius:10px;
									box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
								"
								>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nama Barang</span>
										<span>${this.data.pulsa_op+' '+this.data.pulsa_nominal}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Tipe Barang</span>
										<span>${this.data.pulsa_type}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nomor Tujuan</span>
										<span>${goalNumber.value}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Harga Barang</span>
										<span>RP ${getPrice(this.data.pulsa_price)}</span>
									</div>
								</div>
								<div
								style="
									margin:20px 0 10px 0;
									text-align:right;
								"
								id=buttons
								>
									<span
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Bayar</span>
									<span
									id=closepayment
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Batal</span>
								</div>
							</div>
						`,
						onadded(){
							this.initButtons();
						}
					}))
				}
			}))
		})
		if(data.length===0){
			find('#spaceproducts').addChild(makeElement('div',{
				style:`
					height: 100%;
					justify-content: center;
					align-items: center;
					display: flex;
				`,
				innerHTML:`
					<div>
						<span>Tidak Ada Data...</span>
					</div>
				`
			}))
		}
	}
	//displayData();
	if(filtered){
		displayData(filtered);
		return;
	}
	find('#spaceproducts').addChild(openLoading('Memuat Data!',(loading)=>{
		cOn.post({
			url:'https://testprepaid.mobilepulsa.net/v1/legacy/index/',
			someSetting:[['setRequestHeader','content-type','application/json']],
			data:JSON.stringify({
				commands:'pricelist',
				username:'0895605801484',
				sign:'7ad0dabf608f08ace635ece4d5393b3d',
				status:'active',
				type:'data',operator:op
			}),
			onload(){
				console.log(JSON.parse(this.response).data);
				displayData(JSON.parse(this.response).data);
				el.parentNode.gamesData = JSON.parse(this.response).data;
				loading.remove();
			}
		})
	}))
}

const getGamesVouceherInfo = function(filtered,op,el){
	const displayData = (data)=>{
		find('#spaceproducts').clear();
		data.forEach(d=>{
			find('#spaceproducts').addChild(makeElement('div',{
				data:d,
				style:`
					margin:2%;
					padding:2%;
					display:flex;
					justify-content:space-between;
					border-radius:10px;
					cursor:pointer;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
				`,
				innerHTML:`
					<div>
						<span>${d.pulsa_nominal}</span>
					</div>
					<div>
						<span>RP ${getPrice(d.pulsa_price)}</span>
					</div>
				`,
				onclick(){
					const gameId = find('#gameId');
					if(gameId.value.length===0){
						recheckvalue(gameId,500);
						return;
					}
					content.find('#contentcontainer').addChild(makeElement('div',{
						style:`
							position:absolute;
							width:100%;
							height:100%;
							display:flex;
							align-items:flex-start;
							justify-content:center;
							background:RGB(255,255,255,0.5);
						`,
						initButtons(){
							this.findall('#buttons span').forEach(button=>{
								button.onclick = ()=>{
									if(button.id==='closepayment'){
										this.remove();
									}
								}
							})
						},
						innerHTML:`
							<div
							style="
								background:white;
								border-radius:0 0 10px 10px;
								padding:20px;
								box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
							"
							id=whitebox
							>
								<div>
									<span>Informasi Barang</span>
								</div>
								<div
								style="
									margin-top:5px;
									padding:20px;
									border-radius:10px;
									box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
								"
								>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Game ID</span>
										<span>${gameId.value}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									"
									>
										<span>Nama Barang</span>
										<span>${this.data.pulsa_op+' '+this.data.pulsa_nominal}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Tipe Barang</span>
										<span>${this.data.pulsa_type}</span>
									</div>
									<div
									style="
										display:flex;
										justify-content:space-between;
									">
										<span>Harga Barang</span>
										<span>RP ${getPrice(this.data.pulsa_price)}</span>
									</div>
								</div>
								<div
								style="
									margin:20px 0 10px 0;
									text-align:right;
								"
								id=buttons
								>
									<span
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Bayar</span>
									<span
									id=closepayment
									style="
										  background: #fb8c00;
											color: white;
											padding: 2% 3%;
											cursor: pointer;
											border-radius: 10px;
											box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
									"
									>Batal</span>
								</div>
							</div>
						`,
						onadded(){
							this.initButtons();
						}
					}))
				}
			}))
		})
		if(data.length===0){
			find('#spaceproducts').addChild(makeElement('div',{
				style:`
					height: 100%;
					justify-content: center;
					align-items: center;
					display: flex;
				`,
				innerHTML:`
					<div>
						<span>Tidak Ada Data...</span>
					</div>
				`
			}))
		}
	}
	//displayData();
	if(filtered){
		displayData(filtered);
		return;
	}
	find('#spaceproducts').addChild(openLoading('Memuat Data!',(loading)=>{
		cOn.post({
			url:'https://testprepaid.mobilepulsa.net/v1/legacy/index/',
			someSetting:[['setRequestHeader','content-type','application/json']],
			data:JSON.stringify({
				commands:'pricelist',
				username:'0895605801484',
				sign:'7ad0dabf608f08ace635ece4d5393b3d',
				status:'active',
				type:'game',operator:op
			}),
			onload(){
				console.log(JSON.parse(this.response).data);
				displayData(JSON.parse(this.response).data);
				el.parentNode.gamesData = JSON.parse(this.response).data;
				loading.remove();
			}
		})
	}))
}


const header = makeElement('header',{
	style:`
		width:100%;
		height:10%;
		display:flex;
		justify-content:center;
	`,
	innerHTML:`
		<div id=whitebox
		style="
			display:flex;
			align-items:center;
			background:white;
			color:black;
			justify-content:center;
			box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
		">
			<div
			style="
				width:90%;
				display:flex;
				align-items:center;
				justify-content:space-between;
			"
			>
				<div>
					<span
					style="
						padding:5px 10px;
						background:#1cd219;
						color:white;
						border-radius:0 20px 0 20px;
					"
					>G</span>
					<span>emaStore</span>
				</div>
				<div
				style="
					display:flex;
					align-items:center;
				"
				>
					<img src=/file?fn=cart.png
					style="
						width:32px;
						height:32px;
						object-fit:cover;
					"
					>
				</div>
			</div>
		</div>
	`,
	onadded(){
		
	}
})

const reqTrx = function(hp,pulsa_code){
	const ref_id = String(new Date().getTime());
	const username = "0895605801484";
	cOn.post({
		url:'https://testprepaid.mobilepulsa.net/v1/legacy/index',
		someSetting:[
			['setRequestHeader','content-type','application/json']
		],
		data:JSON.stringify({
			username,
			sign:md5(username+"63764243965e5e29"+ref_id),
			commands:'topup',
			pulsa_code,hp,
			ref_id
		}),
		onload(){
			console.log(this.response);
		}
	})
}
const statusGet = function(ref_id){
	const username = "0895605801484";
	cOn.post({
		url:'https://testprepaid.mobilepulsa.net/v1/legacy/index',
		someSetting:[
			['setRequestHeader','content-type','application/json']
		],
		data:JSON.stringify({
			username,
			sign:md5(username+"63764243965e5e29"+ref_id),
			commands:'inquiry',
			ref_id
		}),
		onload(){
			console.log(this.response);
		}
	})
}









