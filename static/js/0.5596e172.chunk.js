(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1214:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),c=n(20),s=n(39);t.a=function(e){var t=Object(s.a)().border;return a.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?c.g.tiny:c.g.small,marginBottom:e.small?c.g.tiny:c.g.small+c.g.tiny}})}},1215:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(37),c=n(52),s=n(4),l=n(50),u=n(164),i=n(20),d=n(245),m=n(8),b=n.n(m),p=n(10),f=function(e){return a.a.createElement(s.a,b()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===p.a.OS?i.g.large:i.g.normal},e.style]}))},g=n(108),h=n(100),y=n(49),O=n(39),w=function(e){var t=Object(r.useContext)(y.a).darkMode,n=Object(O.a)(),o=n.background,c=n.textLight;return a.a.createElement(h.d,b()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":c}}))},v=function(){var e=Object(r.useContext)(y.a).darkMode,t=Object(O.a)(),n=t.background,o=t.textLight,c=Object(d.a)("http://twitter.com/BTCST2020","","_blank"),s=Object(d.a)("https://github.com/Standard-Hashrate-Group","","_blank"),l=Object(d.a)("https://btcst.medium.com/","","_blank"),u=Object(d.a)("https://t.me/BTCSTCommunity","","_blank"),i=Object(d.a)("https://discord.com/channels/791170396316893255/791170396765945886","","_blank");return a.a.createElement(g.a,{style:{width:"100%",justifyContent:"center"}},a.a.createElement(w,{type:"github-alt",onPress:s}),a.a.createElement(w,{type:"twitter",onPress:c}),a.a.createElement(w,{type:"medium",onPress:l}),a.a.createElement(w,{type:"telegram",onPress:u}),a.a.createElement(h.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:i}))},x=n(85),j={us:n(422),uk:n(423),cn:n(424),kr:n(425)},k=function(e){var t=e.name,n=e.locale,r=Object(l.g)(),s=Object(l.h)();return a.a.createElement(c.a,{onPress:function(){r.push(s.pathname+"?locale="+n)},style:{marginHorizontal:4}},a.a.createElement(o.a,{source:j[t],style:{width:30,height:20}}))};t.a=function(){var e=Object(d.a)("https://certik.foundation/","","_blank");return a.a.createElement(f,{noTopMargin:!0},a.a.createElement(s.a,{style:{width:"100%",padding:i.g.normal,alignItems:"center"}},a.a.createElement(c.a,{onPress:e},a.a.createElement(o.a,{source:n(714),style:{width:168,height:40,marginTop:i.g.tiny}})),a.a.createElement(v,null),a.a.createElement(x.a,{note:!0,style:{marginTop:i.g.tiny}},"Built with \u2764\ufe0f by Standard Hashrate (v",u.a.manifest.version,")"),a.a.createElement(g.a,{style:{marginTop:i.g.small}},a.a.createElement(k,{name:"uk",locale:"en"}),a.a.createElement(k,{name:"cn",locale:"zh"}))))}},1216:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(20),c=n(39),s=n(162),l=n(108),u=n(85);t.a=function(e){var t=Object(c.a)().accent;return a.a.createElement(l.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},a.a.createElement(u.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&a.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1217:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"n",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"k",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"l",(function(){return v})),n.d(t,"j",(function(){return x}));var r=n(7),a=n.n(r),o=n(0),c=n(163),s=n(429),l=n(211),u=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(l.g)("IMiningFarm",c.c,e),r.next=3,a.a.awrap(t.viewAllTimeTotalMined());case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),null,null,null,Promise)},i=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(l.g)("IBEP20",c.b,e),r.next=3,a.a.awrap(t.balanceOf(c.c));case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(l.g)("IBEP20",c.b,e),r.next=3,a.a.awrap(t.totalSupply());case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),null,null,null,Promise)},m=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(l.g)("ISTokenERC20",c.b,e),r.next=3,a.a.awrap(t.getTotalRemainingSupplyLocked());case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}),null,null,null,Promise)},b=function(e,t){var n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(l.g)("ISTokenERC20",c.b,t),o.next=3,a.a.awrap(n.getFreeToTransferAmount(e));case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}),null,null,null,Promise)},p=function(e,t){var n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),o.next=3,a.a.awrap(n.viewUserInfo(e));case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}),null,null,null,Promise)},f=function(){return{enter:Object(o.useCallback)((function(e,t){var n,r,o;return a.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),console.log("before gas limit:"+e),u.next=4,a.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return r=u.sent,u.t0=console,u.next=8,a.a.awrap(r.toString());case 8:return u.t1=u.sent,u.t2=u.t1+" gas limit",u.t0.log.call(u.t0,u.t2),u.next=13,a.a.awrap(n.apiDepositToMining(e,{gasLimit:r.mul(105).div(100)}));case 13:return o=u.sent,u.abrupt("return",Object(s.a)(o,"stakeActions.enter()",e.toString()));case 15:case"end":return u.stop()}}),null,null,null,Promise)}),[]),leave:Object(o.useCallback)((function(e,t){var n,r,o;return a.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),console.log("before gas limit:"+e),u.next=4,a.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return r=u.sent,u.t0=console,u.next=8,a.a.awrap(r.toString());case 8:return u.t1=u.sent,u.t2=u.t1+" gas limit",u.t0.log.call(u.t0,u.t2),u.next=13,a.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:r.mul(105).div(100)}));case 13:return o=u.sent,u.abrupt("return",Object(s.a)(o,"stakeActions.leave()",e.toString()));case 15:case"end":return u.stop()}}),null,null,null,Promise)}),[])}},g=function(e,t){var n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),o.next=3,a.a.awrap(n.viewTotalClaimedRewardFrom(e));case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}),null,null,null,Promise)},h=function(e,t){var n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),o.next=3,a.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}),null,null,null,Promise)},y=function(e,t,n,r){var o,u,i;return a.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return o=Object(l.g)("IMiningFarm",c.c,r),d.next=3,a.a.awrap(o.estimateGas.apiClaimAmountOfReward(e,t,n));case 3:return u=d.sent,d.next=6,a.a.awrap(o.apiClaimAmountOfReward(e,t,n,{gasLimit:u.mul(120).div(100)}));case 6:return i=d.sent,d.abrupt("return",Object(s.a)(i,"farmActions.apiClaimAmountOfReward()",t.toString()));case 8:case"end":return d.stop()}}),null,null,null,Promise)},O=function(){var e,t,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a.a.awrap(fetch("https://584xqc7ik2.execute-api.us-east-2.amazonaws.com/beta/bp-relay"));case 2:return e=o.sent,o.next=5,a.a.awrap(e.json());case 5:if(0==(t=o.sent).code){o.next=8;break}return o.abrupt("return",{code:t.code,msg:t.msg});case 8:return n=t.data.dayList,r=t.data.hourList,o.abrupt("return",{code:0,dayList:n,hourList:r});case 11:case"end":return o.stop()}}),null,null,null,Promise)};function w(){var e,t,n,r,o,c;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.a.awrap(fetch("https://584xqc7ik2.execute-api.us-east-2.amazonaws.com/beta/gp-replay"));case 2:return r=s.sent,s.next=5,a.a.awrap(r.json());case 5:return o=s.sent,c=((null==o||null==(e=o.data)?void 0:e.market_pairs)||[]).find((function(e){var t;return e&&"BTCST/USDT"===e.market_pair&&"Binance"===(null==(t=e.exchange)?void 0:t.name)})),s.abrupt("return",(null==c||null==(t=c.quote)||null==(n=t.USD)?void 0:n.price)||0);case 8:case"end":return s.stop()}}),null,null,null,Promise)}var v=function(e,t){var n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(l.g)("IMiningFarm",c.c,t),o.next=3,a.a.awrap(n.viewRoundSlot(e));case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}),null,null,null,Promise)},x=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(l.g)("IMiningFarm",c.c,e),console.log(t),r.next=4,a.a.awrap(Promise.all(["_farmStartedTime","_miniStakePeriodInSeconds","_farmDescription"].map((function(e){try{return t.callStatic[e]()}catch(n){return console.log(n),""}}))));case 4:return n=r.sent,r.abrupt("return",{started:n[0],stakePeriod:n[1],desc:n[2]});case 6:case"end":return r.stop()}}),null,null,null,Promise)}},1218:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(9),c=n.n(o),s=n(0),l=n.n(s),u=n(4),i=n(20),d=n(49),m=n(39),b=n(428);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(s.useContext)(d.a).darkMode,n=Object(m.a)(),r=n.backgroundLight,o=n.borderDark,c=Object(b.a)().border;return l.a.createElement(u.a,a()({},e,{style:[f(f({},c({color:t?o:r})),{},{backgroundColor:r,marginTop:i.g.normal+i.g.small,padding:i.g.small+i.g.tiny}),e.style]}))}},1219:function(e,t,n){"use strict";var r=n(9),a=n.n(r),o=n(0),c=n.n(o),s=n(10),l=n(4),u=n(59),i=n(20),d=n(39),m=n(428),b=n(211),p=n(162),f=n(1216),g=n(8),h=n.n(g),y=n(100),O=function(e){var t=Object(d.a)(),n=t.textDark,r=t.textMedium,a=t.textLight,l=e.size||"normal",u=e.color||n,i="small"===l?16:"large"===l?24:20,m=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return c.a.createElement(y.c,h()({},e,{inputStyle:[{fontSize:i,fontFamily:"regular",paddingBottom:4,color:u,marginTop:0,minHeight:32},"web"===s.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:r},e.labelStyle],placeholderTextColor:e.placeholderTextColor||a,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:m}))};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=Object(d.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(b.h)(e.token)){var n=Object(b.k)(16);t=t.gt(n)?t.sub(n):u.ethers.constants.Zero}e.updateAmount(Object(b.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return c.a.createElement(l.a,{style:{position:"absolute",right:12,bottom:"web"===s.a.OS?12:24}},c.a.createElement(p.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(i.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:i.g.tiny}}))};t.a=function(e){var t,n,r=Object(m.a)().border,a=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.j)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return c.a.createElement(l.a,null,e.title&&c.a.createElement(f.a,{text:e.title}),c.a.createElement(l.a,null,c.a.createElement(O,{label:e.label,value:e.amount,onChangeText:a,placeholder:"0.0",keyboardType:"decimal-pad",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:i.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:v(v({},r()),{},{paddingHorizontal:i.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&c.a.createElement(x,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1220:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),c=n(20),s=n(85);t.a=function(e){var t=e.error;return a.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:c.g.tiny,marginTop:c.g.small}},t.code&&a.a.createElement(s.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),a.a.createElement(s.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1221:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(51),c=n(162);t.a=function(){var e=Object(o.a)();return a.a.createElement(c.a,{title:e("fetching"),disabled:!0})}},1222:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(51),c=n(162);t.a=function(e){var t=e.symbol,n=Object(o.a)();return a.a.createElement(c.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1223:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),c=n(20),s=n(39),l=n(428),u=n(162),i=n(85);t.a=function(e){var t=Object(s.a)().textLight,n=(0,Object(l.a)().border)({color:e.color}),r=e.color||t;return a.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},a.a.createElement(i.a,{note:!0,style:{color:r}},e.text),e.buttonText&&e.onPressButton&&a.a.createElement(u.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:r},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:c.g.tiny}}))}},1227:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(19),c=n.n(o),s=n(0),l=n(59),u=n(246),i=n.n(u),d=n(75),m=n(1217),b=n(163),p=n(211);t.a=function(){var e=Object(s.useContext)(d.a),t=e.provider,n=e.signer,r=e.address,o=e.getTokenAllowance,u=Object(s.useState)(""),f=c()(u,2),g=f[0],h=f[1],y=Object(m.h)(),O=y.enter,w=y.leave,v=Object(s.useState)(),x=c()(v,2),j=x[0],k=x[1],S=Object(s.useState)(!0),E=c()(S,2),T=E[0],P=E[1],C=Object(s.useState)(!1),B=c()(C,2),A=B[0],M=B[1],I=Object(s.useState)(),z=c()(I,2),F=z[0],L=z[1],D=Object(s.useState)(),H=c()(D,2),W=H[0],R=H[1],_=Object(s.useState)(),N=c()(_,2),G=N[0],U=N[1],q=Object(s.useState)(),J=c()(q,2),X=J[0],V=J[1],Z=Object(s.useState)(!1),K=c()(Z,2),Q=K[0],Y=K[1],$=Object(s.useState)(!1),ee=c()($,2),te=ee[0],ne=ee[1],re=Object(s.useState)(0),ae=c()(re,2),oe=ae[0],ce=ae[1],se={name:"Standard BTC Hashrate Token",address:b.b,decimals:18,symbol:"BTCST",logoURI:"",balance:l.ethers.BigNumber.from(0)};Object(s.useEffect)((function(){h(""),k(se),P(!0),R(l.ethers.BigNumber.from(0)),U(l.ethers.BigNumber.from(0)),L(l.ethers.BigNumber.from(0)),ce(0)}),[r]),i()((function(){var e,r,c,s,u,i,d;return a.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(!(t&&n&&j)){f.next=55;break}return M(!1),P(!0),f.prev=3,e=l.ethers.BigNumber.from(2).pow(96).sub(1),f.next=7,a.a.awrap(o(j.address,b.c));case 7:return r=f.sent,M(l.ethers.BigNumber.from(r).gte(e)),f.t0=a.a,f.t1=m.f,f.next=13,a.a.awrap(n.getAddress());case 13:return f.t2=f.sent,f.t3=t,f.t4=(0,f.t1)(f.t2,f.t3),f.next=18,f.t0.awrap.call(f.t0,f.t4);case 18:return c=f.sent,f.t5=a.a,f.t6=m.n,f.next=23,a.a.awrap(n.getAddress());case 23:return f.t7=f.sent,f.t8=t,f.t9=(0,f.t6)(f.t7,f.t8),f.next=28,f.t5.awrap.call(f.t5,f.t9);case 28:return s=f.sent,f.t10=R,f.next=32,a.a.awrap(c);case 32:return f.t11=f.sent,(0,f.t10)(f.t11),f.next=36,a.a.awrap(s);case 36:return u=f.sent.amount,f.next=39,a.a.awrap(s);case 39:return i=f.sent.lockedAmount,U(l.ethers.BigNumber.from(u).add(l.ethers.BigNumber.from(i))),d=Object(p.g)("ERC20",b.b,n),f.t12=L,f.next=45,a.a.awrap(d.balanceOf(n.getAddress()));case 45:return f.t13=f.sent,(0,f.t12)(f.t13),f.t14=V,f.next=50,a.a.awrap(Object(m.i)(t));case 50:f.t15=f.sent,(0,f.t14)(f.t15);case 52:return f.prev=52,P(!1),f.finish(52);case 55:case"end":return f.stop()}}),null,null,[[3,,52,55]],Promise)}),[t,n,j,oe]);var le=Object(s.useCallback)((function(){var e,t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(g&&j&&n)){r.next=19;break}return Y(!0),r.prev=2,e=Object(p.j)(g,j.decimals),console.log("before entering"),r.next=7,a.a.awrap(O(e,n));case 7:if(t=r.sent,console.log("before wait"),!t){r.next=16;break}return r.next=12,a.a.awrap(t.wait());case 12:h(""),ce(oe+1),console.log("after wait");case 16:return r.prev=16,Y(!1),r.finish(16);case 19:case"end":return r.stop()}}),null,null,[[2,,16,19]],Promise)}),[g,j,n]),ue=Object(s.useCallback)((function(){var e,t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(g&&n&&j)){r.next=16;break}return ne(!0),r.prev=2,e=Object(p.j)(g,j.decimals),r.next=6,a.a.awrap(w(e,n));case 6:if(!(t=r.sent)){r.next=13;break}return r.next=10,a.a.awrap(t.wait());case 10:h(""),ce(oe+1);case 13:return r.prev=13,ne(!1),r.finish(13);case 16:case"end":return r.stop()}}),null,null,[[2,,13,16]],Promise)}),[g,j,n]);return{loading:T,amount:g,setAmount:h,stoken:j,yourTotalSToken:F,yourFreeToSendSToken:W,yourSTokenStaked:G,stokenAllowed:A,setSTokenAllowed:M,totalSTokenSupply:X,onEnter:le,entering:Q,onLeave:ue,leaving:te,txHappend:oe}}}}]);
//# sourceMappingURL=0.5596e172.chunk.js.map