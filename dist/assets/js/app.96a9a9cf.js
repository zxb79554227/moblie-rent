(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function s(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1270bc98":"67796e6a","chunk-14ee68eb":"e22ae48a","chunk-228939b3":"47d61c54","chunk-6225f699":"fef3c512","chunk-923b595c":"c18f0ab8","chunk-f6ebcede":"ce4f6ffe"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1270bc98":1,"chunk-14ee68eb":1,"chunk-228939b3":1,"chunk-6225f699":1,"chunk-923b595c":1,"chunk-f6ebcede":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-1270bc98":"946c2b42","chunk-14ee68eb":"1ac15c7a","chunk-228939b3":"7f65af45","chunk-6225f699":"fd05ded6","chunk-923b595c":"7afc2520","chunk-f6ebcede":"df221587"}[e]+".css",c=u.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===a||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],p.parentNode.removeChild(p),n(r)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06af":function(e,t,n){"use strict";var a=n("dcdf"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("index")],1)},c=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},s=[],u={data:function(){return{userLogin:!1}}},i=u,l=n("2877"),d=Object(l["a"])(i,r,s,!1,null,null,null),p=d.exports,f={components:{index:p},created:function(){this.detectDevice()},methods:{detectDevice:function(){var e=window.navigator;console.log(window.navigator),sessionStorage.language=e.language}}},h=f,v=Object(l["a"])(h,o,c,!1,null,null,null),m=v.exports,g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-pannel"},[n("div",{staticClass:"flow-title super-font"},[e._v(e._s(!1===e.account.accountRegister?"登录":"注册"))]),0==e.account.accountRegister?n("div",{attrs:{id:"login"}},[n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("账号")]),n("Input",{attrs:{placeholder:e.account.accountHolder,clearable:""},model:{value:e.account.accountNmae,callback:function(t){e.$set(e.account,"accountNmae",t)},expression:"account.accountNmae"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("密码")]),n("Input",{attrs:{placeholder:e.account.passHolder,type:"password",clearable:""},model:{value:e.account.passWord,callback:function(t){e.$set(e.account,"passWord",t)},expression:"account.passWord"}})],1),n("div",{staticClass:"forgot"},[e._v("忘记密码，点我找回")]),n("div",{staticClass:"btn-grounp"},[n("Button",{attrs:{type:"primary",long:""},on:{click:e.loginSubmit}},[e._v("登录")]),n("Button",{attrs:{long:""},on:{click:e.toggleRegister}},[e._v("注册")])],1)]):n("div",{attrs:{id:"register"}},[n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("账号")]),n("Input",{attrs:{placeholder:e.account.accountHolder,clearable:""},model:{value:e.account.accountNmae,callback:function(t){e.$set(e.account,"accountNmae",t)},expression:"account.accountNmae"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("密码")]),n("Input",{attrs:{placeholder:e.account.passHolder,type:"password",clearable:""},model:{value:e.account.passWord,callback:function(t){e.$set(e.account,"passWord",t)},expression:"account.passWord"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("确认密码")]),n("Input",{attrs:{placeholder:e.account.confirmPassHolder,type:"password",clearable:""},model:{value:e.account.confirmPassWord,callback:function(t){e.$set(e.account,"confirmPassWord",t)},expression:"account.confirmPassWord"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[e._v("验证码")]),n("Row",[n("Col",{attrs:{span:"14",type:"flex"}},[n("Input",{attrs:{placeholder:e.account.msgHolder},model:{value:e.account.msg,callback:function(t){e.$set(e.account,"msg",t)},expression:"account.msg"}})],1),n("Col",{attrs:{span:"6",offset:"4"}},[n("Button",{staticClass:"small-btn",attrs:{type:"primary"}},[e._v("验证码")])],1)],1)],1),n("div",{staticClass:"btn-grounp"},[n("Button",{attrs:{type:"primary",long:""}},[e._v("确认注册")]),n("Button",{attrs:{long:""},on:{click:e.toggleRegister}},[e._v("取消")])],1)])])])},y=[],k={data:function(){return{account:{accountName:"",accountHolder:"请输入您的账户",passWord:"",passHolder:"请输入您的密码",flowTitle:"登录",confirmPassWord:"",confirmPassHolder:"请再次确认密码",accountRegister:!1,msg:"",msgHolder:"验证码输入"}}},methods:{toggleRegister:function(){var e=this.account.accountRegister;!1===e?(console.log(123),this.account.accountRegister=!0):(console.log(222),this.account.accountRegister=!1)},loginSubmit:function(){sessionStorage.token="123123123123",this.navigatingTo("/home")}}},w=k,_=(n("06af"),Object(l["a"])(w,b,y,!1,null,"45688c22",null)),C=_.exports;a["default"].use(g["a"]);var x=[{path:"/",component:p,redirect:"/home",children:[{path:"/login",name:"Login",component:C},{path:"/home",name:"Home",component:function(e){n.e("chunk-14ee68eb").then(function(){var t=[n("16c0")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/order",name:"Order",component:function(e){n.e("chunk-f6ebcede").then(function(){var t=[n("634a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/account",name:"Account",component:function(e){n.e("chunk-923b595c").then(function(){var t=[n("3e1f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/notify",name:"Notify",component:function(e){n.e("chunk-1270bc98").then(function(){var t=[n("f508")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/user",name:"User",component:function(e){n.e("chunk-228939b3").then(function(){var t=[n("e382")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/user/setpassword",name:"Setpassword",component:function(e){n.e("chunk-6225f699").then(function(){var t=[n("3f3b")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]}]}],O=new g["a"]({mode:"history",base:"",routes:x}),P=O;a["default"].mixin({methods:{navigatingTo:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o=n[0],c=void 0===o?{}:o;if("{}"===JSON.stringify(c))"number"===typeof e?this.$router.go(e):this.$router.push(e);else{var r=c.query,s=void 0===r?{}:r,u=c.params,i=void 0===u?{}:u;this.$router.push({name:e,query:s,params:i})}}}});var S=n("cffa"),j=n("a5cf"),N=n("f825"),E=n.n(N);n("f8ce"),n("cd4d");a["default"].config.productionTip=!1,a["default"].use(E.a),a["default"].prototype.Tmax=S["a"],a["default"].prototype.Tline=j["c"],P.beforeEach((function(e,t,n){var a=sessionStorage.token;"Login"===e.name||a?n():n({name:"Login"})})),new a["default"]({router:P,render:function(e){return e(m)}}).$mount("#app")},cd4d:function(e,t,n){},dcdf:function(e,t,n){}});