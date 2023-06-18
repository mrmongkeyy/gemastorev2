
const app = {
  base:{
    voucher:{
      game:{
        mobilelegend:{
          title:'Mobile Legend',
          thumbnailsrc:'./more/media/ml.png'
        },
        freefire:{
          title:'Free Fire',
          thumbnailsrc:'./more/media/ff.png'
        },
        arenaofvalor:{
          title:'Arena Of Valor',
          thumbnailsrc:'./more/media/aov.png'
        },
        codm:{
          title:'Call Of Duty Mobile',
          thumbnailsrc:'./more/media/codm.png'
        },
        ludo:{
          title:'The Ludo Game',
          thumbnailsrc:'./more/media/ldo.png'
        },
        rog:{
          title:'Ragnarok Origin',
          thumbnailsrc:'./more/media/rog.png'
        },
        omgl:{
          title:'Omega Legend',
          thumbnailsrc:'./more/media/omgl.png'
        },
        log:{
          title:'League Of Legend',
          thumbnailsrc:'./more/media/log.png'
        },
        clashroyal:{
          title:'Clash Royale',
          thumbnailsrc:'./more/media/cr.png'
        },
        clashofclans:{
          title:'Class Of Clans',
          thumbnailsrc:'./more/media/coc.png'
        },
        genshin:{
          title:'Genshin Impact',
          thumbnailsrc:'./more/media/gi.png'
        },
        sausageman:{
          title:'Sausage Man',
          thumbnailsrc:'./more/media/sgm.png'
        },
        pubgm:{
          title:'Pubg Mobile',
          thumbnailsrc:'./more/media/pm.png'
        },
        dominohiggs:{
          title:'Higgs Domino',
          thumbnailsrc:'./more/media/hd.png'
        },
        hayday:{
          title:'Hay Day',
          thumbnailsrc:'./more/media/hdy.png'
        },
        haggo:{
          title:'Haggo',
          thumbnailsrc:'./more/media/hg.png'
        }
      }
    }
  },
	template:{
    boxItem(data){
      return makeElement('div',{
        id:'box-in',
        innerHTML:`
        <div id="thumbbox"
        >
          <img src="${data.thumbnailsrc}"
          style="
            object-fit: cover;
            border-radius: 10px 10px 0 0;
            background:white;
          "
          >
        </div>
        <div
        style="
          padding:10px;
        "
        >
          ${data.title}
        </div>
        `
      })
    }
  },
  setMoremenu(){
		this.openmorebutton = find('#openmoremenu');
		this.moremenu = find('#moremenu');
		this.closemoremenu = find('#closemoremenu');
		this.openmorebutton.onclick = ()=>{
			showElement(this.moremenu,'flex');
		}
		this.closemoremenu.onclick = ()=>{
			hideElement(this.moremenu);
		}
	},
  scrollTheImg(speed=3){
    let frame;canMove=true;ontimeout=false;
    const imgbox = find('#imglabel');
    imgbox.onmouseover = ()=>{canMove=false}
    imgbox.onmouseleave = ()=>{canMove=true}
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
  displayContent(){
    const boxdiv = find('#box-div');

    for(let i in this.base.voucher.game){
      boxdiv.addChild(app.template.boxItem(app.base.voucher.game[i]));
    }
  },
  init(){
	  this.setMoremenu();
    this.scrollTheImg();
    this.displayContent();
  }
}

app.init();