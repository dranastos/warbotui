"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{27279:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(87462),a=n(4942),c=n(67294),i=n(93433),o=n(15671),s=n(43144),l=n(79340),u=n(31129),d=n(94184),p=n.n(d),f=n(96774),v=n.n(f),h=n(50344),m=n(60444),y=n(29439),x=c.forwardRef((function(e,t){var n,r=e.prefixCls,i=e.forceRender,o=e.className,s=e.style,l=e.children,u=e.isActive,d=e.role,f=c.useState(u||i),v=(0,y.Z)(f,2),h=v[0],m=v[1];return c.useEffect((function(){(i||u)&&m(!0)}),[i,u]),h?c.createElement("div",{ref:t,className:p()("".concat(r,"-content"),(n={},(0,a.Z)(n,"".concat(r,"-content-active"),u),(0,a.Z)(n,"".concat(r,"-content-inactive"),!u),n),o),style:s,role:d},c.createElement("div",{className:"".concat(r,"-content-box")},l)):null}));x.displayName="PanelContent";var Z=x,b=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).handleItemClick=function(){var t=e.props,n=t.onItemClick,r=t.panelKey;"function"===typeof n&&n(r)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,s.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!v()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,r=this.props,i=r.className,o=r.id,s=r.style,l=r.prefixCls,u=r.header,d=r.headerClass,f=r.children,v=r.isActive,h=r.showArrow,y=r.destroyInactivePanel,x=r.accordion,b=r.forceRender,C=r.openMotion,g=r.expandIcon,k=r.extra,P=r.collapsible,j="disabled"===P,w=p()("".concat(l,"-header"),(e={},(0,a.Z)(e,d,d),(0,a.Z)(e,"".concat(l,"-header-collapsible-only"),"header"===P),e)),E=p()((t={},(0,a.Z)(t,"".concat(l,"-item"),!0),(0,a.Z)(t,"".concat(l,"-item-active"),v),(0,a.Z)(t,"".concat(l,"-item-disabled"),j),t),i),O=c.createElement("i",{className:"arrow"});return h&&"function"===typeof g&&(O=g(this.props)),c.createElement("div",{className:E,style:s,id:o},c.createElement("div",{className:w,onClick:function(){return"header"!==P&&n.handleItemClick()},role:x?"tab":"button",tabIndex:j?-1:0,"aria-expanded":v,onKeyPress:this.handleKeyPress},h&&O,"header"===P?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(l,"-header-text")},u):u,k&&c.createElement("div",{className:"".concat(l,"-extra")},k)),c.createElement(m.Z,Object.assign({visible:v,leavedClassName:"".concat(l,"-content-hidden")},C,{forceRender:b,removeOnLeave:y}),(function(e,t){var n=e.className,r=e.style;return c.createElement(Z,{ref:t,prefixCls:l,className:n,style:r,isActive:v,forceRender:b,role:x?"tabpanel":null},f)})))}}]),n}(c.Component);b.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var C=b;function g(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var k=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;(0,o.Z)(this,n),(r=t.call(this,e)).onClickItem=function(e){var t=r.state.activeKey;if(r.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,i.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}r.setActiveKey(t)},r.getNewChild=function(e,t){if(!e)return null;var n=r.state.activeKey,a=r.props,i=a.prefixCls,o=a.openMotion,s=a.accordion,l=a.destroyInactivePanel,u=a.expandIcon,d=a.collapsible,p=e.key||String(t),f=e.props,v=f.header,h=f.headerClass,m=f.destroyInactivePanel,y=f.collapsible,x=null!==y&&void 0!==y?y:d,Z={key:p,panelKey:p,header:v,headerClass:h,isActive:s?n[0]===p:n.indexOf(p)>-1,prefixCls:i,destroyInactivePanel:null!==m&&void 0!==m?m:l,openMotion:o,accordion:s,children:e.props.children,onItemClick:"disabled"===x?null:r.onClickItem,expandIcon:u,collapsible:x};return"string"===typeof e.type?e:c.cloneElement(e,Z)},r.getItems=function(){var e=r.props.children;return(0,h.Z)(e).map(r.getNewChild)},r.setActiveKey=function(e){"activeKey"in r.props||r.setState({activeKey:e}),r.props.onChange(r.props.accordion?e[0]:e)};var a=e.activeKey,s=e.defaultActiveKey;return"activeKey"in e&&(s=a),r.state={activeKey:g(s)},r}return(0,s.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!v()(this.props,e)||!v()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,i=t.style,o=t.accordion,s=p()((e={},(0,a.Z)(e,n,!0),(0,a.Z)(e,r,!!r),e));return c.createElement("div",{className:s,style:i,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=g(e.activeKey)),t}}]),n}(c.Component);k.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},k.Panel=C;var P=k,j=(k.Panel,n(8812)),w=n(37419),E=n(10366),O=n(86032),I=n(10899),N=function(e){(0,I.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=c.useContext(O.E_).getPrefixCls,n=e.prefixCls,i=e.className,o=void 0===i?"":i,s=e.showArrow,l=void 0===s||s,u=t("collapse",n),d=p()((0,a.Z)({},"".concat(u,"-no-arrow"),!l),o);return c.createElement(P.Panel,(0,r.Z)({},e,{prefixCls:u,className:d}))},S=n(33603),A=n(96159),M=function(e){var t,n=c.useContext(O.E_),i=n.getPrefixCls,o=n.direction,s=e.prefixCls,l=e.className,u=void 0===l?"":l,d=e.bordered,f=void 0===d||d,v=e.ghost,h=i("collapse",s),m=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===o?"right":"left"}(),y=p()((t={},(0,a.Z)(t,"".concat(h,"-borderless"),!f),(0,a.Z)(t,"".concat(h,"-icon-position-").concat(m),!0),(0,a.Z)(t,"".concat(h,"-rtl"),"rtl"===o),(0,a.Z)(t,"".concat(h,"-ghost"),!!v),t),u),x=(0,r.Z)((0,r.Z)({},S.Z),{motionAppear:!1,leavedClassName:"".concat(h,"-content-hidden")});return c.createElement(P,(0,r.Z)({openMotion:x},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,r=n?n(t):c.createElement(j.Z,{rotate:t.isActive?90:void 0});return(0,A.Tm)(r,(function(){return{className:p()(r.props.className,"".concat(h,"-arrow"))}}))},prefixCls:h,className:y}),function(){var t=e.children;return(0,w.Z)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var a=e.key||String(t),c=e.props,i=c.disabled,o=c.collapsible,s=(0,r.Z)((0,r.Z)({},(0,E.Z)(e.props,["disabled"])),{key:a,collapsible:null!==o&&void 0!==o?o:i?"disabled":void 0});return(0,A.Tm)(e,s)}return e}))}())};M.Panel=N;var K=M},49772:function(e,t,n){var r=n(92809),a=n(30266),c=n(66311),i=n(809),o=n.n(i),s=n(67294),l=n(85789),u=(n(38648),n(27279)),d=n(71230),p=n(15746),f=n(19650),v=n(38162),h=n(89588),m=n(11382),y=n(39144),x=n(35312),Z=(n(72724),n(42578)),b=n(67287),C=n(29359),g=n(30381),k=n.n(g),P=n(85893);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw c}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}l.Z.Title,l.Z.Text;t.Z=function(e){e.onComplete;var t=e.address,n=(0,x.u)(),r=(0,C.Z)(),i=(0,c.Z)(r,2),l=i[0],g=i[1],j=(0,b.Z)(["security","hasSecurity","vaultCount"]),O=(0,c.Z)(j,2),I=O[0],N=(O[1],(0,Z.Z)(I.security)),S=N.security,A=(N.web3,N.connected),M=(0,s.useState)([]),K=M[0],T=M[1],R=(0,s.useState)({}),D=R[0],U=R[1],_=(0,s.useState)(0),B=(_[0],_[1]),Y=(0,s.useState)(!1),H=Y[0],W=Y[1],L=(0,s.useState)(!1),z=L[0],F=L[1];(0,s.useEffect)((function(){A&&I.hasSecurity&&G(!1)}),[A,I.hasSecurity,I.vaultCount]);var G=function(){var e=(0,a.Z)(o().mark((function e(){var r,a,c,i,s,u,d,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,S.getUserManufacturingPlants(n.account).call();case 3:return r=e.sent,e.next=6,S.userManufacturingPlantCount(n.account).call();case 6:a=e.sent,T(r),c={},i=E(r),e.prev=10,i.s();case 12:if((s=i.n()).done){e.next=23;break}return u=s.value,e.next=16,S.ManufacturingPlants(u).call();case 16:return d=e.sent,e.next=19,l(d);case 19:p=e.sent,c[u]=w({address:t},p);case 21:e.next=12;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),i.e(e.t0);case 28:return e.prev=28,i.f(),e.finish(28);case 31:U(c),B(a),F(!0),W(!1);case 35:case"end":return e.stop()}}),e,null,[[10,25,28,31]])})));return function(){return e.apply(this,arguments)}}();return(0,P.jsx)(m.Z,{spinning:H,children:(0,P.jsxs)(y.Z,{title:"Manufacturing Centers",extra:(0,P.jsx)(v.Z,{onClick:G,children:"Refresh"}),children:[(0,P.jsxs)(d.Z,{style:{marginBottom:20},children:[(0,P.jsx)(p.Z,{span:12}),(0,P.jsx)(p.Z,{span:12})]}),z&&K.map((function(e,t){if(void 0==D[e])return null;(new Date).getTime(),D[e].timeAtExpirationUnix,D[e].timeAtExpirationUnix,D[e].vaultStatus;var r="MONTHLY PRODUCTION RATE: "+D[e].MonthlyProductionRate+" WarBots ",a="MicroMachines Staked:"+D[e].MicroMachinesStaked;k().unix(D[e].timeAtExpiration).format("MM/DD/YYYY HH:mm");return"Active"==D[e].PlantStatus?(0,P.jsx)("div",{}):(0,P.jsx)("div",{children:(0,P.jsx)(u.Z,{children:(0,P.jsx)(u.Z.Panel,{header:"".concat(a," - ").concat(D[e].timeAtExpiration," - ").concat(r),children:(0,P.jsxs)(d.Z,{style:{marginTop:10},gutter:[20,20],children:[(0,P.jsx)(p.Z,{span:24,children:(0,P.jsxs)(f.Z,{size:"small",style:{marginBottom:10},children:[(0,P.jsx)(v.Z,{type:"primary",onClick:function(){return g("manufacture",D[e].address,n.account,e)},children:"Manufacture WarBots"}),(0,P.jsx)(v.Z,{type:"danger",onClick:function(){return g("unstakeMicroMachines",D[e].address,n.account,e)},children:"Shutdown Plant"})]})}),(0,P.jsx)(p.Z,{span:12,children:(0,P.jsx)(h.Z,{title:"Manufacturing Plant ",value:e})}),Object.keys(D[e]).map((function(t,n){return(0,P.jsx)(p.Z,{span:D[e].MicroMachinesStaked.toString().startsWith("0x")?24:8,children:(0,P.jsx)(h.Z,{title:t.toUpperCase(),value:D[e][t],precision:"POOL WEIGHT"==t?9:0,style:{marginBottom:20}})},"".concat(e,"-").concat(t,"-").concat(n))}))]})})})},"vault-".concat(e))}))]})})}}}]);