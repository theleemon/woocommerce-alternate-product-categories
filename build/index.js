(window.webpackJsonp_rather_simple_woocommerce_alternate_product_categories=window.webpackJsonp_rather_simple_woocommerce_alternate_product_categories||[]).push([[1],{6:function(e,t,r){}}]),function(e){function t(t){for(var o,a,l=t[0],i=t[1],s=t[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={0:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp_rather_simple_woocommerce_alternate_product_categories=window.webpackJsonp_rather_simple_woocommerce_alternate_product_categories||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([7,1]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},,function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1),c=r(2),a=r(3),l=r(4),i=r(5),s=r.n(i);r(6);const u={title:Object(n.__)("Alternate Product Categories","rather-simple-woocommerce-alternate-product-categories"),description:Object(n.__)("An alternate product categories block.","rather-simple-woocommerce-alternate-product-categories"),icon:"category",category:"widgets",keywords:[Object(n.__)("woocommerce"),Object(n.__)("products"),Object(n.__)("categories")],supports:{html:!1},attributes:{count:{type:"boolean",default:!1},dropdown:{type:"boolean",default:!1}},transforms:{from:[{type:"block",blocks:["occ/alternate-product-categories"],isMatch:({idBase:e,instance:t})=>!(null==t||!t.raw)&&"rswapc"===e,transform:({instance:e})=>{var t;const r=createBlock("occ/alternate-product-categories",transform?transform(e.raw):void 0);return null!==(t=e.raw)&&void 0!==t&&t.title?[createBlock("core/heading",{content:e.raw.title}),r]:r}}]},edit:e=>{const t=e.attributes;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.InspectorControls,null,Object(o.createElement)(c.PanelBody,{title:Object(n.__)("Settings","rather-simple-woocommerce-alternate-product-categories")},Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Show product counts","rather-simple-woocommerce-alternate-product-categories"),checked:!!t.count,onChange:()=>{e.setAttributes({count:!e.attributes.count})}}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Show as dropdown","rather-simple-woocommerce-alternate-product-categories"),checked:!!t.dropdown,onChange:()=>{e.setAttributes({dropdown:!e.attributes.dropdown})}}))),Object(o.createElement)(c.Disabled,null,Object(o.createElement)(s.a,{block:"occ/alternate-product-categories",attributes:t,className:e.className})))},save:()=>null};Object(l.registerBlockType)("occ/alternate-product-categories",u)}]);