(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{5032:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(67294),s=n(31692),r=n.n(s),u=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"WelfareCommandCenterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"socialsecuritycontract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_comandcenteraddress","type":"address"}],"name":"updateCommandCenter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_socialsecurity","type":"address"}],"name":"updateSSAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_comrade","type":"address"}],"name":"updateWelfareAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"welfarecontract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'),i=n(72724),d=function(e){var t=(0,i.Z)(),s=(0,a.useState)({}),d=s[0],p=s[1],o=(0,a.useState)(!1),c=o[0],l=o[1];return(0,a.useEffect)((function(){e&&(r().setProvider(n.g.window&&window.ethereum),p(new(r())(u,e)),l(!0))}),[e]),{bonus:d.methods,web3:t,connected:c}}},15625:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(30266),s=n(66311),r=n(809),u=n.n(r),i=n(67294),d=n(35312),p=(n(30381),n(9008),n(85789)),o=n(4914),c=(n(38648),n(71230)),l=n(15746),y=n(39144),f=n(89588),m=n(52794),w=n(67287),b=n(5032),h=n(85893),v=p.Z.Title;p.Z.Text,o.Z.Item;function T(){(0,d.u)();var e=(0,i.useState)(!1),t=(e[0],e[1],(0,w.Z)(["chain","bonus","hasBonus"])),n=(0,s.Z)(t,2),r=n[0],p=(n[1],(0,b.Z)(r.bonus)),o=p.bonus,T=(p.web3,p.connected),x=(0,i.useState)(!1),_=(x[0],x[1],(0,i.useState)({})),Z=_[0],S=_[1],C=(0,i.useState)(0),M=(C[0],C[1],(0,i.useState)(!1)),O=(M[0],M[1]);(0,i.useEffect)((function(){console.log("STATE",r),T&&r.hasBonus&&E()}),[T,r.hasBonus]);var E=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,o.welfarecontract().call();case 3:return t=e.sent,e.next=6,o.socialsecuritycontract().call();case 6:return n=e.sent,e.next=9,o.WelfareCommandCenterAddress().call();case 9:a=e.sent,S({centerAddr:a,securityAddr:n,welfareAddr:t}),O(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=(0,i.useCallback)((function(){return(0,h.jsx)(c.Z,{gutter:[20,20],style:{marginTop:20},children:(0,h.jsx)(l.Z,{span:24,children:(0,h.jsx)(y.Z,{children:(0,h.jsx)(f.Z,{title:"Purchase Weapons and Defense Warbot Upgrades",value:"UNDER CONSTRUCTION"})})})})}),[Z]);return(0,h.jsx)(m.Z,{children:(0,h.jsxs)("div",{style:{padding:"20px 0px"},children:[(0,h.jsx)(v,{level:2,children:"Upgrades"}),r.hasBonus&&N()]})})}},88595:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upgrades",function(){return n(15625)}])}},function(e){e.O(0,[92,885,351,26,579,407,4,144,114,794,774,888,179],(function(){return t=88595,e(e.s=t);var t}));var t=e.O();_N_E=t}]);