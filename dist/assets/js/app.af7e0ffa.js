(function(t){function e(e){for(var a,o,s=e[0],u=e[1],i=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},c={app:0},r=[];function s(t){return u.p+"assets/js/"+({}[t]||t)+"."+{"chunk-1270bc98":"67796e6a","chunk-69d501a4":"e4471a6f","chunk-f6ebcede":"ce4f6ffe","chunk-fe5c4b2e":"09538180"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-1270bc98":1,"chunk-69d501a4":1,"chunk-f6ebcede":1,"chunk-fe5c4b2e":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="assets/css/"+({}[t]||t)+"."+{"chunk-1270bc98":"946c2b42","chunk-69d501a4":"bd97ae5a","chunk-f6ebcede":"df221587","chunk-fe5c4b2e":"7e81fe91"}[t]+".css",c=u.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===a||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],p.parentNode.removeChild(p),n(r)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}c[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06af":function(t,e,n){"use strict";var a=n("dcdf"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("index")],1)},c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},s=[],u={data:function(){return{userLogin:!1}}},i=u,l=n("2877"),d=Object(l["a"])(i,r,s,!1,null,null,null),p=d.exports,f={components:{index:p}},h=f,v=Object(l["a"])(h,o,c,!1,null,null,null),m=v.exports,g=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-pannel"},[n("div",{staticClass:"flow-title super-font"},[t._v(t._s(!1===t.account.accountRegister?"登录":"注册"))]),0==t.account.accountRegister?n("div",{attrs:{id:"login"}},[n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("账号")]),n("Input",{attrs:{placeholder:t.account.accountHolder,clearable:""},model:{value:t.account.accountNmae,callback:function(e){t.$set(t.account,"accountNmae",e)},expression:"account.accountNmae"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("密码")]),n("Input",{attrs:{placeholder:t.account.passHolder,type:"password",clearable:""},model:{value:t.account.passWord,callback:function(e){t.$set(t.account,"passWord",e)},expression:"account.passWord"}})],1),n("div",{staticClass:"forgot"},[t._v("忘记密码，点我找回")]),n("div",{staticClass:"btn-grounp"},[n("Button",{attrs:{type:"primary",long:""},on:{click:t.loginSubmit}},[t._v("登录")]),n("Button",{attrs:{long:""},on:{click:t.toggleRegister}},[t._v("注册")])],1)]):n("div",{attrs:{id:"register"}},[n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("账号")]),n("Input",{attrs:{placeholder:t.account.accountHolder,clearable:""},model:{value:t.account.accountNmae,callback:function(e){t.$set(t.account,"accountNmae",e)},expression:"account.accountNmae"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("密码")]),n("Input",{attrs:{placeholder:t.account.passHolder,type:"password",clearable:""},model:{value:t.account.passWord,callback:function(e){t.$set(t.account,"passWord",e)},expression:"account.passWord"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("确认密码")]),n("Input",{attrs:{placeholder:t.account.confirmPassHolder,type:"password",clearable:""},model:{value:t.account.confirmPassWord,callback:function(e){t.$set(t.account,"confirmPassWord",e)},expression:"account.confirmPassWord"}})],1),n("div",{staticClass:"handle-input"},[n("div",{staticClass:"label"},[t._v("验证码")]),n("Row",[n("Col",{attrs:{span:"14",type:"flex"}},[n("Input",{attrs:{placeholder:t.account.msgHolder},model:{value:t.account.msg,callback:function(e){t.$set(t.account,"msg",e)},expression:"account.msg"}})],1),n("Col",{attrs:{span:"6",offset:"4"}},[n("Button",{staticClass:"small-btn",attrs:{type:"primary"}},[t._v("验证码")])],1)],1)],1),n("div",{staticClass:"btn-grounp"},[n("Button",{attrs:{type:"primary",long:""}},[t._v("确认注册")]),n("Button",{attrs:{long:""},on:{click:t.toggleRegister}},[t._v("取消")])],1)])])])},y=[],k={data:function(){return{account:{accountName:"",accountHolder:"请输入您的账户",passWord:"",passHolder:"请输入您的密码",flowTitle:"登录",confirmPassWord:"",confirmPassHolder:"请再次确认密码",accountRegister:!1,msg:"",msgHolder:"验证码输入"}}},methods:{toggleRegister:function(){var t=this.account.accountRegister;!1===t?(console.log(123),this.account.accountRegister=!0):(console.log(222),this.account.accountRegister=!1)},loginSubmit:function(){sessionStorage.token="123123123123",this.navigatingTo("/home")}}},_=k,C=(n("06af"),Object(l["a"])(_,b,y,!1,null,"45688c22",null)),w=C.exports;a["default"].use(g["a"]);var x=[{path:"/",component:p,redirect:"/home",children:[{path:"/login",name:"Login",component:w},{path:"/home",name:"Home",component:function(t){n.e("chunk-fe5c4b2e").then(function(){var e=[n("16c0")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/order",name:"Order",component:function(t){n.e("chunk-f6ebcede").then(function(){var e=[n("634a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/account",name:"Account",component:function(t){n.e("chunk-69d501a4").then(function(){var e=[n("3e1f")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/notify",name:"Notify",component:function(t){n.e("chunk-1270bc98").then(function(){var e=[n("f508")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]}],O=new g["a"]({mode:"history",base:"",routes:x}),P=O;a["default"].mixin({methods:{navigatingTo:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var o=n[0],c=void 0===o?{}:o;if("{}"===JSON.stringify(c))"number"===typeof t?this.$router.go(t):this.$router.push(t);else{var r=c.query,s=void 0===r?{}:r,u=c.params,i=void 0===u?{}:u;this.$router.push({name:t,query:s,params:i})}}}});var j=n("cffa"),N=n("a5cf"),S=n("f825"),E=n.n(S);n("f8ce"),n("cd4d");a["default"].config.productionTip=!1,a["default"].use(E.a),a["default"].prototype.Tmax=j["a"],a["default"].prototype.Tline=N["c"],P.beforeEach((function(t,e,n){var a=sessionStorage.token;"Login"===t.name||a?n():n({name:"Login"})})),new a["default"]({router:P,render:function(t){return t(m)}}).$mount("#app")},cd4d:function(t,e,n){},dcdf:function(t,e,n){}});