(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{1217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(39),s=n(54),u=n(3),i=n(50),l=n(164),o=n(21),d=n(420),f=n(8),m=n.n(f),b=n(10),p=function(e){return r.a.createElement(u.a,m()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===b.a.OS?o.g.large:o.g.normal},e.style]}))},g=n(125),v=n(98),h=n(49),x=n(38),w=function(e){var t=Object(a.useContext)(h.a).darkMode,n=Object(x.a)(),c=n.background,s=n.textLight;return r.a.createElement(v.d,m()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:c,borderWidth:1,borderColor:t?"white":s}}))},E=function(){var e=Object(a.useContext)(h.a).darkMode,t=Object(x.a)(),n=t.background,c=t.textLight,s=Object(d.a)("http://twitter.com/BTCST2020","","_blank"),u=Object(d.a)("https://github.com/Standard-Hashrate-Group","","_blank"),i=Object(d.a)("https://medium.com/@btcst2020","","_blank"),l=Object(d.a)("https://t.me/BTCSTCommunity","","_blank"),o=Object(d.a)("https://discord.com/channels/791170396316893255/791170396765945886","","_blank");return r.a.createElement(g.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(w,{type:"github-alt",onPress:u}),r.a.createElement(w,{type:"twitter",onPress:s}),r.a.createElement(w,{type:"medium",onPress:i}),r.a.createElement(w,{type:"telegram",onPress:l}),r.a.createElement(v.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":c},onPress:o}))},O=n(84),T={us:n(717),uk:n(716),cn:n(714),kr:n(715)},y=function(e){var t=e.name,n=e.locale,a=Object(i.g)(),u=Object(i.h)();return r.a.createElement(s.a,{onPress:function(){a.push(u.pathname+"?locale="+n)},style:{marginHorizontal:4}},r.a.createElement(c.a,{source:T[t],style:{width:30,height:20}}))};t.a=function(){Object(d.a)("https://dashboard.alchemyapi.io/signup","","_blank");return r.a.createElement(p,{noTopMargin:!0},r.a.createElement(u.a,{style:{width:"100%",padding:o.g.normal,alignItems:"center"}},r.a.createElement(E,null),r.a.createElement(O.a,{note:!0,style:{marginTop:o.g.tiny}},"Built with \u2764\ufe0f by Standard Hashrate (v",l.a.manifest.version,")"),r.a.createElement(g.a,{style:{marginTop:o.g.small}},r.a.createElement(y,{name:"uk",locale:"en"}),r.a.createElement(y,{name:"cn",locale:"zh"}))))}},1218:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(21),s=n(38),u=n(162),i=n(125),l=n(84);t.a=function(e){var t=Object(s.a)().accent;return r.a.createElement(i.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:c.g.small}},r.a.createElement(l.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:c.d?24:18,paddingBottom:c.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(u.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:c.g.tiny}}))}},1219:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(3),s=n(21),u=n(38);t.a=function(e){var t=Object(u.a)().border;return r.a.createElement(c.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?s.g.tiny:s.g.small,marginBottom:e.small?s.g.tiny:s.g.small+s.g.tiny}})}},1220:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return v}));var a=n(7),r=n.n(a),c=n(0),s=n(163),u=n(426),i=n(211),l=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.e)("IMiningFarm",s.c,e),a.next=3,r.a.awrap(t.viewAllTimeTotalMined());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},o=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.e)("IBEP20",s.b,e),a.next=3,r.a.awrap(t.balanceOf(s.c));case 3:return n=a.sent,console.log("fetchCurrentTotalStakedSTokenInpool"),console.log(n),a.abrupt("return",n);case 7:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.e)("IBEP20",s.b,e),a.next=3,r.a.awrap(t.totalSupply());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},f=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.e)("ISTokenERC20",s.b,t),c.next=3,r.a.awrap(n.getFreeToTransferAmount(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},m=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.e)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewUserInfo(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},b=function(){return{enter:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(i.e)("IMiningFarm",s.c,t),console.log("before gas limit:"+e),l.next=4,r.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return a=l.sent,l.t0=console,l.next=8,r.a.awrap(a.toString());case 8:return l.t1=l.sent,l.t2=l.t1+" gas limit",l.t0.log.call(l.t0,l.t2),l.next=13,r.a.awrap(n.apiDepositToMining(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=l.sent,l.abrupt("return",Object(u.a)(c,"stakeActions.enter()",e.toString()));case 15:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(i.e)("IMiningFarm",s.c,t),console.log("before gas limit:"+e),l.next=4,r.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return a=l.sent,l.t0=console,l.next=8,r.a.awrap(a.toString());case 8:return l.t1=l.sent,l.t2=l.t1+" gas limit",l.t0.log.call(l.t0,l.t2),l.next=13,r.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=l.sent,l.abrupt("return",Object(u.a)(c,"stakeActions.leave()",e.toString()));case 15:case"end":return l.stop()}}),null,null,null,Promise)}),[])}},p=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.e)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewTotalClaimedRewardFrom(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},g=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.e)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},v=function(e,t,n,a){var c,l,o;return r.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return c=Object(i.e)("IMiningFarm",s.c,a),d.next=3,r.a.awrap(c.estimateGas.apiClaimAmountOfReward(e,t,n));case 3:return l=d.sent,d.next=6,r.a.awrap(c.apiClaimAmountOfReward(e,t,n,{gasLimit:l.mul(120).div(100)}));case 6:return o=d.sent,d.abrupt("return",Object(u.a)(o,"farmActions.apiClaimAmountOfReward()",t.toString()));case 8:case"end":return d.stop()}}),null,null,null,Promise)}},1374:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=(n(54),n(3)),u=(n(98),n(61)),i=n(425),l=n(1219),o=n(422),d=n(423),f=n(1218),m=n(428),b=n(143),p=n(1217),g=n(21),v=n(74),h=(n(38),n(7)),x=n.n(h),w=n(19),E=n.n(w),O=n(245),T=n.n(O),y=n(180),j=n(211),S=n(46),k=n.n(S),C=n(9),P=n.n(C),M=new y.i(y.a.MAINNET,"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",8,"WBTC","Wrapped BTC"),A=new y.i(y.a.MAINNET,"0x6B175474E89094C44Da98b954EedeAC495271d0F",18,"DAI","Dai Stablecoin"),B=new y.i(y.a.MAINNET,"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",6,"USDC","USD//C"),I=new y.i(y.a.MAINNET,"0xdAC17F958D2ee523a2206206994597C13D831ec7",6,"USDT","Tether USD"),N=new y.i(y.a.MAINNET,"0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",18,"SUSHI","SushiToken"),D=new y.i(y.a.MAINNET,"0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16",18,"YAM","YAM"),F=new y.i(y.a.MAINNET,"0xD46bA6D942050d489DBd938a2C909A5d5039A161",9,"AMPL","Ampleforth"),W=[y.l[y.a.MAINNET],M,A,B,I,N,D],L=P()({},F.address,[A,y.l[y.a.MAINNET],M]);function z(e){return e===y.d?y.l[y.a.MAINNET]:e instanceof y.i?e:void 0}var H=function(){return{loadAllCommonPairs:Object(a.useCallback)((function(e,t,n){var a,r,c,s,u,i,l;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=W,r=[z(e),z(t)],c=r[0],s=r[1],u=a.flatMap((function(e){return a.map((function(t){return[e,t]}))})).filter((function(e){var t=E()(e,2),n=t[0],a=t[1];return n.address!==a.address})),i=c&&s?[[c,s]].concat(k()(a.map((function(e){return[c,e]}))),k()(a.map((function(e){return[s,e]}))),k()(u)).filter((function(e){return Boolean(e[0]&&e[1])})).filter((function(e){var t=E()(e,2),n=t[0],a=t[1];return n.address!==a.address})).filter((function(e){var t=E()(e,2),n=t[0],a=t[1],r=L;if(!r)return!0;var u=r[n.address],i=r[a.address];return!u&&!i||!(u&&!u.find((function(e){return s.equals(e)})))&&!(i&&!i.find((function(e){return c.equals(e)})))})):[],o.next=6,x.a.awrap(Promise.all(i.map((function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.awrap(y.f.fetchPairData(e[0],e[1],n));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",null);case 9:case"end":return t.stop()}}),null,null,[[0,6]],Promise)}))));case 6:return l=o.sent,o.abrupt("return",l.filter((function(e){return null!==e})));case 8:case"end":return o.stop()}}),null,null,null,Promise)}),[])}},R=function(){var e=Object(a.useContext)(v.a).getTotalSupply,t=H().loadAllCommonPairs;return{getTrade:Object(a.useCallback)((function(e,n,a,r){var c,s,u,i,l;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!r){o.next=9;break}return c=Object(j.f)(e),s=Object(j.a)(e),u=Object(j.f)(n)?y.b.ETHER:Object(j.a)(n),o.next=6,x.a.awrap(t(s,u,r));case 6:return i=o.sent,l=c?y.c.ether(a.toString()):new y.j(s,a.toString()),o.abrupt("return",y.k.bestTradeExactIn(i,l,u,{maxHops:3,maxNumResults:1})[0]);case 9:case"end":return o.stop()}}),null,null,null,Promise)}),[]),getPair:Object(a.useCallback)((function(e,t,n){var a,r;return x.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=Object(j.a)(e),r=Object(j.a)(t),c.next=4,x.a.awrap(y.f.fetchPairData(a,r,n));case 4:return c.abrupt("return",c.sent);case 5:case"end":return c.stop()}}),null,null,null,Promise)}),[]),calculateAmountOfLPTokenMinted:function(t,n,a){var r,c;return x.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.a.awrap(e(t.liquidityToken.address));case 2:if(!(r=s.sent)){s.next=6;break}return c=t.getLiquidityMinted(new y.j(t.liquidityToken,r.toString()),n,a),s.abrupt("return",u.ethers.BigNumber.from(c.raw.toString()));case 6:case"end":return s.stop()}}),null,null,null,Promise)}}},U=n(1220),_=function(){var e=Object(a.useContext)(v.a),t=e.provider,n=e.signer,r=e.address,c=(e.tokens,R().getPair,Object(a.useState)(!0)),s=E()(c,2),u=s[0],i=s[1],l=Object(a.useState)(),o=E()(l,2),d=o[0],f=o[1],m=Object(a.useState)(),b=E()(m,2),p=b[0],g=b[1],h=Object(a.useState)(!0),w=E()(h,2),O=(w[0],w[1]),y=Object(a.useState)(),j=E()(y,2),S=j[0],k=j[1],C=Object(a.useState)(!0),P=E()(C,2),M=(P[0],P[1]),A=Object(a.useState)(),B=E()(A,2),I=B[0],N=B[1],D=Object(a.useState)(!0),F=E()(D,2),W=(F[0],F[1]);return Object(a.useEffect)((function(){f(void 0),g(void 0),k(void 0),N(void 0),i(!0),O(!0),M(!0),W(!0)}),[r]),T()((function(){var e;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return i(!0),a.next=4,x.a.awrap(Object(U.c)(t));case 4:return e=a.sent,a.prev=5,a.t0=f,a.next=9,x.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,i(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),T()((function(){var e;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return O(!0),a.next=4,x.a.awrap(Object(U.b)(t));case 4:return e=a.sent,a.prev=5,a.t0=g,a.next=9,x.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,O(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),T()((function(){var e;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=21;break}return M(!0),a.t0=x.a,a.t1=U.g,a.next=6,x.a.awrap(n.getAddress());case 6:return a.t2=a.sent,a.t3=t,a.t4=(0,a.t1)(a.t2,a.t3),a.next=11,a.t0.awrap.call(a.t0,a.t4);case 11:return e=a.sent,a.prev=12,a.t5=k,a.next=16,x.a.awrap(e);case 16:a.t6=a.sent,(0,a.t5)(a.t6);case 18:return a.prev=18,M(!1),a.finish(18);case 21:case"end":return a.stop()}}),null,null,[[12,,18,21]],Promise)}),[t,n]),T()((function(){var e;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return W(!0),a.next=4,x.a.awrap(Object(U.f)(t));case 4:return e=a.sent,a.prev=5,a.t0=N,a.next=9,x.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,W(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),{totalMinedBTC:d,totalStakedBTCST:p,yourBTCInpool:S,totalMiningPower:I,loadingTotalMined:u}},q=n(420),G=n(51),J=n(424),Y=function(e){var t=e.state;return r.a.createElement(s.a,{style:{marginTop:g.d?g.g.large:g.g.normal}},r.a.createElement(K,{state:t}),r.a.createElement(s.a,{style:{height:g.g.large}}),r.a.createElement(Q,{state:t}),r.a.createElement(l.a,null),r.a.createElement(s.a,{style:{height:g.g.large}}),r.a.createElement(V,{state:t}))},K=function(e){var t=e.state,n=Object(G.a)(),c=Object(a.useContext)(v.a),u=(c.loadingTokens,c.tokens,Object(q.a)("/staking","Stake")),i=t.totalStakedBTCST,l=t.loadingTotalStaked;return r.a.createElement(s.a,null,r.a.createElement(f.a,{text:n("total-staked-btcst"),buttonText:n("stake"),onPressButton:u}),r.a.createElement(b.a,{text:l||void 0==i?n("fetching"):Object(j.c)(i,18),fontWeight:"light",disabled:l,style:{fontSize:g.d?32:24}}))},Q=function(e){var t=e.state,n=Object(G.a)(),a=t.loadingTotalStaked,c=void 0!=t.totalStakedBTCST?t.totalStakedBTCST.div(u.ethers.BigNumber.from(10)):void 0;return r.a.createElement(s.a,null,r.a.createElement(f.a,{text:n("total-mining-power")}),r.a.createElement(X,{loading:a,number:c,suffix:" TH/s"}))},V=function(e){var t=e.state,n=Object(G.a)(),a=Object(q.a)("/claim","Mining");return r.a.createElement(s.a,null,r.a.createElement(f.a,{text:n("your-btc-balance-inpool"),buttonText:n("claim"),onPressButton:a}),r.a.createElement(X,{loading:t.loadingBTCInpool,number:t.yourBTCInpool}))},X=function(e){var t=e.suffix?e.suffix:"";return e.loading||void 0==e.number?r.a.createElement(m.a,null):r.a.createElement(b.a,{text:Object(j.c)(e.number,18,8)+""+t,fontWeight:"light",disabled:e.loading,style:{fontSize:g.d?32:24}})};t.default=function(){var e=Object(G.a)(),t=_(),n=(Object(a.useContext)(v.a).loadingTokens,t.loadingTotalMined),s=t.totalMinedBTC;return r.a.createElement(J.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,null),r.a.createElement(d.a,{style:{paddingBottom:g.g.huge}},r.a.createElement(b.a,{text:e("total-mined"),style:{flex:1,fontSize:28}}),r.a.createElement(b.a,{text:n||void 0==s?e("fetching"):Object(j.c)(s,18,8),fontWeight:"light",disabled:n,style:{fontSize:g.d?32:24}}),r.a.createElement(Y,{state:t})),"web"===c.a.OS&&r.a.createElement(p.a,null)))}}}]);
//# sourceMappingURL=8.50250455.chunk.js.map