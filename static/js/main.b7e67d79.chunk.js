(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports={contractName:"CryptoBeauty",abi:[{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"cards",outputs:[{name:"photoId",type:"uint256"},{name:"rarityScore",type:"uint256"},{name:"holder",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ownerWalletAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"playerLastFreeDrawTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"photos",outputs:[{name:"modelId",type:"uint256"},{name:"photographerId",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"drawCardPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"playerDrawnCardIds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"freeDrawTimeGap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_drawCardPrice",type:"uint256"},{name:"_ownerWalletAddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"photoPoolId",type:"uint256"}],name:"PoolAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"photoId",type:"uint256"},{indexed:!0,name:"modelId",type:"uint256"},{indexed:!0,name:"photographerId",type:"uint256"}],name:"PhotoAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"photoId",type:"uint256"},{indexed:!1,name:"rarityScore",type:"uint256"},{indexed:!0,name:"to",type:"address"}],name:"CardDrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setDrawCardPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_gap",type:"uint256"}],name:"setFreeDrawTimeGap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_modelId",type:"uint256"},{name:"_photographerId",type:"uint256"}],name:"addPhoto",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_modelIds",type:"uint256[]"},{name:"_photographerIds",type:"uint256[]"}],name:"addPhotos",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_photoIds",type:"uint256[]"}],name:"addPhotoPool",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_photoPoolId",type:"uint256"}],name:"freeDrawCard",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_photoPoolId",type:"uint256"}],name:"drawCard",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_photoPoolId",type:"uint256"},{name:"_amount",type:"uint256"}],name:"drawMultipleCards",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_photoPoolIds",type:"uint256[]"}],name:"drawMultipleCardsFromMultiplePools",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_cardId",type:"uint256"},{name:"_to",type:"address"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getLatestPhotoId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getLatestPhotoPoolId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_photoId",type:"uint256"}],name:"isValidPhotoId",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_photoPoolId",type:"uint256"}],name:"isValidPoolId",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_cardId",type:"uint256"}],name:"isValidCardId",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_user",type:"address"}],name:"drawnCardIdsOf",outputs:[{name:"cardIds",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_user",type:"address"}],name:"drawnCardsOf",outputs:[{name:"cardIds",type:"uint256[]"},{name:"photoIds",type:"uint256[]"},{name:"rarityScores",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"}],compiler:{name:"solc",version:"0.4.23+commit.124ca40d.Emscripten.clang"},networks:{2:{addressBase58:"TAe2rFLpdoVdnPKj3ypyANgGFmFFsCktMc",addressHex:"",address:"TAe2rFLpdoVdnPKj3ypyANgGFmFFsCktMc"}},updatedAt:"2019-01-03T21:23:43.409Z"}},21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),l=a(40),i=(a(26),a(19)),c=a(2),m=a.n(c),d=a(4),p=a(7),u=a(8),h=a(10),y=a(9),f=a(11),b=a(39),g=a(42),v=a(41),w=a(17),E=a(14);function _(e){return new Promise(function(t){return setTimeout(t,e)})}var N=function(){return new Promise(function(e,t){window.addEventListener("load",Object(d.a)(m.a.mark(function a(){var n;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(100);case 2:window.tronWeb?(n=window.tronWeb,e(n)):t("no tron link");case 3:case"end":return a.stop()}},a,this)})))})},x="img/frames/",j={0:{name:"\u53f2\u65fa\u57fa"}},C={0:{name:"\u5a77\u5a77"},1:{name:"\u601d\u5afa"},2:{name:"\u5c0f\u656c"},3:{name:"\u59a4\u73ca"},4:{name:"\u5e1b\u745c"},5:{name:"\u4f73\u4f73"}},I={0:{model_id:0,photographer_id:0,file_name:"0-0.jpg"},1:{model_id:0,photographer_id:0,file_name:"0-1.jpg"},2:{model_id:0,photographer_id:0,file_name:"0-2.jpg"},3:{model_id:0,photographer_id:0,file_name:"0-3.jpg"},4:{model_id:0,photographer_id:0,file_name:"0-4.jpg"},5:{model_id:1,photographer_id:0,file_name:"1-0.jpg"},6:{model_id:1,photographer_id:0,file_name:"1-1.jpg"},7:{model_id:1,photographer_id:0,file_name:"1-2.jpg"},8:{model_id:1,photographer_id:0,file_name:"1-3.jpg"},9:{model_id:1,photographer_id:0,file_name:"1-4.jpg"},10:{model_id:2,photographer_id:0,file_name:"2-0.jpg"},11:{model_id:2,photographer_id:0,file_name:"2-1.jpg"},12:{model_id:2,photographer_id:0,file_name:"2-2.jpg"},13:{model_id:2,photographer_id:0,file_name:"2-3.jpg"},14:{model_id:2,photographer_id:0,file_name:"2-4.jpg"},15:{model_id:3,photographer_id:0,file_name:"3-0.jpg"},16:{model_id:3,photographer_id:0,file_name:"3-1.jpg"},17:{model_id:3,photographer_id:0,file_name:"3-2.jpg"},18:{model_id:3,photographer_id:0,file_name:"3-3.jpg"},19:{model_id:3,photographer_id:0,file_name:"3-4.jpg"},20:{model_id:4,photographer_id:0,file_name:"4-0.jpg"},21:{model_id:4,photographer_id:0,file_name:"4-1.jpg"},22:{model_id:4,photographer_id:0,file_name:"4-2.jpg"},23:{model_id:4,photographer_id:0,file_name:"4-3.jpg"},24:{model_id:4,photographer_id:0,file_name:"4-4.jpg"},25:{model_id:5,photographer_id:0,file_name:"5-0.jpg"},26:{model_id:5,photographer_id:0,file_name:"5-1.jpg"},27:{model_id:5,photographer_id:0,file_name:"5-2.jpg"},28:{model_id:5,photographer_id:0,file_name:"5-3.jpg"},29:{model_id:5,photographer_id:0,file_name:"5-4.jpg"}},k={N:{file_name:"01_normal.png"},R:{file_name:"02_rare.png"},SR:{file_name:"03_superrare.png"},SSR:{file_name:"04_ssrare.png"},UR:{file_name:"05_ultrarare.png"}};var M=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.card,t=e.photoId,a=e.rarityScore,n="img/photos/"+I[t].file_name,o=C[I[t].model_id].name,s=j[I[t].photographer_id].name,l=function(e){var t=parseInt(e);return t<=0?"UR":t<=20?"SSR":t<=120?"SR":t<=370?"R":"N"}(a),i=function(e){var t=parseInt(e);return x+k[t<=0?"UR":t<=20?"SSR":t<=120?"SR":t<=370?"R":"N"].file_name}(a);return r.a.createElement("article",{className:"col-md-4 isotopeItem rare"},r.a.createElement("div",{className:"portfolio-item"},r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{className:"card-photo",src:n,alt:""}),r.a.createElement("img",{className:"card-frame",src:i,alt:""})),r.a.createElement("div",{className:"portfolio-desc align-center"},r.a.createElement("div",{className:"folio-info"},r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,"# ",t)),r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,o)),r.a.createElement("h4",{className:"text-white white"},r.a.createElement("a",null,"\u7a00\u6709\u5ea6\uff1a",l)),r.a.createElement("h5",{className:"text-white white"},r.a.createElement("a",null,"\u651d\u5f71\u5e2b\uff1a",s)),r.a.createElement("a",{href:n,className:"fancybox"},r.a.createElement("i",{className:"fa fa-plus fa-2x"}))))))}}]),t}(n.Component),S=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.cards.map(function(e){return r.a.createElement(M,{card:e})});return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"portfolio-items isotopeWrapper clearfix",id:"3"},e)))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(y.a)(t).call(this,e))).secToDHMS=function(e){return e>=0?{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:Math.floor(e%60)}:{d:0,h:0,m:0,s:0}},a.secToTimeStr=function(e){if(e<0)return"Free";var t=a.secToDHMS(e),n=t.d>0?t.d.toString()+" "+a.props.daysStr+" ":"";return n=n+t.h.toString().padStart(2,"0")+":"+t.m.toString().padStart(2,"0")+":"+t.s.toString().padStart(2,"0")},a.state={now:Math.round(Date.now()/1e3)},setInterval(function(){a.setState({now:Math.round(Date.now()/1e3)})},1e3),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.secToTimeStr(this.props.endTime-this.state.now);return r.a.createElement("span",null,e)}}]),t}(n.Component),P=(a(35),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={tronWebState:{installed:!1,loggedIn:!1},tronWeb:null,defaultAddress:null,ContractJSON:E,networkId:"2",abi:[],accounts:null,contract:null,drawCardPrice:5e7,myCards:[{photoId:"0",rarityScore:"0"},{photoId:"7",rarityScore:"5"},{photoId:"14",rarityScore:"50"},{photoId:"21",rarityScore:"200"},{photoId:"28",rarityScore:"800"}],playerLastFreeDrawTime:0,freeDrawTimeGap:82800},a.componentDidMount=Object(d.a)(m.a.mark(function e(){var t,n,r,o,s,l,i,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.networkId,e.next=4,N();case 4:return n=e.sent,r={installed:!!n,loggedIn:!!n&&n.ready},console.log("tronWebState",r),a.setState({tronWeb:n,tronWebState:r}),o=E.abi,s=E.networks[t].address,l="T"===s[0]?n.address.toHex(s):s,console.log("contractAddressHex",l),e.next=14,n.contract().at(l);case 14:if(i=e.sent,console.log("contract",i),a.setState({contract:i,abi:o}),r.loggedIn){e.next=19;break}return e.abrupt("return");case 19:c=n.defaultAddress,console.log("defaultAddress",c),a.setState({defaultAddress:c},function(){a.getLatestPhotoId(),a.getCardPrice(),a.getMyCards(),a.getPlayerLastFreeDrawTime()}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.error(e.t0);case 27:case"end":return e.stop()}},e,this,[[0,24]])})),a.triggerContract=function(){var e=Object(d.a)(m.a.mark(function e(t,a,n){var r,o,s,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=this.state,o=r.abi,s=r.contract,l="send",o.forEach(function(e){e.name===t&&(l=/payable/.test(e.stateMutability)?"send":"call")}),s[t].apply(s,Object(i.a)(a))[l]({feeLimit:this.feeLimit,callValue:this.callValue||0}).then(function(e){e&&n&&n(e)});case 4:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.getLatestPhotoId=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.getLatestPhotoId().call();case 3:n=e.sent,console.log("latestPhotoId",n);case 5:case"end":return e.stop()}},e,this)})),a.getFreeDrawTimeGap=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.freeDrawTimeGap().call();case 3:n=e.sent,console.log("freeDrawTimeGap",n,n.toNumber()),a.setState({freeDrawTimeGap:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.getCardPrice=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.drawCardPrice().call();case 3:n=e.sent,console.log("drawCardPrice",n),a.setState({drawCardPrice:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.getTransferEvents=Object(d.a)(m.a.mark(function e(){var t,n,r,o,s,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.tronWeb,r=t.networkId,o=t.ContractJSON,s=o.networks[r].addressBase58,console.log("getTransferEvents"),e.next=5,n.getEventResult(s,154653014e4,"Transfer");case 5:l=e.sent,console.log("events",l);case 7:case"end":return e.stop()}},e,this)})),a.getCardDrawnEvents=Object(d.a)(m.a.mark(function e(){var t,n,r,o,s,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.tronWeb,r=t.networkId,o=t.ContractJSON,s=o.networks[r].addressBase58,console.log("getCardDrawnEvents"),e.next=5,n.getEventResult(s,154653014e4,"CardDrawn");case 5:l=e.sent,console.log("events",l);case 7:case"end":return e.stop()}},e,this)})),a.getMyCards=Object(d.a)(m.a.mark(function e(){var t,n,r,o,s,l,i,c,d,p,u,h,y,f,b,g;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.tronWeb,r=t.networkId,o=t.ContractJSON,s=t.defaultAddress,l=o.networks[r].addressBase58,console.log("getMyCards"),e.next=5,n.getEventResult(l,154653014e4,"CardDrawn",void 0,200,1);case 5:for(i=e.sent,console.log("CardDrawn events",i),c=[],d="0x"+s.hex.slice(2),p=!0,u=!1,h=void 0,e.prev=12,y=i[Symbol.iterator]();!(p=(f=y.next()).done);p=!0)b=f.value,(g=Object.assign({},b.result)).transaction=b.transaction,g.timestamp=b.timestamp,g.to===d&&c.push(g);e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),u=!0,h=e.t0;case 20:e.prev=20,e.prev=21,p||null==y.return||y.return();case 23:if(e.prev=23,!u){e.next=26;break}throw h;case 26:return e.finish(23);case 27:return e.finish(20);case 28:a.setState({myCards:c});case 29:case"end":return e.stop()}},e,this,[[12,16,20,28],[21,,23,27]])})),a.getPlayerLastFreeDrawTime=Object(d.a)(m.a.mark(function e(){var t,n,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.contract,r=t.defaultAddress,e.next=3,n.playerLastFreeDrawTime(r.hex).call();case 3:o=e.sent,console.log("playerLastFreeDrawTime",o,o.toNumber()),a.setState({playerLastFreeDrawTime:o.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.freeDrawCard=Object(d.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,console.log("freeDrawCard"),e.next=4,t.freeDrawCard(1e7).send({feeLimit:void 0,callValue:0,shouldPollResponse:!0});case 4:n=e.sent,console.log(n),a.getPlayerLastFreeDrawTime(),a.getMyCards(),alert("\u62bd\u5361\u5b8c\u6210\uff0c\u8acb\u9ede\u64ca\u53f3\u4e0a\u89d2 My Girls \u524d\u5f80\u67e5\u770b");case 9:case"end":return e.stop()}},e,this)})),a.drawCard=Object(d.a)(m.a.mark(function e(){var t,n,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.contract,r=t.drawCardPrice,console.log("drawCard"),e.next=4,n.drawCard(0).send({feeLimit:void 0,callValue:r,shouldPollResponse:!0});case 4:o=e.sent,console.log("drawCard result",o),a.getMyCards(),alert("\u62bd\u5361\u5b8c\u6210\uff0c\u8acb\u9ede\u64ca\u53f3\u4e0a\u89d2 My Girls \u524d\u5f80\u67e5\u770b");case 8:case"end":return e.stop()}},e,this)})),a.draw10Cards=Object(d.a)(m.a.mark(function e(){var t,n,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.contract,r=t.drawCardPrice,console.log("draw10Cards"),10,e.next=5,n.drawMultipleCards(0,10).send({feeLimit:void 0,callValue:10*r,shouldPollResponse:!0});case 5:o=e.sent,console.log("drawCard result",o),a.getMyCards(),alert("\u62bd\u5361\u5b8c\u6210\uff0c\u8acb\u9ede\u64ca\u53f3\u4e0a\u89d2 My Girls \u524d\u5f80\u67e5\u770b");case 9:case"end":return e.stop()}},e,this)})),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.playerLastFreeDrawTime+this.state.freeDrawTimeGap,t=Date.now()/1e3>e;return r.a.createElement(w.ParallaxProvider,{init:{smoothScrollingDuration:500,smoothScrolling:!0,forceHeight:!1}},r.a.createElement("div",{className:"App"},r.a.createElement("section",{id:"header",className:"appear"}),r.a.createElement("div",{className:"navbar navbar-fixed-top",role:"navigation","data-0":"line-height:60px; height:60px; background-color:rgba(68,188,221,1);","data-300":"line-height:40px; height:40px; background-color:rgba(68,188,221,0.6);"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},r.a.createElement("span",{className:"fa fa-bars color-white"})),r.a.createElement("h1",null,r.a.createElement(b.a,{to:"/",className:"navbar-brand","data-0":"line-height:60px;","data-300":"line-height:50px;"},"CryptoBeauty"))),r.a.createElement("div",{className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav navbar-nav","data-0":"margin-top:10px;","data-300":"margin-top:5px;"},r.a.createElement("li",null,r.a.createElement(g.a,null,r.a.createElement(v.a,{exact:!0,path:"/asset"},r.a.createElement(b.a,{to:"/"},"Own A Girl")),r.a.createElement(v.a,null,r.a.createElement(b.a,{to:"/asset"},"My Girls")))))))),r.a.createElement(g.a,null,r.a.createElement(v.a,{exact:!0,path:"/asset"},r.a.createElement("div",null,r.a.createElement("section",{id:"section-works",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"Girls in the house")))),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row"},r.a.createElement(S,{cards:this.state.myCards})):r.a.createElement("div",null,r.a.createElement("h2",null,"\u60a8\u8207\u5bc6\u78bc\u5973\u5b69\u7684\u8ddd\u96e2"),r.a.createElement("h2",null,"\u53ea\u5269\u4e0b\u4e00\u500b\u5df2\u89e3\u9396\u7684 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink"))))))),r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("section",{id:"parallax4",className:"section pad-top150 pad-bot150","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"align-center pad-top150 pad-bot150"},r.a.createElement("img",{className:"align-left",style:{width:"400px",left:"60px",top:"35px",position:"absolute"},src:"img/logo/cryptobeautylogo01.png",alt:""}),r.a.createElement("h1",{className:"align-left color-black pad-top20"},"Crypto Beauty ",r.a.createElement("span",{className:"color-2blue"},"\u5bc6\u78bc\u5973\u5b69")),r.a.createElement("h4",{className:"align-left color-black"},r.a.createElement("b",null,"\u4f60\u5c08\u5c6c\u7684\u5340\u584a\u93c8\u5c11\u5973\u5361\u7247\u5275\u4f5c\u4ea4\u6613\u5e73\u53f0"))))),r.a.createElement("section",{id:"section-services",className:"section pad-bot20 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"align-center color-swimsuitblue pad-bot20"},"\u4f60\u7684\u5973\u5b69\uff0c\u4e00\u9375\u64c1\u6709"),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},t?r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.freeDrawCard},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8cbb\u62bd")))):r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"button button-muted"},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8cbb\u62bd")))),r.a.createElement("h4",{className:"color-2blue"},r.a.createElement(O,{endTime:e})))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.drawCard},r.a.createElement("i",{className:"color-white"},"\u55ae\u5f35\u62bd\u5361")))),r.a.createElement("h4",{className:"color-2blue"},"50 TRX"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.draw10Cards},r.a.createElement("i",{className:"color-white"},"\u8d85\u503c\u5361\u5305")))),r.a.createElement("h4",{className:"color-2blue"},"500 TRX"))),r.a.createElement("div",null)):r.a.createElement("div",null,r.a.createElement("h2",null,"\u60a8\u8207\u5bc6\u78bc\u5973\u5b69\u7684\u8ddd\u96e2"),r.a.createElement("h2",null,"\u53ea\u5269\u4e0b\u4e00\u500b\u5df2\u89e3\u9396\u7684 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink"))))),r.a.createElement("section",{id:"testimonials",className:"section","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"testimonial pad-top40 pad-bot40"},r.a.createElement("h1",{className:"color-swimsuitblue"},"\u53d6\u5f97\u7db2\u7d05\u79c1\u5bc6\u7dda\u4e0b\u6d3b\u52d5\u7684\u5c08\u5c6c\u9580\u7968"),r.a.createElement("br",null))))))),r.a.createElement("section",{id:"section-about",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"\u5340\u584a\u93c8 X \u6a21\u7279"),r.a.createElement("p",null,"\u6e05\u7d14\u5236\u670d / \u9650\u91cf\u7248\u578b / \u5340\u584a\u93c8 / \u6578\u4f4d\u52a0\u5bc6 / \u79c1\u6709\u8cc7\u7522 ")))),r.a.createElement("div",{className:"row align-center mar-bot40"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member5.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5a77\u5a77"),r.a.createElement("span",null,"IG:tinaaalee")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member6.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u601d\u5afa")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member7.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5c0f\u656c")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member8.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u59a4\u73ca")))))))))),r.a.createElement("section",{id:"footer",className:"section footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-center copyright"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("p",null,"All rights reserved by CryptoBeauty")))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.b7e67d79.chunk.js.map