(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14ee68eb"],{"16c0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Layout",{style:{minHeight:"100vh"}},[a("Sider",{attrs:{collapsible:"","collapsed-width":78,id:"sidebar"},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[a("div",{on:{click:t.toUser}},[a("Avatar",{attrs:{size:"large"}},[t._v(t._s(t.userInfo.userName?t.userInfo.userName:"用户"))])],1),a("Tag",{attrs:{color:t.userInfo.tagColor}},[t._v(t._s(t.userInfo.identity))]),a("Menu",{class:t.menuitemClasses,attrs:{"active-name":t.activeItem,theme:"dark",width:"100%"},on:{"on-select":t.checkActive}},[a("MenuItem",{attrs:{name:"order"}},[a("Icon",{attrs:{type:"ios-cart"}}),a("span",[t._v("我的订单")])],1),a("MenuItem",{attrs:{name:"account"}},[a("Icon",{attrs:{type:"ios-card"}}),a("span",[t._v("我的账户")])],1),a("MenuItem",{attrs:{name:"notify"}},[a("Icon",{attrs:{type:"md-notifications"}}),a("span",[t._v("我的通知")])],1)],1)],1),a("Menu",{class:t.menuitemClasses,attrs:{"active-name":t.activeItem,mode:"horizontal",theme:"dark",id:"moblie-bar",width:"100%"},on:{"on-select":t.checkActive}},[a("div",{staticClass:"avatar-box",on:{click:t.toUser}},[a("Avatar",{attrs:{icon:"ios-person"}})],1),a("Tag",{attrs:{color:t.userInfo.tagColor}},[t._v(t._s(t.userInfo.identity))]),a("div",{staticClass:"layout-nav"},[a("MenuItem",{attrs:{name:"order"}},[a("Icon",{attrs:{type:"ios-cart"}})],1),a("MenuItem",{attrs:{name:"account"}},[a("Icon",{attrs:{type:"ios-card"}})],1),a("MenuItem",{attrs:{name:"notify"}},[a("Icon",{attrs:{type:"md-notifications"}})],1)],1)],1),a("Layout",[a("div",{staticClass:"child-page"},[0===t.accessability?a("div",[t._v("申请角色")]):1===t.accessability?a("div",[t._v("等待审核")]):a("div",[a("router-view")],1)])])],1)],1)},i=[],n={data:function(){return{isCollapsed:!1,userInfo:{identity:"资金方",tagColor:"#2b90d9",userName:"zhang"},activeItem:"order",accessability:3,notiCount:3}},watch:{activeItem:function(t){console.log(t),3===this.accessability&&this.navigatingTo("/".concat(t))}},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{checkActive:function(t){this.activeItem=t},toUser:function(){this.activeItem="user"}}},o=n,c=(a("e6b6"),a("2877")),r=Object(c["a"])(o,s,i,!1,null,"52d60bd0",null);e["default"]=r.exports},a417:function(t,e,a){},e6b6:function(t,e,a){"use strict";var s=a("a417"),i=a.n(s);i.a}}]);