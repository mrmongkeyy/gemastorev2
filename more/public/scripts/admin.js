

const admin = {
  template:{
    setting(data){
      return makeElement('div',{
        style:`
        padding:20px;
        display: flex;
        font-size:18px;
        flex-direction: column;
        gap: 2px;
        `,
        innerHTML:`
        <div><b>Provider</b></div>
        <div>
          <div>Digiflazz Api Username</div>
          <div>
            <input placeholder="Tambahkan Username" readonly>
          </div>
        </div>
        <div>
          <div>Digiflazz Api Secret Key</div>
          <div>
            <input placeholder="Tambahkan Key Secret" readonly>
          </div>
        </div>
        <div><b>Payment GateWay</b></div>
        <div>
          <div>Ipaymu Api Username</div>
          <div>
            <input placeholder="Tambahkan Username" readonly>
          </div>
        </div>
        <div>
          <div>Ipaymu Api Secret Key</div>
          <div>
            <input placeholder="Tambahkan Key Secret" readonly>
          </div>
        </div>
        <div><b>User Interaction</b></div>
        <div>
          <div>Markup Harga</div>
          <div>
            <input placeholder="Tambahkan Harga" type=number value=${data.itemmarkupprice} id=itemmarkupprice>
          </div>
        </div>
        <div>
          <div>Bonus Penggunaan Saldo</div>
          <div>
            <input placeholder="Tambahkan Bonus" type=number value=${data.gsaldobonus} id=gsaldobonus>
          </div>
        </div>
        <div>
          <div>Bonus Deposit</div>
          <div>
            <input placeholder="Tambahkan Bonus" type=number value=${data.depositbonus} id=depositbonus>
          </div>
        </div>
        `,
        userData:{
        },
        addinputEvent(){
          this.findall('input').forEach(input=>{
            input.onchange = ()=>{
              this.userData[input.id] = Number(input.value);
            }
          })
        },
        submitEvent(){
          admin.content.find('#savechanges').onclick = ()=>{
            cOn.post({
              url:'/admin',
              someSettings:[
                ['setRequestHeader','content-type','application/json']
              ],
              data:jsonstr({type:'updatetweaks',data:this.userData}),
              onload(){
                const data = this.getJSONResponse();
                if(data.valid){
                  forceRecheck(admin.main,'Update Sukses!');
                  admin.adminbody.clear();
                  admin.opensetting();
                }
              }
            });
          }
        },
        onadded(){
          this.addinputEvent();
          this.submitEvent();
        }
      })
    },
    users(data){
      return makeElement('div',{
        data,
        style:`
          display: flex;
          font-size:18px;
          align-items: flex-start;
          flex-direction: column;
        `,
        innerHTML:`
        <div style="
        border-bottom:2px solid #f1f1f1;
        height:48px;
        display: flex;
        align-items: center;
        position:sticky;
        top:0;
        background:white;
      ">
        <div
        style="
          width: 64px;
          overflow: auto;
          text-align: center;
        "
        >No</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Nama</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Email</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Phone</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Saldo</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">G Points</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Voucher</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Transaksi</div>
      </div>
      <div
      style="
        display: flex;
        font-size:18px;
        align-items: center;
        flex-direction: column;
        height:100%;
      "
      >
        <div style="
          height:90%;
          width: 100%;
          display: flex;
          justify-content: space-around;
          overflow: auto;
        ">
          <div id=userparent
            style="width:100%"
          >
          </div>
        </div>
      </div>
        `,
        processUsers(){
          const userTemplate = (i,data)=>{
            return makeElement('div',{
              style:`
              margin-top:10px;
              width: 100%;
              display: flex;
              overflow: auto;
              font-size:14px;
              `,
              innerHTML:`
              <div
              style="
                width: 64px;
                overflow: auto;
                text-align: center;
              "
              >
                ${i}.
              </div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.name}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.email}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.hp}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">Rp. ${getPrice(data.ballance)}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${getPrice(data.points)} G</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${getPrice(data.voucher||0)}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${getPrice(!data.Trxs?0:data.Trxs.length)}</div>
              `
            })
          }
          let index = 0;
          for(let i in this.data){
            index++;
            this.find('#userparent').addChild(userTemplate(index,this.data[i]));
          }
        },
        onadded(){
          this.processUsers();
        }
      })
    },
    history(data){
      return makeElement('div',{
        data,
        style:`
          display: flex;
          font-size:18px;
          align-items: flex-start;
          flex-direction: column;
        `,
        innerHTML:`
        <div style="
        border-bottom:2px solid #f1f1f1;
        height:48px;
        display: flex;
        align-items: center;
        position:sticky;
        top:0;
        background:white;
      ">
        <div
        style="
          width: 64px;
          overflow: auto;
          text-align: center;
        "
        >No</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Id Transaksi</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Email</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Phone</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Hp</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Game Id</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Server Id</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Ammount</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Payment</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">PaymentCode</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Expired</div>
        <div
        style="
          width: 200px;
          overflow: auto;
          text-align: center;
        ">Status</div>
      </div>
      <div
      style="
        display: flex;
        font-size:14px;
        align-items: flex-start;
        flex-direction: column;
        height:100%;
        width: 100%;
      "
      >
        <div style="
          display: flex;
          justify-content: space-around;
          overflow: auto;
        ">
          <div id=userparent
            style="width:100%"
          >
          </div>
        </div>
      </div>
        `,
        processUsers(){
          const userTemplate = (trxid,i,data)=>{
            return makeElement('div',{
              style:`
              margin-top:10px;
              width: 100%;
              display: flex;
              overflow: auto;
              `,
              innerHTML:`
              <div
              style="
                width: 64px;
                overflow: auto;
                text-align: center;
              "
              >
                ${i}.
              </div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${trxid}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.moredetails.validationData.email}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.moredetails.validationData.phone}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.moredetails.targetData.hp||'-'}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.moredetails.targetData.gameid||'-'}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.moredetails.targetData.serverid||'-'}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">Rp. ${getPrice(data.moredetails.products.ammount)}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.payment}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.paymentCode||'-'}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.expired||'-'}</div>
              <div
              style="
                width: 200px;
                overflow: auto;
                text-align: center;
              ">${data.status}</div>
              `
            })
          }
          let index = 0;
          for(let i in this.data){
            index++;
            this.find('#userparent').addChild(userTemplate(i,index,this.data[i]));
          }
        },
        onadded(){
          this.processUsers();
        }
      })
    }
  },
  state:'opensetting',
  main:find('main'),
  content:find('content'),
  adminbody:find('#body'),
  opensetting(){
    //req a setting first.
    const response = (data)=>{
      this.adminbody.addChild(this.template.setting(data));
    }
    cOn.post({
      url:'/admin',
      someSettings:[
        ['setRequestHeader','content-type','application/json']
      ],
      data:jsonstr({
        type:'gettweaksdata'
      }),
      onload(){
        response(this.getJSONResponse());
      }
    })
    
  },
  openusers(){
    //req a setting first.
    const response = (data)=>{
      console.log(data);
      this.adminbody.addChild(this.template.users(data));
    }
    cOn.post({
      url:'/admin',
      someSettings:[
        ['setRequestHeader','content-type','application/json']
      ],
      data:jsonstr({
        type:'getuserlist'
      }),
      onload(){
        response(this.getJSONResponse());
      }
    })
    
  },
  openvoucher(){

  },
  opennews(){

  },
  openriwayat(){
    const response = (data)=>{
      console.log(data);
      this.adminbody.addChild(this.template.history(data));
    }
    cOn.post({
      url:'/admin',
      someSettings:[
        ['setRequestHeader','content-type','application/json']
      ],
      data:jsonstr({
        type:'gethistory'
      }),
      onload(){
        response(this.getJSONResponse());
      }
    })
  },
  navSetup(){
    const divs = this.main.findall('#buttons div');
    let activecc = divs[0]; 
    divs.forEach(button=>{
      button.onclick = ()=>{
        activecc.classList.remove('activecc');
        button.classList.add('activecc');
        activecc = button;
        this.adminbody.clear();
        this.state = `open${button.id}`;
        this[this.state]();
      }
    })
    activecc.classList.add('activecc');
    this.opensetting();
  },
  setuprefreshbutton(){
    this.content.find('#refreshbutton').onclick = ()=>{
      this.adminbody.clear();
      this[this.state]();
    }
  },
  init(){
    this.navSetup();
    this.setuprefreshbutton();
  }
}

admin.init();