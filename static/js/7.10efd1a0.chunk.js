(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{1214:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),l=n(20),i=n(39);t.a=function(e){var t=Object(i.a)().border;return r.a.createElement(c.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1215:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(20),l=n(39),i=n(162),o=n(108),s=n(85);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(o.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:c.g.small}},r.a.createElement(s.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:c.d?24:18,paddingBottom:c.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(i.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:c.g.tiny}}))}},1216:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(37),l=n(52),i=n(4),o=n(50),s=n(164),u=n(20),m=n(245),d=n(8),f=n.n(d),g=n(10),b=function(e){return r.a.createElement(i.a,f()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===g.a.OS?u.g.large:u.g.normal},e.style]}))},p=n(108),h=n(100),y=n(49),v=n(39),w=function(e){var t=Object(a.useContext)(y.a).darkMode,n=Object(v.a)(),c=n.background,l=n.textLight;return r.a.createElement(h.d,f()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:c,borderWidth:1,borderColor:t?"white":l}}))},x=function(){var e=Object(a.useContext)(y.a).darkMode,t=Object(v.a)(),n=t.background,c=t.textLight,l=Object(m.a)("http://twitter.com/BTCST2020","","_blank"),i=Object(m.a)("https://github.com/Standard-Hashrate-Group","","_blank"),o=Object(m.a)("https://btcst.medium.com/","","_blank"),s=Object(m.a)("https://t.me/BTCSTCommunity","","_blank"),u=Object(m.a)("https://discord.com/channels/791170396316893255/791170396765945886","","_blank");return r.a.createElement(p.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(w,{type:"github-alt",onPress:i}),r.a.createElement(w,{type:"twitter",onPress:l}),r.a.createElement(w,{type:"medium",onPress:o}),r.a.createElement(w,{type:"telegram",onPress:s}),r.a.createElement(h.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":c},onPress:u}))},E=n(85),O={us:n(423),uk:n(424),cn:n(425),kr:n(426)},j=function(e){var t=e.name,n=e.locale,a=Object(o.g)(),i=Object(o.h)();return r.a.createElement(l.a,{onPress:function(){a.push(i.pathname+"?locale="+n)},style:{marginHorizontal:4}},r.a.createElement(c.a,{source:O[t],style:{width:30,height:20}}))};t.a=function(){var e=Object(m.a)("https://certik.foundation/","","_blank");return r.a.createElement(b,{noTopMargin:!0},r.a.createElement(i.a,{style:{width:"100%",padding:u.g.normal,alignItems:"center"}},r.a.createElement(l.a,{onPress:e},r.a.createElement(c.a,{source:n(714),style:{width:168,height:40,marginTop:u.g.tiny}})),r.a.createElement(x,null),r.a.createElement(E.a,{note:!0,style:{marginTop:u.g.tiny}},"Built with \u2764\ufe0f by Standard Hashrate (v",s.a.manifest.version,")"),r.a.createElement(p.a,{style:{marginTop:u.g.small}},r.a.createElement(j,{name:"uk",locale:"en"}),r.a.createElement(j,{name:"cn",locale:"zh"}))))}},1217:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"g",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"k",(function(){return w})),n.d(t,"i",(function(){return x}));var a=n(7),r=n.n(a),c=n(0),l=n(163),i=n(429),o=n(211),s=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.f)("IMiningFarm",l.c,e),a.next=3,r.a.awrap(t.viewAllTimeTotalMined());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},u=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.f)("IBEP20",l.b,e),a.next=3,r.a.awrap(t.balanceOf(l.c));case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},m=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.f)("IBEP20",l.b,e),a.next=3,r.a.awrap(t.totalSupply());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.f)("ISTokenERC20",l.b,e),a.next=3,r.a.awrap(t.getTotalRemainingSupplyLocked());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},f=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(o.f)("ISTokenERC20",l.b,t),c.next=3,r.a.awrap(n.getFreeToTransferAmount(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},g=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),c.next=3,r.a.awrap(n.viewUserInfo(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},b=function(){return{enter:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiDepositToMining(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=s.sent,s.abrupt("return",Object(i.a)(c,"stakeActions.enter()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[]),leave:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=s.sent,s.abrupt("return",Object(i.a)(c,"stakeActions.leave()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[])}},p=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),c.next=3,r.a.awrap(n.viewTotalClaimedRewardFrom(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},h=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),c.next=3,r.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},y=function(e,t,n,a){var c,s,u;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return c=Object(o.f)("IMiningFarm",l.c,a),m.next=3,r.a.awrap(c.estimateGas.apiClaimAmountOfReward(e,t,n));case 3:return s=m.sent,m.next=6,r.a.awrap(c.apiClaimAmountOfReward(e,t,n,{gasLimit:s.mul(120).div(100)}));case 6:return u=m.sent,m.abrupt("return",Object(i.a)(u,"farmActions.apiClaimAmountOfReward()",t.toString()));case 8:case"end":return m.stop()}}),null,null,null,Promise)},v=function(){var e,t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,r.a.awrap(fetch("https://584xqc7ik2.execute-api.us-east-2.amazonaws.com/beta/bp-relay"));case 2:return e=c.sent,c.next=5,r.a.awrap(e.json());case 5:if(0==(t=c.sent).code){c.next=8;break}return c.abrupt("return",{code:t.code,msg:t.msg});case 8:return n=t.data.dayList,a=t.data.hourList,c.abrupt("return",{code:0,dayList:n,hourList:a});case 11:case"end":return c.stop()}}),null,null,null,Promise)},w=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(o.f)("IMiningFarm",l.c,t),c.next=3,r.a.awrap(n.viewRoundSlot(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},x=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.f)("IMiningFarm",l.c,e),console.log(t),a.next=4,r.a.awrap(Promise.all(["_farmStartedTime","_miniStakePeriodInSeconds","_farmDescription"].map((function(e){try{return t.callStatic[e]()}catch(n){return console.log(n),""}}))));case 4:return n=a.sent,a.abrupt("return",{started:n[0],stakePeriod:n[1],desc:n[2]});case 6:case"end":return a.stop()}}),null,null,null,Promise)}},1224:function(e,t){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},1233:function(e,t,n){"use strict";n.r(t);var a=n(1224),r=n.n(a),c=n(0),l=n.n(c),i=n(247),o=n(10),s=n(52),u=n(4),m=n(100),d=n(61),f=n(428),g=n(1214),b=n(420),p=n(421),h=n(108),y=n(1215),v=n(431),w=n(85),x=n(143),E=n(1216),O=n(20),j=n(75),k=n(39),S=n(7),T=n.n(S),P=n(19),I=n.n(P),C=n(246),M=n.n(C),B=n(1217),L=n(211),W=n(163),A=function(){var e=Object(c.useContext)(j.a),t=e.provider,n=e.signer,a=e.address,r=Object(c.useState)(),l=I()(r,2),i=l[0],o=l[1],s=Object(c.useState)(!0),u=I()(s,2),m=u[0],d=u[1],f=Object(c.useState)(),g=I()(f,2),b=g[0],p=g[1],h=Object(c.useState)(!0),y=I()(h,2),v=y[0],w=y[1],x=Object(c.useState)(),E=I()(x,2),O=E[0],k=E[1],S=Object(c.useState)(!0),P=I()(S,2),C=P[0],A=P[1],z=Object(c.useState)(),F=I()(z,2),R=F[0],N=F[1],_=Object(c.useState)(!0),H=I()(_,2),K=H[0],G=H[1];return Object(c.useEffect)((function(){o(void 0),d(!0),p(void 0),w(!0),k(void 0),A(!0),G(!0)}),[a]),M()((function(){var e;return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return d(!0),a.next=4,T.a.awrap(Object(B.d)(t));case 4:return e=a.sent,a.prev=5,a.t0=o,a.next=9,T.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,d(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),M()((function(){var e;return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=12;break}return w(!0),a.prev=2,e=Object(L.f)("ERC20",W.a,n),a.t0=p,a.next=7,T.a.awrap(e.balanceOf(W.c));case 7:a.t1=a.sent,(0,a.t0)(a.t1);case 9:return a.prev=9,w(!1),a.finish(9);case 12:case"end":return a.stop()}}),null,null,[[2,,9,12]],Promise)}),[t,n]),M()((function(){var e;return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=28;break}return A(!0),G(!0),a.t0=T.a,a.t1=B.m,a.next=7,T.a.awrap(n.getAddress());case 7:return a.t2=a.sent,a.t3=t,a.t4=(0,a.t1)(a.t2,a.t3),a.next=12,a.t0.awrap.call(a.t0,a.t4);case 12:return e=a.sent,a.prev=13,a.t5=k,a.next=17,T.a.awrap(e);case 17:return a.t6=a.sent.amount,(0,a.t5)(a.t6),a.t7=N,a.next=22,T.a.awrap(e);case 22:a.t8=a.sent,(0,a.t7)(a.t8);case 24:return a.prev=24,A(!1),G(!1),a.finish(24);case 28:case"end":return a.stop()}}),null,null,[[13,,24,28]],Promise)}),[t,n]),{totalMinedBTC:i,loadingTotalMined:m,btcInpool:b,loadingBTCInpool:v,yourMiningPower:O,loadingYourMiningPower:C,userInfo:R,loadingUserInfo:K}},z=n(245),F=n(51),R=n(427),N=n(430),_=function(e){var t=e.state;return l.a.createElement(u.a,{style:{marginTop:O.d?O.g.large:O.g.normal}},l.a.createElement(H,{state:t}),l.a.createElement(g.a,null),l.a.createElement(u.a,{style:{height:O.g.large}}),l.a.createElement(K,{state:t}),l.a.createElement(u.a,{style:{height:O.g.large}}),l.a.createElement(G,{state:t}))},H=function(e){var t=e.state,n=Object(F.a)(),a=Object(c.useContext)(j.a);r()(a);var i=t.btcInpool,o=t.loadingBTCInpool;return l.a.createElement(u.a,null,l.a.createElement(y.a,{text:n("total-btc-still-in-pool")}),l.a.createElement(x.a,{text:o||void 0==i?n("fetching"):Object(L.c)(i,18,8),fontWeight:"light",disabled:o,style:{fontSize:O.d?32:24}}))},K=function(e){var t,n=e.state,a=Object(F.a)(),r=Object(z.a)("/staking","Stake");return l.a.createElement(u.a,null,l.a.createElement(y.a,{text:a("your-mining-power"),buttonText:a("stake"),onPressButton:r}),l.a.createElement(D,{loading:n.loadingYourMiningPower,number:null==(t=n.yourMiningPower)?void 0:t.div(d.ethers.BigNumber.from(10)),suffix:"TH/s"}))},G=function(e){var t,n=e.state,a=Object(F.a)();return l.a.createElement(u.a,null,l.a.createElement(y.a,{text:a("your-staking-records")}),l.a.createElement(U,{loading:n.loadingUserInfo,records:null==(t=n.userInfo)?void 0:t.stakeInfo,recordItem:V}))},D=function(e){var t=e.suffix?e.suffix:"";return e.loading||void 0==e.number?l.a.createElement(v.a,null):l.a.createElement(x.a,{text:Object(L.c)(e.number)+""+t,fontWeight:"light",disabled:e.loading,style:{fontSize:O.d?32:24}})},U=function(e){var t=Object(F.a)(),n=Object(c.useCallback)((function(t){var n=t.item;return l.a.createElement(e.recordItem,{key:n.timeKey,record:n})}),[]),a=Object(c.useMemo)((function(){return(e.records||[]).filter((function(e){return e.amount.sub(e.withdrawed).gt(d.ethers.BigNumber.from(0))||e.lockedAmount.sub(e.lockedWithdrawed).gt(d.ethers.BigNumber.from(0))})).sort((function(e,t){return(t.timeKey.toNumber()||0)-(e.timeKey.toNumber()||0)}))}),[e.records]);return e.loading?l.a.createElement(v.a,null):0===a.length?l.a.createElement(J,null):l.a.createElement(u.a,null,l.a.createElement(h.a,{style:{alignItems:"center",paddingHorizontal:O.g.tiny,paddingVertical:4}},l.a.createElement(u.a,{style:{flex:1,alignItems:"flex-start"}},l.a.createElement(w.a,{caption:!0,numberOfLines:1,fontWeight:"light"},"BTCST")),l.a.createElement(u.a,null,l.a.createElement(w.a,{caption:!0,numberOfLines:1,style:{marginLeft:O.g.small}},t("locked"))),l.a.createElement(u.a,{style:{flex:1,alignItems:"flex-end"}},l.a.createElement(w.a,{caption:!0,fontWeight:"light"},t("date"))),l.a.createElement(Y,{path:"/all"})),l.a.createElement(i.a,{keyExtractor:function(e){return e.timeKey.toString()},data:a,renderItem:n,ItemSeparatorComponent:function(){return l.a.createElement(g.a,{small:!0})}}))},J=function(){var e=Object(F.a)();return l.a.createElement(u.a,{style:{margin:O.g.normal}},l.a.createElement(w.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("empty-staking-records")))},V=function(e){var t=e.record,n=t.amount.sub(t.withdrawed),a=t.lockedAmount.sub(t.lockedWithdrawed);return l.a.createElement(h.a,{style:{alignItems:"center",paddingHorizontal:O.g.tiny,paddingVertical:4}},l.a.createElement(u.a,{style:{flex:1,alignItems:"flex-start"}},l.a.createElement(w.a,{caption:!0,numberOfLines:1,fontWeight:"light",disabled:e.disabled},n.gt(d.BigNumber.from(0))?Object(L.c)(n||0):"N/A")),l.a.createElement(u.a,null,l.a.createElement(w.a,{caption:!0,numberOfLines:1,style:{marginLeft:O.g.small},disabled:e.disabled},a.gt(d.BigNumber.from(0))?Object(L.c)(a||0):"N/A")),l.a.createElement(u.a,{style:{flex:1,alignItems:"flex-end"}},l.a.createElement(w.a,{caption:!0,fontWeight:"light",disabled:e.disabled},Object(L.d)(t.timeKey))),l.a.createElement(Y,{path:"/slot/"+t.timeKey}))},Y=function(e){var t=e.path,n=Object(k.a)(),a=n.textDark,r=n.disabled,c=t.endsWith(d.ethers.constants.AddressZero);return l.a.createElement(s.a,{onPress:function(){return window.open("https://get.1-b.tc/#/history"+t.toLowerCase())},disabled:c},l.a.createElement(m.b,{type:"evilicon",name:"external-link",color:c?r:a,style:{marginLeft:O.g.tiny}}))};t.default=function(){var e=Object(F.a)(),t=A(),n=Object(c.useContext)(j.a);r()(n);var a=t.loadingTotalMined,i=t.totalMinedBTC;return l.a.createElement(R.a,null,l.a.createElement(b.a,null,l.a.createElement(f.a,null),l.a.createElement(p.a,{style:{paddingBottom:O.g.huge}},l.a.createElement(x.a,{text:e("total-mined"),style:{flex:1,fontSize:28}}),l.a.createElement(x.a,{text:a||void 0==i?e("fetching"):Object(L.c)(i,18,8),fontWeight:"light",disabled:a,style:{fontSize:O.d?32:24}}),l.a.createElement(_,{state:t})),"web"===o.a.OS&&l.a.createElement(E.a,null)),l.a.createElement(N.a,null))}}}]);
//# sourceMappingURL=7.10efd1a0.chunk.js.map