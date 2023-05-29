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
			background:#1976d2;
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
					background:aliceblue;
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
							<input type=number id=goalnumber placeholder="Pastikan ID Benar!"
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
						>Cek Pesanan</span>
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
		})
	},
	pulsa(){
		this.loading(()=>{
			this.target.addChild(makeElement('div',{
				style:`
					margin:2%;
					padding:2%;
					background:aliceblue;
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
					background:aliceblue;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:350px;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						justify-content:space-between;
					"
					>
						<div
						style="
							width:50%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:50%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
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
					background:aliceblue;
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
					background:aliceblue;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:350px;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						justify-content:space-between;
					"
					>
						<div
						style="
							width:50%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:50%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
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
					background:aliceblue;
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
					background:aliceblue;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:350px;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						justify-content:space-between;
					"
					>
						<div
						style="
							width:50%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:50%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
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
					background:aliceblue;
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
					background:aliceblue;
					border-radius:10px;
					box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
					display:flex;
					flex-direction:column;
					height:350px;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
						display:flex;
						justify-content:space-between;
					"
					>
						<div
						style="
							width:50%;
							display:flex;
							align-items:center;
						"
						>
							<span>List Produk.</span>
						</div>
						<div
						style="
							width:50%;
							text-align:right;
						">
							<input placeholder="Telusuri Produk..."
							style="
								border-radius:10px;
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
									console.log(dts);
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
						background:#1976d2;
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

const copyright = makeElement('div',{
	innerHTML:`
		<div
		style="
			margin-bottom:10px;
			display: flex;
			align-items: center;
			justify-content: center;
		"
		>
			<div
			style="
				display:flex;
				justify-content:center;a
			"
			>
				<div
					style="
						display:flex;
						margin-top:20px;
						font-size:12px;
						align-items:center;
						color:white;
						justify-content:space-around;
						font-weight:bold;
					"
					>
						<div>
							A product by
						</div>
						<div>
							<a href=https://infinitydreams.cyclic.app target=_blank>
								<img src=file?fn=infinity.png
								style="
									width:24px;
									height:24px;
									margin-left:5px;
								"
								>
							</a>
						</div>
					</div>
			</div>

		</div>
	`,
})
const normalizeData = function(data){
	const x = [];
	for(let i=0;i<data.length;i+=2){
		const newx = [data[i]];
		if(data[i+1]){
			newx.push(data[i+1]);
		}else newx.push([]);
		x.push(newx);
	}
	return x;
}
const gmenus = function(data){
	//data should be mapped before.
	return makeElement('div',{
		id:'mieraamenubox',
		style:`
			height:90%;
			width:100%;
			overflow:auto;
			scrollbar-width:none;
			padding-bottom:10px;
		`,
		onadded(){
			data.forEach((innerData,i)=>{
				this.addChild(
					makeElement('div',{
						style:`
							display:flex;
							justify-content:space-between;
							margin-top:${i===0?'10px':'5px'};
						`,
						onadded(){
							this.addOne();
						},
						addOne(){
							innerData.forEach((innerDatain,i)=>{
								this.addChild(makeElement('div',{
									data:innerDatain,
									removed:innerData[i].length===0?true:false,
									style:`
										width:100%;
										margin-${i===0?'right':'left'}:${i===0&&!innerData[i+1]?'0px':'2px'};
										padding:10px;
										background:white;
										opacity:${innerData[i].length===0?0:1};
										cursor:${innerData[i].length===0?'initial':'pointer'};
									`,
									onmouseover(){
										if(!this.removed)this.style.background = 'beige';
									},
									onmouseleave(){
										if(!this.removed)this.style.background = 'white';
									},
									onclick(){
										if(!this.removed)openMenuPreview(this.data);
									},
									innerHTML:`
										<div
										style="
											width:100%;
											height:200px;
											background:black;
										"
										>
											<img src=${innerDatain.thumbnails}
											style="
												width:100%;
												height:100%;
												object-fit:cover;
											"
											>
										</div>
										<div
										style="
											margin-top:5px;
										"
										>
											<div
											style="
												font-size:12px;
												margin-top:10px;
												margin-bottom:2px;
												
											"
											>
												<span>RP. ${innerDatain.price}</span>
											</div>
											<div>
												<span>${innerDatain.name}</span>
											</div>
										</div>
									`
								}))
							})
						}
					})
				)
			})
		}
	})
}

const openMenuPreview = function(data){
	main.addChild(makeElement('div',{
		style:`
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<div
			style="
				background:white;
				height:100%;
				display:flex;
				flex-direction:column;
				align-items:center;
				justify-content:flex-start;
			"
			id=whitebox
			>
				<div
				style="
					height:30%;
					display:flex;
					justify-content:flex-end;
					padding:0 10px;
				"
				>
					<img src=${data.thumbnails}
					style="
						width:100%;
						object-fit:cover;
					"
					>
					<div
					style="
						position:absolute;
						width:32px;
						height:32px;
						background:white;
						color:black;
						padding:2px;
						cursor:pointer;
						border-radius:50%;
						display:flex;
						align-items:center;
						justify-content:center;
						margin:5px;
					"
					id=closepage
					>
						<span
						style="
							font-size:24px;
						"
						>X</span>
					</div>
				</div>
				<div
				style="
					padding:0 2.5%;
					display:flex;
					width:95%;
					height:70%;
					flex-direction:column;
				"
				>
					<div
					style="
						display:flex;
						width:100%;
						margin:10px 0;
						align-items:center;
						justify-content:flex-end;
					"
					>
						<div
						style="
							text-align:center;
							padding:10px;
							background:${main.listedToday.includes(data.productId)?'brown':'black'};
							border-radius:30px;
							width:100%;
							cursor:pointer;
							color:white;
						"
						id=orderbutton
						>
							<span>${main.listedToday.includes(data.productId)?'Pesanan Dibuat':'Pesan Sekarang'}</span>
						</div>
					</div>
					<div
					style="
						font-size:24px;
					"
					>
						<span>${data.name}</span>
					</div>
					<div
					style="
						font-size:12px;
						font-weiaght:normal;
					"
					>
						<span>RP. ${data.price}</span>
					</div>
					<div
					style="
						font-size:16px;
						margin-top:10px;
						height:300px;
						overflow:auto;
						scrollbar-width:thin;
						padding:5px;
						background:whitesmoke;
					"
					>
						<span id=descriptionplace>Loading...</span>
					</div>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:flex-start;
						height:100%;
						width:100%;
						overflow:auto;
						scrollbar-width:thin;
						margin:10px 0;
					"
					id=divshowcase
					>
					</div>
				</div>
			</div>
		`,
		addShowcase(){
			data.showcases.forEach(img=>{
				this.find('#divshowcase').addChild(makeElement('img',{
					style:`
						width:300px;
						object-fit:cover;
						height:100%;
						padding:0 5px;
					`,
					src:img,
					onclick(){
						openBigImgPrev(this.src);
					}
				}))
			})
		},
		onadded(){
			this.find('#descriptionplace').innerText = data.description;
			this.btnEvent();
			this.addShowcase();
		},
		btnEvent(){
			this.find('#closepage').onclick = ()=>{this.remove()}
			if(main.listedToday.includes(data.productId))return;
			this.find('#orderbutton').onclick = ()=>{
				if(!this.requested)this.openOrderPop('1');
			}
		},
		openOrderPop(ordercount){
			main.addChild(makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					top:0;
					left:0;
					display:flex;
					align-items:flex-start;
					justify-content:center;
					background:#0000009c;
				`,
				parent:this,
				innerHTML:`
					<div
					style="
						background:white;
						height:auto;
						padding:20px;
						border-radius:0 0 30px 30px;
					"
					id=whitebox
					>
						<div
						style="
							font-size:12px;
						"
						>
							<span>Total RP. ${data.price} X ${ordercount} = RP. ${Number(data.price)*Number(ordercount)}</span>
						</div>
						<div
						style="
							font-size:24px;
							margin-bottom:20px;
						"
						>
							<span>${data.name}</span>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Nama</span>
							</div>
							<div>
								<input placeholder="Masukan Nama Anda!"
								style="
									border:1px solid black;
								"
								id=name
								>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>WA</span>
							</div>
							<div>
								<input placeholder="Masukan WA Anda!" type=number
								style="
									border:1px solid black;
								"
								id=wa
								>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Tipe Transaksi</span>
							</div>
							<div>
								<select
								style="
									border:1px solid black;
									padding:10px;
									background:white;
									outline:none;
									border-radius:20px;
								"
								>
									<option value=0>JEMPUT</option>
									<option value=1>ANTAR / Biaya Tambahan</option>
								</select>
							</div>
						</div>
						<div
						style="
							margin-bottom:5px;
						"
						>
							<div>
								<span>Catatan</span>
							</div>
							<div>
								<textarea placeholder="Pesan dari anda..."
								style="
									border:1px solid black;
									width:95%;
									max-height:200px;
									outline:none;
									max-width:95%;
									min-width:95%;
									min-height:100px;
									font-family:goodone;
									background:white;
								"
								id=notes
								></textarea>
							</div>
						</div>
						<div
						style="
							display:none;
							align-items:center;
							margin-bottom:5px;
						"
						id=location
						>
							<div>
								<span>Lokasi / wajib</span>
							</div>
							<div
							style="margin-left:10px;"
							>
								<img src=/file?fn=google-maps.png
								id=getLocation
								style="
									width:24px;
									height:24px;
									cursor:pointer;
								">
							</div>
							<div
							id=locationmanual
							style="
								display:none;
							"
							>
								<textarea
								placeholder="Tulis alamat anda!"
								></textarea>
							</div>
						</div>
						<div
						style="
							margin-top:20px;
							display:flex;
							align-items:center;
							justify-content:space-around;
						"
						>
							<span
							style="
								padding:10px;
								background:black;
								color:white;
								cursor:pointer;
								border-radius:30px;
							"
							id=processorder
							>Lanjutkan</span>
							<span
							style="
								padding:10px;
								background:black;
								color:white;
								cursor:pointer;
								border-radius:30px;
							"
							id=ordercancel
							>Batalkan</span>
						</div>
					</div>
				`,
				forceCannotTrackingYou(){
					
				},
				typeOrder:0,
				getLocation(img,auto){
					if(navigator.geolocation){
						navigator.geolocation.getCurrentPosition((res)=>{
							this.location = `${res.coords.latitude},${res.coords.longitude}`;
							img.src = '/file?fn=check-mark.png';
							if(auto)return this.location;
						});
					}else{
						this.forceCannotTrackingYou();
					}
				},
				collectData(){
					const location = this.typeOrder===1?this.location||this.getLocation(this.find('#getLocation'),true):null;
					return {
						name:this.find('#name').value,
						wa:this.find('#wa').value,
						notes:this.find('#notes').value,
						location,
						typeOrder:this.typeOrder,
						productId:data.productId,
						tsxId:`tsx-${getUniqueID()}`,
						time:new Date().toLocaleString()
					}
				},
				buttonHandle(){
					this.find('#processorder').onclick = ()=>{
						const data = this.collectData();
						main.addChild(openLoading('Memprosess Pesanan Ada',(el)=>{
							//strightly connect to firebase.
							header.newBuysRef(data.tsxId).set(data).then(()=>{
								this.parent.find('#orderbutton').innerHTML = 'Pesanan Dibuat';
								this.parent.find('#orderbutton').style.background = 'brown';
								this.parent.requested = 1;
								main.listedToday.push(data.productId);
								this.remove();
								el.remove();
							})
						}))
					}
					this.find('#ordercancel').onclick = ()=>{
						this.remove();
					}
					this.find('#getLocation').onclick = ()=>{
						this.getLocation(this.find('#getLocation'));
					}
				},
				onadded(){
					this.selectinghandle();
					this.buttonHandle();
				},
				selectinghandle(){
					const select = this.find('select');
					select.onchange = ()=>{
						this.typeOrder = Number(select.value);
						if(this.typeOrder){
							showElement(this.find('#location'),'flex');
						}else hideElement(this.find('#location'));
					}
				}
			}))
		}
	}))
}

const openBigImgPrev = function(src){
	main.addChild(makeElement('div',{
		style:`
			position:absolute;
			width:100%;
			height:100%;
			top:0;
			left:0;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<img src=${src}
			style="
				max-width:90%;
				max-height:90%;
				object-fit:cover;
			"
			>
		`,
		onclick(){
			this.remove();
		}
	}))
}

const wannasell = function(){
	main.addChild(makeElement('div',{
		style:`
			position:absolute;
			width:100%;
			top:0;
			left:0;
			height:100%;
			display:flex;
			align-items:flex-start;
			justify-content:center;
			background:#0000008a;
		`,
		innerHTML:`
			<div
			style="
				background:white;
				padding:20px;
				border-radius:0 0 20px 20px;
			"
			id=whitebox
			>
				<div
				style="
					font-weight:bold;
					font-size:24px;
					margin-bottom:10px;
				"
				>
					<span>Informasi Barang Anda!</span>
				</div>
				<div>
					<div>
						<span>Nama Barang</span>
					</div>
					<div>
						<input placeholder=Nama_Barang... id=name>
					</div>
				</div>
				<div>
					<div>
						<span>Harga Barang</span>
					</div>
					<div>
						<input placeholder=Harga_Barang... type=number id=price>
					</div>
				</div>
				<div>
					<div>
						<span>Deskripsi Barang</span>
					</div>
					<div>
						<textarea id=stuffDescription placeholder=Deskripsi_Barang style=outline:none></textarea>
					</div>
				</div>
				<div>
					<div>
						<span>Alamat Anda</span>
					</div>
					<div>
						<textarea id=stuffDescription placeholder=Alamat_Anda style=outline:none></textarea>
					</div>
				</div>
				<div>
					<div>
						<span>Thumbnail Barang</span>
					</div>
					<div>
						<input type=file id=thumbnails>
					</div>
				</div>
				<div>
					<div>
						<span>Showcase Barang</span>
					</div>
					<div>
						<input type=file multiple id=showcases>
					</div>
				</div>
				<div
				style="
					margin-top:20px;
					display:flex;
					width:100%;
					gap:10px;
					justify-content:flex-end;
				"
				>
					<div>
						<span id=saveButton
						class=akarabutton
						style="
							background:black;
							border-radius:30px;
						"
						>
							Simpan
						</span>
					</div>
					<div>
						<span id=cancelButton
						class=akarabutton
						style="
							background:black;
							border-radius:30px;
						"
						>
							Batal
						</span>
					</div>
				</div>
			</div>
		`,
		buttonEvent(){
			this.find('#saveButton').onclick = ()=>{
				
			}
			this.find('#cancelButton').onclick = ()=>{
				this.remove();
			}
		},
		onadded(){
			this.buttonEvent();
		}
	}))
}

const showMenus = function(){
	main.addChild(openLoading('Memuat Data',(loading)=>{
		header.productsref.get().then(d=>{
			const thedata = d.val();
			const data = [];
			Object.keys(thedata).forEach(key=>{
				data.push(Object.assign(thedata[key],{key}));
			});
			main.addChild(makeElement('div',{
				style:`
					position:absolute;
					width:100%;
					height:100%;
					top:0;
					left:0;
					display:flex;
					align:center;
					justify-content:center;
				`,
				innerHTML:`
					<img src=/file?fn=wood-g71d4f0bb7_1920.jpg
					style="
						width:100%;
						position:absolute;
						height:100%;
						object-fit:cover;
					"
					>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:center;
						flex-direction:column;
						position:relative;
					"
					id=whitebox
					>
						<div
						style="
							height:10%;
							display:flex;
							align-items:center;
							background:white;
							color:black;
							width:100%;
							justify-content:space-between;
							font-size:24px;
						"
						>
							<span
							style="
								margin-left:20px;
								cursor:pointer;
							"
							id=menusclose
							>x</span>
							<span
							style="
								margin-right:20px;
							"
							>Stok Barang</span>
						</div>
					</div>
				`,
				closeSetup(){
					this.find('#menusclose').onclick = ()=>{
						this.remove();
					}
				},
				onadded(){
					//adding menus data.
					//the data is so flexible and this is gonna be good for the app.
					//cause when there is a system, that can displaying data in flexible way.
					this.find('#whitebox').addChild(gmenus(normalizeData(data)));
					this.closeSetup();
					loading.remove();
				}
			}))
		})
	}))
}










