(this.webpackJsonpslothopian=this.webpackJsonpslothopian||[]).push([[0],{212:function(t,e,n){},226:function(t,e,n){},239:function(t,e){},241:function(t,e){},245:function(t,e){},246:function(t,e){},273:function(t,e){},275:function(t,e){},285:function(t,e){},287:function(t,e){},297:function(t,e){},299:function(t,e){},316:function(t,e){},350:function(t,e){},351:function(t,e){},420:function(t,e){},422:function(t,e){},427:function(t,e){},429:function(t,e){},436:function(t,e){},448:function(t,e){},451:function(t,e){},456:function(t,e){},530:function(t,e,n){},534:function(t,e,n){"use strict";n.r(e);var a=n(16),s=n.n(a),i=n(214),r=n.n(i),o=(n(226),n(7)),u=n.n(o),c=n(17),p=n(4),l=n(6),d=n(11),m=n(10),h=n(67),b=n.n(h),y=n(23),f=n.n(y),x=(n(212),n(530),n(1)),v=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){return Object(p.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:[Object(x.jsx)("h1",{className:"border-b border-gray-300 text-2xl py-5",children:"Mint your Luv Pugs!"}),Object(x.jsx)("h3",{className:"mt-10 text-center lusi",children:"Luv Pugs NFT"}),Object(x.jsx)("p",{className:"mt-10 text-center lusi text-gray-500",children:"Copyright \xa9 2021 Luv Pugs NFT - All Rights Reserved."})]})}}]),n}(s.a.Component),w=n(217),g=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){return Object(p.a)(this,n),e.call(this,t)}return Object(l.a)(n,[{key:"getShortAccountId",value:function(){var t=""+(this.props.prop.account?this.props.prop.account:"");return t.slice(0,8)+"....."+t.slice(t.length-3,t.length)}},{key:"render",value:function(){var t=this;return Object(x.jsx)(w.Parallax,{blur:0,bgImage:"images/banner.png",bgImageAlt:"the cat",strength:400,children:Object(x.jsxs)("div",{className:"banner",children:[Object(x.jsxs)("div",{className:"flex max-w-7xl pt-6 mx-auto justify-between",children:[Object(x.jsx)("h1",{className:"text-center text-2xl font-thin text-white py-4",children:"Luv Pugs"}),this.props.prop.isEnabled?Object(x.jsxs)("button",{type:"button",className:"inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[this.getShortAccountId(),"          "]}):Object(x.jsx)("button",{type:"button",className:"inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){t.props.connect()},children:"Connect          "})]}),Object(x.jsx)("h1",{className:"text-center max-w-lg mx-auto text-7xl text-white mt-32 border-b pb-4 border-white",children:"LuvPugs"}),Object(x.jsx)("p",{className:"text-center text-white mt-4 lusi pb-44 text-xl",children:"Mint Now"})]})})}}]),n}(s.a.Component),j=n(218);function k(){return Object(x.jsxs)("div",{className:"countdown py-10",children:[Object(x.jsx)("h1",{className:"text-center text-5xl text-white py-10",children:"Mint!"}),Object(x.jsx)(j.a,{date:16344972e5,renderer:T})]})}var T=function(t){var e=t.days,n=t.hours,a=t.minutes,s=t.seconds,i=t.completed,r=(""+e).split(""),o=(""+n).split(""),u=(""+a).split(""),c=(""+s).split("");return i?"":Object(x.jsx)("div",{className:"max-w-md mx-auto lusi",children:Object(x.jsxs)("div",{className:"flex space-x-3",children:[Object(x.jsxs)("div",{children:[r.map((function(t){return Object(x.jsx)("span",{className:"text-3xl ml-2 px-4 bg-white text-black",children:t})})),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-center",children:"Days"})]}),Object(x.jsxs)("div",{children:[o.map((function(t){return Object(x.jsx)("span",{className:"text-3xl ml-2 px-4 bg-white text-black",children:t})})),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-center",children:"Hours"})]}),Object(x.jsxs)("div",{children:[u.map((function(t){return Object(x.jsx)("span",{className:"text-3xl ml-2 px-4 bg-white text-black",children:t})})),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-center",children:"Minutes"})]}),Object(x.jsxs)("div",{children:[c.map((function(t){return Object(x.jsx)("span",{className:"text-3xl ml-2 px-4 bg-white text-black",children:t})})),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"text-center",children:"Seconds"})]})]})})},O=n(219),N=.015,M=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={mintAmount:1,totalTokenAmountFTM:.015,currentFTMBal:"-",mintedTokensCount:0,remainingCount:0,totalCount:0,mintedPerc:0,isSaleActive:!1,mintStatus:"start",isDateActive:!1,mintedList:[],mintedNFT:[],nftSearchAccount:""},f.a.options={hideDuration:300,timeOut:3e3},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.prop.isEnabled&&(this.loadData(),this.isSaleActive()),this.checkTime()}},{key:"checkTime",value:function(){var t=this;setInterval((function(){var e=!1,n=new Date,a=new Date("2021-10-17");n.getTime()>=a.getTime()&&(e=!0),t.setState({isDateActive:e})}),1e3)}},{key:"getMintedNFT",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.prop.isDefaultEnabled){t.next=3;break}return this.toastr.error("Unable to find connection. Please try again."),t.abrupt("return");case 3:return t.next=5,this.setState({mintedList:[],mintedNFT:[]});case 5:return t.next=7,this.props.prop.web3InfuraInstance.methods.balanceOf(this.state.nftSearchAccount).call();case 7:(e=t.sent)>0&&(n=[],this.getList(n,e,0));case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getList",value:function(){var t=Object(c.a)(u.a.mark((function t(e,n,a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a<=n-1)){t.next=8;break}return t.next=3,this.props.prop.web3InfuraInstance.methods.tokenOfOwnerByIndex(this.state.nftSearchAccount,a).call();case 3:s=t.sent,e.push(s),this.getList(e,n,a+1),t.next=9;break;case 8:a>n-1&&(this.setState({mintedList:e}),e&&e.length>0&&this.getObj([],0,e.length,e));case 9:case"end":return t.stop()}}),t,this)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"getObj",value:function(){var t=Object(c.a)(u.a.mark((function t(e,n,a,s){var i,r=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n<=a-1)){t.next=7;break}return t.next=3,this.props.prop.web3InfuraInstance.methods.tokenURI(s[n]).call();case 3:i=t.sent,fetch(i).then((function(t){return t.json()})).then((function(t){var i,o=Object(O.a)(null===t||void 0===t?void 0:t.attributes);try{for(o.s();!(i=o.n()).done;){var u=i.value;t[u.trait_type]=u.value}}catch(c){o.e(c)}finally{o.f()}t.id=s[n],e.push(t),r.getObj(e,n+1,a,s)}),(function(t){r.getObj(e,n,a,s)})),t.next=8;break;case 7:n>a-1&&this.setState({mintedNFT:e});case 8:case"end":return t.stop()}}),t,this)})));return function(e,n,a,s){return t.apply(this,arguments)}}()},{key:"loadData",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.callsABI();case 2:setTimeout((function(){e.props.prop.isEnabled&&e.loadData()}),5e3);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"callsABI",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.loadUserFTMBalance(),this.mintedTokens(),this.totalTokenToBeMinted(),this.tokenRemainingToBeMinted()}catch(e){console.error(e)}case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadUserFTMBalance",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.props.prop.web3.eth.getBalance(this.props.prop.account);case 3:e=t.sent,this.setState({currentFTMBal:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"isSaleActive",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.props.prop.mintWeb3Inst.methods.isSaleActive().call();case 3:e=t.sent,this.setState({isSaleActive:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"mintedTokens",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.props.prop.mintWeb3Inst.methods.mintedTokens().call();case 3:return e=t.sent,t.next=6,this.setState({mintedTokensCount:e});case 6:this.calcMintedPerc(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"totalTokenToBeMinted",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.props.prop.mintWeb3Inst.methods.TOTAL_TOKEN_TO_MINT().call();case 3:return e=t.sent,t.next=6,this.setState({totalCount:e});case 6:this.calcMintedPerc(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"tokenRemainingToBeMinted",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.props.prop.mintWeb3Inst.methods.tokenRemainingToBeMinted().call();case 3:return e=t.sent,t.next=6,this.setState({remainingCount:e});case 6:this.calcMintedPerc(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"calcMintedPerc",value:function(){if(this.state.totalCount>0&&this.state.mintedTokensCount>=0){var t=100*Number(this.state.mintedTokensCount)/Number(this.state.totalCount);this.setState({mintedPerc:t})}}},{key:"setMaxAmount",value:function(){this.setState({mintAmount:20,totalTokenAmountFTM:.3})}},{key:"onPlusAmount",value:function(){this.state.mintAmount&&this.state.mintAmount<20&&this.setState({mintAmount:this.state.mintAmount+1,totalTokenAmountFTM:N*(this.state.mintAmount+1)})}},{key:"onMinusAmount",value:function(){this.state.mintAmount&&this.state.mintAmount>1&&this.setState({mintAmount:this.state.mintAmount-1,totalTokenAmountFTM:N*(this.state.mintAmount-1)})}},{key:"mintSubmit",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!this.props.prop.isEnabled||this.props.prop.isConnecting){t.next=30;break}if(!(Number(this.state.mintAmount)<=0||Number(this.state.mintAmount)>20)){t.next=5;break}return f.a.error("Please select from 1-20 range."),t.abrupt("return");case 5:return t.next=7,this.setState({mintStatus:"inProgress"});case 7:if(e=this.props.prop.web3.utils.BN,n=new e("50000000000000000000"),a=new e(this.state.mintAmount).mul(n),!(Number(this.getFormatFrom(a))>=Number(this.state.currentFTMBal))){t.next=15;break}return t.next=13,this.setState({mintStatus:"start"});case 13:return f.a.error("Insufficient FTM balance."),t.abrupt("return");case 15:if(!(Number(this.state.remainingCount)<Number(this.state.mintAmount))){t.next=20;break}return t.next=18,this.setState({mintStatus:"start"});case 18:return f.a.error("Insufficient Token available to mint."),t.abrupt("return");case 20:if(!this.state.isSaleActive){t.next=25;break}return t.next=23,this.props.prop.mintWeb3Inst.methods.mintToken(Number(this.state.mintAmount)).send({from:this.props.prop.account,value:a}).then(function(){var t=Object(c.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.setState({mintStatus:"start"});case 2:s.tokenRemainingToBeMinted(),f.a.success("Your Token have been minted.");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.setState({mintStatus:"start"});case 2:f.a.error("Mint Failed");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 23:t.next=28;break;case 25:return t.next=27,this.setState({mintStatus:"start"});case 27:f.a.error("Sale not active!");case 28:t.next=31;break;case 30:f.a.info("Please connect you'r wallet.");case 31:t.next=36;break;case 33:t.prev=33,t.t0=t.catch(0),f.a.error("Mint Failed due to some error.");case 36:case"end":return t.stop()}}),t,this,[[0,33]])})));return function(){return t.apply(this,arguments)}}()},{key:"getFormatTo",value:function(t){return this.props.prop.web3.utils.toWei(t.toString(),"ether")}},{key:"getFormatFrom",value:function(t){return this.props.prop.web3.utils.fromWei(t.toString(),"ether")}},{key:"getFormatedNumber",value:function(t,e,n){return 0==t?0:this.getDecimals((t/e).toFixed(n))}},{key:"getDecimals",value:function(t){return t.endsWith(".000000")?Number(t.replace(".000000","")):t.endsWith(".00000")?Number(t.replace(".00000","")):t.endsWith(".0000")?Number(t.replace(".0000","")):t.endsWith(".000")?Number(t.replace(".000","")):t.endsWith(".00")?Number(t.replace(".00","")):t.endsWith(".0")?Number(t.replace(".0","")):Number(t)}},{key:"componentWillUnmount",value:function(){}},{key:"isAnyTransactionInProgress",value:function(){return"inprogress"==this.state.mintStatus}},{key:"getNFTsImgs",value:function(){return this.state.mintedNFT&&this.state.mintedNFT.length>0?this.state.mintedNFT.map((function(t,e){return Object(x.jsx)("div",{className:"col-md-2",children:Object(x.jsx)("a",{children:Object(x.jsx)("img",{className:"mb-4",style:{width:"100%"},src:t.image,alt:""},e)})})})):void 0}},{key:"handleAddressChange",value:function(t){this.setState({nftSearchAccount:t.target.value})}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"mint lusi",children:[Object(x.jsxs)("div",{className:"max-w-md py-20 text-center mx-auto  ",children:[Object(x.jsx)("h1",{className:"text-5xl font-bold",children:"MINT"}),Object(x.jsxs)("div",{className:"mt-8",children:[Object(x.jsx)("button",{className:"text-7xl font-bold cursor-pointer mr-4",onClick:function(){t.onMinusAmount()},children:"-"}),Object(x.jsx)("button",{className:"text-8xl font-bold",style:{width:"100px",cursor:"auto"},children:this.state.mintAmount}),Object(x.jsx)("button",{className:"text-7xl font-bold cursor-pointer ml-4",onClick:function(){t.onPlusAmount()},children:"+"})]}),Object(x.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-l font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return t.setMaxAmount()},children:"Max"}),Object(x.jsx)("h1",{className:"text-4xl mt-8 font-bold",children:"SLOTHTOPIA"}),Object(x.jsx)("h3",{className:"text-2xl mt-4 font-bold",children:"Max 20 mints"}),Object(x.jsx)("br",{}),this.props.prop.isEnabled?Object(x.jsx)("button",{disabled:!(this.props.prop.isEnabled&&"start"==this.state.mintStatus),type:"button",className:"mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return t.mintSubmit()},children:"Mint"}):Object(x.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Lets Go"})]}),this.isAnyTransactionInProgress()?Object(x.jsx)("div",{id:"toast-container",className:"toast-top-right",children:Object(x.jsx)("div",{className:"toast toast-info","aria-live":"assertive",children:Object(x.jsx)("div",{className:"toast-message",children:"Transaction is in progress."})})}):""]}),Object(x.jsx)("div",{className:"mint lusi",style:{backgroundImage:"none",paddingBottom:"50px"},children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-md-12",style:{textAlign:"-webkit-center"},children:Object(x.jsxs)("div",{class:"flex max-w-3xl pr-3 bg-sky bg-opacity-20 items-center flex-1 w-full",children:[Object(x.jsx)("input",{placeholder:"ENTER YOUR WALLET ADDRESS TO SEE YOUR LUVPUGS",class:"w-full  placeholder-white h-9 outline-none bg-sky w-full bg-opacity-0 px-2",value:this.state.nftSearchAccount,onChange:function(e){return t.handleAddressChange(e)}}),Object(x.jsx)("span",{class:"font-bold cursor-pointer text-3xl",onClick:function(){t.getMintedNFT()},children:">"})]})})}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"row",children:this.getNFTsImgs()})]})})]})}}]),n}(s.a.Component),S="0xa5D8D022bEa0f8834c8956d7B9c6C1E0207cf132",A=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_initBaseURI",type:"string"},{internalType:"string",name:"_initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],I=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={web3:null,networkType:null,chainId:null,account:null,isEnabled:!1,isConnecting:!1,LIST_ADDRESS_MINT:null,mintWeb3Inst:null,canShow:!0,web3InfuraInstance:null,isDefaultEnabled:!1},f.a.options={hideDuration:300,timeOut:3e3},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.connectToDefaultWallet()}},{key:"connectToDefaultWallet",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=new b.a(new b.a.providers.HttpProvider("https://rpc.ftm.tools/")),n=new e.eth.Contract(A,S),t.next=5,this.setState({web3InfuraInstance:n,isDefaultEnabled:!0});case 5:this.changesReflactor(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"connectToMetaMaskNetwork",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.isConnecting){t.next=2;break}return t.abrupt("return");case 2:if(this.setState({isConnecting:!0}),t.prev=3,!window.ethereum){t.next=23;break}return t.next=7,window.ethereum.enable().then((function(t,e){}));case 7:return this.state.web3=new b.a(window.ethereum),window.ethereum.on("networkChanged",(function(t){e.setConfig()})),window.ethereum.on("chainChanged",(function(t){e.setConfig()})),window.ethereum.on("accountsChanged",(function(t){document.location.reload()})),window.ethereum.on("disconnect",(function(t){document.location.reload()})),t.prev=12,t.next=15,this.setConfig();case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(12),t.next=21,this.setState({isEnabled:!1});case 21:t.next=44;break;case 23:if(!window.web3||!window.web3.currentProvider){t.next=41;break}return window.web3.on("networkChanged",(function(t){e.setConfig()})),window.web3.on("chainChanged",(function(t){e.setConfig()})),window.web3.on("accountsChanged",(function(t){document.location.reload()})),window.web3.on("disconnect",(function(t){document.location.reload()})),this.state.web3=new b.a(window.web3.currentProvider),t.prev=29,t.next=32,this.setConfig();case 32:t.next=39;break;case 34:return t.prev=34,t.t1=t.catch(29),t.next=38,this.setState({isEnabled:!1,isConnecting:!1});case 38:this.changesReflactor();case 39:t.next=44;break;case 41:return t.next=43,this.setState({isEnabled:!1,isConnecting:!1});case 43:this.changesReflactor();case 44:t.next=51;break;case 46:return t.prev=46,t.t2=t.catch(3),t.next=50,this.setState({isEnabled:!1,isConnecting:!1});case 50:this.changesReflactor();case 51:case"end":return t.stop()}}),t,this,[[3,46],[12,17],[29,34]])})));return function(){return t.apply(this,arguments)}}()},{key:"setConfig",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.state.web3.eth.net.getNetworkType();case 2:return e=t.sent,t.next=5,this.state.web3.eth.getChainId();case 5:return n=t.sent,t.next=8,this.state.web3.eth.getAccounts();case 8:a=t.sent,this.state.web3.eth.defaultAccount=a[0],this.configNetwork(e,n,a[0]);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"configNetwork",value:function(){var t=Object(c.a)(u.a.mark((function t(e,n,a){var s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(250==n||4002==n){t.next=8;break}return f.a.info("Wrong network choosen."),t.next=4,this.setState({isEnabled:!1,isConnecting:!1});case 4:return this.changesReflactor(),t.abrupt("return");case 8:if(250!=n&&4002!=n){t.next=17;break}return s=null,250==n?s=S:4002==n&&(s="0x906Aa5179E5F914972DaA3Db8c867432de73a8Ab"),i=new this.state.web3.eth.Contract(A,s),t.next=14,this.setState({isEnabled:!0,isConnecting:!1,networkType:e,chainId:n,account:a,LIST_ADDRESS_MINT:s,mintWeb3Inst:i});case 14:this.changesReflactor(),t.next=17;break;case 17:case"end":return t.stop()}}),t,this)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"changesReflactor",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({canShow:!1});case 2:return t.next=4,this.setState({canShow:!0});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return this.state.canShow?Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)(g,{prop:this.state,connect:function(){t.connectToMetaMaskNetwork()}}),Object(x.jsx)(k,{}),Object(x.jsx)(M,{prop:this.state}),Object(x.jsx)(v,{})]}):""}}]),n}(s.a.Component),C=I;r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[534,1,2]]]);
//# sourceMappingURL=main.c28388bc.chunk.js.map