(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{217:function(n,t,e){n.exports=e.p+"img/domain@2x.383b52a.png"},218:function(n,t,e){n.exports=e.p+"img/kolle@2x.73a8a39.png"},219:function(n,t,e){n.exports=e.p+"img/questionmark@2x.075ee20.png"},220:function(n,t,e){n.exports=e.p+"img/spotify@2x.9f252f1.png"},221:function(n,t,e){n.exports=e.p+"img/talisker@2x.5f5a5db.png"},222:function(n,t,e){n.exports=e.p+"img/ticket@2x.844c8a8.png"},228:function(n,t,e){n.exports=e.p+"img/domain.303ed77.png"},229:function(n,t,e){n.exports=e.p+"img/domain_o.99d29cb.png"},230:function(n,t,e){n.exports=e.p+"img/kolle.178e3eb.png"},231:function(n,t,e){n.exports=e.p+"img/kolle_o.65018f9.png"},232:function(n,t,e){n.exports=e.p+"img/questionmark.fc7fb74.png"},233:function(n,t,e){n.exports=e.p+"img/questionmark_o.e7b8d51.png"},234:function(n,t,e){n.exports=e.p+"img/spotify.025f9ff.png"},235:function(n,t,e){n.exports=e.p+"img/spotify_o.2f1749b.png"},236:function(n,t,e){n.exports=e.p+"img/talisker.d08ed97.png"},237:function(n,t,e){n.exports=e.p+"img/talisker_o.f69afbf.png"},238:function(n,t,e){n.exports=e.p+"img/ticket.895fa2b.png"},239:function(n,t,e){n.exports=e.p+"img/ticket_o.652c16a.png"},260:function(n,t,e){var map={"./domain.png":228,"./domain@2x.png":217,"./domain_o.png":229,"./kolle.png":230,"./kolle@2x.png":218,"./kolle_o.png":231,"./questionmark.png":232,"./questionmark@2x.png":219,"./questionmark_o.png":233,"./spotify.png":234,"./spotify@2x.png":220,"./spotify_o.png":235,"./talisker.png":236,"./talisker@2x.png":221,"./talisker_o.png":237,"./ticket.png":238,"./ticket@2x.png":222,"./ticket_o.png":239};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=260},261:function(n,t,e){var map={"./domain@2x.png":217,"./kolle@2x.png":218,"./questionmark@2x.png":219,"./spotify@2x.png":220,"./talisker@2x.png":221,"./ticket@2x.png":222};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=261},298:function(n,t,e){"use strict";e.r(t);e(142);var o=e(104),r={props:{name:{type:String,required:!0},slug:{type:String,default:"kolle"},description:{type:String,required:!0},price:{type:Number,required:!0}},setup:function(n){return{textPrice:Object(o.computed)((function(){if(-1===n.price)return"???? €";var t=n.price/100;return"".concat(t.toFixed(2).toLocaleString()," €")})),imageSources:Object(o.computed)((function(){return{src:e(260)("./".concat(n.slug,".png")),srcset:"".concat(e(261)("./".concat(n.slug,"@2x.png"))," 2x")}}))}}},c=e(41),component=Object(c.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("button",{staticClass:"flex flex-col md:flex-row items-center my-8 border border-gray-300 hover:border-gray-500 shadow-lg p-4 w-full hover:shadow-2xl transition-all duration-200 ease-linear",attrs:{name:n.name}},[e("span",{staticClass:"flex flex-no-shrink flex-col md:mr-8 mb-4 md:mb-0"},[e("img",n._b({staticClass:"rounded-full border border-gray-500",attrs:{alt:n.name}},"img",n.imageSources,!1))]),n._v(" "),e("span",{staticClass:"text-center md:text-left"},[e("span",{staticClass:"block text-2xl font-bold py-3"},[n._v("\n      "+n._s(n.textPrice)+" — "+n._s(n.name)+"\n    ")]),n._v(" "),e("span",{domProps:{textContent:n._s(n.description)}})])])}),[],!1,null,null,null);t.default=component.exports}}]);