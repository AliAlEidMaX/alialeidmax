(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);o&&o(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var t,e=0;e<r.length;e++){for(var c=r[e],a=!0,s=1;s<c.length;s++){var l=c[s];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=c[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var c=a[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=a,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(c,a,function(e){return t[e]}.bind(null,a));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var o=l;r.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),n=(c("b0c0"),c("4c53"),{id:"app"}),r={class:"grid"},i={class:"col-sx"},s={class:"products"},l=Object(a["f"])("h2",null,"Products",-1),u={class:"products-list"},o={class:"box"},d={class:"title"},f={class:"price"},b={class:"col-dx"},p={class:"cart"},O=Object(a["f"])("h2",null,"Your Cart",-1),j={key:0,class:"cart-list"},h=Object(a["f"])("thead",null,[Object(a["f"])("tr",null,[Object(a["f"])("th",{class:"head-title"},"Product"),Object(a["f"])("th",{class:"head-price"},"Price"),Object(a["f"])("th",{class:"head-quantity"},"Quantity"),Object(a["f"])("th",{class:"head-total"},"Total")])],-1),v={class:"title"},y={class:"price"},m={class:"quantity"},g={class:"qty-handler"},k={class:"total"},w=Object(a["f"])("th",{colspan:"3"},[Object(a["f"])("h4",{class:"total-title"},"Total")],-1),x={key:1,class:"empty-contents"},q=Object(a["d"])('<div class="draw"><div class="cactus"><div class="arm"></div><div class="arm"></div></div><div class="cactus"><div class="arm"></div><div class="arm"></div></div><div class="cactus"><div class="arm"></div><div class="arm"></div></div><div class="sky"><div class="montain"></div><div class="montain two"></div><div class="sun"></div></div></div><p class="no-items-text">Your cart is actually empty</p>',2);function P(t,e){return Object(a["g"])(),Object(a["c"])("div",n,[Object(a["f"])("header",null,[Object(a["f"])("h1",null,Object(a["i"])(t.appTitle),1)]),Object(a["f"])("div",r,[Object(a["f"])("div",i,[Object(a["f"])("div",s,[l,Object(a["f"])("ul",u,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(t.products,(function(e,c){return Object(a["g"])(),Object(a["c"])("li",{class:"product",key:"ind-"+c},[Object(a["f"])("div",o,[Object(a["f"])("img",{class:"image",src:e.image.data.thumbnails[3].url},null,8,["src"]),Object(a["f"])("h3",d,Object(a["i"])(e.name),1),Object(a["f"])("p",f,Object(a["i"])(t.currency(e.price)),1),Object(a["f"])("button",{onClick:function(c){return t.addItem(e)}},"أضف إلى السلة",8,["onClick"])])])})),128))])])]),Object(a["f"])("div",b,[Object(a["f"])("div",p,[O,t.cart.length?(Object(a["g"])(),Object(a["c"])("table",j,[h,Object(a["f"])("tbody",null,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(t.cart,(function(e,c){return Object(a["g"])(),Object(a["c"])("tr",{class:"cart-item",key:"id-"+c},[Object(a["f"])("td",null,[Object(a["f"])("h4",v,Object(a["i"])(e.name),1)]),Object(a["f"])("td",null,[Object(a["f"])("div",y,Object(a["i"])(t.currency(e.price)),1)]),Object(a["f"])("td",null,[Object(a["f"])("div",m,[Object(a["e"])(Object(a["i"])(e.quantity),1),Object(a["f"])("span",g,[Object(a["f"])("span",{onClick:function(c){return t.add(e)}},"+",8,["onClick"]),Object(a["f"])("span",{onClick:function(c){return t.sub(e)}},"-",8,["onClick"])])])]),Object(a["f"])("td",null,[Object(a["f"])("div",k,Object(a["i"])(t.currency(e.price*e.quantity)),1)])])})),128))]),Object(a["f"])("tfoot",null,[Object(a["f"])("tr",null,[w,Object(a["f"])("th",null,Object(a["i"])(t.currency(t.total)),1)])])])):(Object(a["g"])(),Object(a["c"])("div",x,[q]))])])])])}c("a434"),c("b680"),c("96cf");var C=c("1da1"),T=c("bc3a"),_=c.n(T),S={mounted:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){var e,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Accept:"application/json"}},t.next=3,_.a.get("http://206.189.251.72/ali/items/shop/1?fields=products.id,products.name,products.price,name,products.image.data.full_url",e);case 3:c=t.sent,console.log("ssss"),console.log(c.data["data"]["products"]),this.products=c.data["data"]["products"],this.appTitle=c.data["data"]["name"];case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),name:"App",components:{},data:function(){return{appTitle:"My Vue Shop",products:[],cart:[],total:0}},methods:{addItem:function(t){this.total+=t.price;for(var e=!1,c=0;c<this.cart.length;c++)if(this.cart[c].id===t.id){e=!0,this.cart[c].quantity++;break}e||this.cart.push({id:t.id,name:t.name,price:t.price,quantity:1})},add:function(t){this.total+=t.price,t.quantity++},sub:function(t){if(this.total-=t.price,t.quantity>1)t.quantity--;else for(var e=0;e<this.cart.length;e++)if(this.cart[e].id===t.id){this.cart.splice(e,1);break}},currency:function(t){return"€"+t.toFixed(2)}}};c("64be");S.render=P;var M=S;c("c898");Object(a["b"])(M).mount("#app")},"64be":function(t,e,c){"use strict";c("c894")},c894:function(t,e,c){},c898:function(t,e,c){}});
//# sourceMappingURL=app.79397976.js.map