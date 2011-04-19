/*!
  * snack.js (c) Ryan Florence
  * https://github.com/rpflorence/snack
  * MIT License
  * Inspiration and code adapted from
  *  MooTools      (c) Valerio Proietti   MIT license
  *  jQuery        (c) John Resig         Dual license MIT or GPL Version 2
  *  contentLoaded (c) Diego Perini       MIT License
  *  Zepto.js      (c) Thomas Fuchs       MIT License
*/typeof Object.create!="function"&&(Object.create=function(a){function b(){}b.prototype=a;return new b}),!function(a){var b=a.snack={},c=0,d=Object.prototype.toString;b.extend=function(){if(arguments.length===1)return b.extend(b,arguments[0]);var a=arguments[0];for(var c=1,d=arguments.length;c<d;c++)for(key in arguments[c])a[key]=arguments[c][key];return a},b.extend({v:"1.1.0",bind:function(a,b){return function(){return a.apply(b,arguments)}},punch:function(a,c,d,e){var f=a[c];a[c]=e?function(){f.apply(a,arguments);return d.apply(a,arguments)}:function(){var c=[].slice.call(arguments,0);c.unshift(b.bind(f,a));return d.apply(a,c)}},id:function(){return++c},each:function(a,b,c){if(a.length===undefined){for(var d in a)b.call(c,a[d],d,a);return a}for(var e=0,f=a.length;e<f;e++)b.call(c,a[e],e,a);return a},parseJSON:function(b){if(typeof b=="string"){b=b.replace(/^\s+|\s+$/g,"");var c=/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""));if(!c)throw"Invalid JSON";var d=a.JSON;return d&&d.parse?d.parse(b):(new Function("return "+b))()}},isArray:function(a){return d.call(a)==="[object Array]"},indexOf:[].indexOf?function(a,b){return[].indexOf.call(b,a)}:function(a,b){for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1}})}(window),!function(a,b){var c={},d;a.wrap=function(b,e){typeof b=="string"&&(b=d(b,e)),b.length||(b=[b]);var f=Object.create(c),g=0,h=b.length;for(;g<h;g++)f[g]=b[g];f.length=h,f.id=a.id();return f},a.extend(a.wrap,{define:function(b,d){if(typeof b!="string")for(i in b)a.wrap.define(i,b[i]);else c[b]=d},defineEngine:function(a){d=a}}),a.wrap.defineEngine(function(a,c){typeof c=="string"&&(c=b.querySelector(c));return(c||b).querySelectorAll(a)})}(snack,document),!function(a,b,c){function l(){try{i.doScroll("left")}catch(a){setTimeout(l,50);return}k("poll")}function k(d){if(d.type!="readystatechange"||c.readyState=="complete")(d.type=="load"?b:c)[e](f+d.type,k,!1),!g&&(g=!0)&&a.each(j,function(a){a.apply(c)})}var d=c.addEventListener?"addEventListener":"attachEvent",e=c.addEventListener?"removeEventListener":"detachEvent",f=c.addEventListener?"":"on",g=!1,h=!0,i=c.documentElement,j=[];a.extend({stopPropagation:function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}}),a.listener=function(b,g){b.delegate&&(b.capture=!0,_handler=g,g=function(d){var e=d.target||d.srcElement,f=typeof b.delegate=="string"?a.wrap(b.delegate,b.node):b.delegate(b.node);while(e&&a.indexOf(e,f)===-1)e=e.parentNode;e&&e!==this&&e!==c&&_handler.call(e,d,e)}),b.context&&(g=a.bind(g,b.context));var h={attach:function(){b.node[d](f+b.event,g,b.capture)},detach:function(){b.node[e](f+b.event,g,b.capture)},fire:function(){g.apply(b.node,arguments)}};h.attach();return h},a.ready=function(a){g?a.apply(c):j.push(a)};if(c.createEventObject&&i.doScroll){try{h=!b.frameElement}catch(m){}h&&l()}c[d](f+"DOMContentLoaded",k,!1),c[d](f+"readystatechange",k,!1),b[d](f+"load",k,!1)}(snack,window,document),!function(a){a.publisher=function(b){var c={};b=b||{},a.extend(b,{subscribe:function(b,d,e){var f={fn:d,ctxt:e||{}};c[b]||(c[b]=[]);var g={attach:function(){c[b].push(f)},detach:function(){c[b].splice(a.indexOf(d,c[b]),1)}};g.attach();return g},publish:function(b,d){if(!c[b])return!1;a.each(c[b],function(a){a.fn.apply(a.ctxt,d||[])});return c[b].length}});return b},a.publisher(a)}(snack),!function(a,b,c){function e(){}a.JSONP=function(b,d){var e="jsonp"+a.id(),f=c.createElement("script"),g=!1;a.JSONP[e]=function(b){g=!1,delete a.JSONP[e],d(b)},typeof b.data=="object"&&(b.data=a.toQueryString(b.data));var h={send:function(){g=!0,f.src=b.url+"?"+b.key+"=snack.JSONP."+e+"&"+b.data,c.getElementsByTagName("head")[0].appendChild(f)},cancel:function(){g&&f.parentNode&&f.parentNode.removeChild(f),g=!1,a.JSONP[e]=function(){delete a.JSONP[e]}}};b.now!==!1&&h.send();return h},a.toQueryString=function(b,c){var d=[];a.each(b,function(b,e){c&&(e=c+"["+e+"]");var f;switch(a.isArray(b)){case"object":f=a.toQueryString(b,e);break;case"array":var g={};a.each(b,function(a,b){g[b]=a}),f=a.toQueryString(g,e);break;default:f=e+"="+encodeURIComponent(b)}b!==null&&d.push(f)});return d.join("&")};var d=function(){var a=function(){return new XMLHttpRequest},b=function(){return new ActiveXObject("MSXML2.XMLHTTP")},c=function(){return new ActiveXObject("Microsoft.XMLHTTP")};try{a();return a}catch(d){try{b();return b}catch(d){c();return c}}}();a.request=function(b,c){if(!(this instanceof a.request))return new a.request(b,c);var e=this;e.options=a.extend({},e.options,b),e.callback=c,e.xhr=new d,e.headers=e.options.headers,e.options.now!==!1&&e.send()},a.request.prototype={options:{exception:e,url:"",data:"",method:"get",now:!0,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:!0,emulation:!0,urlEncoded:!0,encoding:"utf-8"},onStateChange:function(){var a=this,b=a.xhr;if(b.readyState==4&&!!a.running){a.running=!1,a.status=0;try{var c=b.status;a.status=c==1223?204:c}catch(d){}b.onreadystatechange=e;var f=a.status>=200&&a.status<300?[!1,a.xhr.responseText||"",a.xhr.responseXML]:[a.status];a.callback.apply(a,f)}},setHeader:function(a,b){this.headers[a]=b;return this},getHeader:function(a){try{return this.xhr.getResponseHeader(a)}catch(b){return null}},send:function(){var b=this,d=b.options;if(b.running)return b;b.running=!0;var e=d.data||"",f=String(d.url),g=d.method.toLowerCase();typeof e!="string"&&(e=a.toQueryString(e));if(d.emulation&&a.indexOf(g,["get","post"])<0){var h="_method="+g;e=e?h+"&"+e:h,g="post"}if(d.urlEncoded&&a.indexOf(g,["post","put"])>-1){var j=d.encoding?"; charset="+d.encoding:"";b.headers["Content-type"]="application/x-www-form-urlencoded"+j}f||(f=c.location.pathname);var k=f.lastIndexOf("/");k>-1&&(k=f.indexOf("#"))>-1&&(f=f.substr(0,k)),e&&g=="get"&&(f+=(f.indexOf("?")>-1?"&":"?")+e,e=null);var l=b.xhr;l.open(g.toUpperCase(),f,open.async,d.user,d.password),d.user&&"withCredentials"in l&&(l.withCredentials=!0),l.onreadystatechange=a.bind(b.onStateChange,b);for(i in b.headers)try{l.setRequestHeader(i,b.headers[i])}catch(m){d.exception.apply(b,[i,b.headers[i]])}l.send(e),d.async||b.onStateChange();return b},cancel:function(){var a=this;if(!a.running)return a;a.running=!1;var b=a.xhr;b.abort(),b.onreadystatechange=e,a.xhr=new d;return a}}}(snack,window,document),!function(a,b){function d(b,c,d,e){var f=b.data(d);f&&a.each(f,function(a){a[c].apply(b,e)});return b}function c(a){return a.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}a.wrap.define({data:function(){var a={};return function(b,c){var d=a[this.id];d||(d=a[this.id]={});if(c===undefined)return d[b];return d[b]=c}}(),each:function(b,c){return a.each(this,b,c)},addClass:function(a){return this.each(function(b){c(b.className).indexOf(a)>-1||(b.className=c(b.className+" "+a))})},removeClass:function(a){return this.each(function(b){b.className=b.className.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)"),"$1")})},attach:function(b,c,d){var e=b.split("."),f=[];e[1]&&(f=this.data(e[1])||[]),this.each(function(b){var g={node:b,event:e[0]};d&&(g.delegate=d),f.push(a.listener(g,c))}),e[1]&&this.data(e[1],f);return this},detach:function(a){d(this,"detach",a,null,!0),this.data(a,null);return this},fire:function(a,b){return d(this,"fire",a,b)},delegate:function(a,b,c){return this.attach(a,c,b)}})}(snack,document),!function(a,b){function R(a){var b=[],c=[],d,f=L.g(a)||L.s(a,a.split(C));f=f.slice(0);if(!f.length)return b;b=O(f.pop());if(!f.length)return b;for(e=b.length;e--;){n=b[e],j=n;for(d=f.length;d--;)parents:while(j!==B&&(j=j.parentNode))if(p=N.apply(j,M(f[d])))break parents;p&&c.push(n)}return c}function Q(a,b,c){switch(a){case"=":return b==c;case"^=":return b.match(K.g("^="+c)||K.s("^="+c,new RegExp("^"+P(c))));case"$=":return b.match(K.g("$="+c)||K.s("$="+c,new RegExp("$"+P(c))));case"*=":return b.match(K.g(c)||K.s(c,new RegExp(P(c))))}return!1}function P(a){return J.g(a)||J.s(a,a.replace(/([\.\*\+\?\^\$\{\}\(\)\|\[\]\/\\])/g,"\\$1"))}function O(a){var c=[],d=M(a),e=d[1]||"*",f=b.getElementsByTagName(e),g,h;for(g=0,h=f.length;g<h;g++)m=f[g],(r=N.apply(m,d))&&c.push(r);return c}function N(a,b,c,e,f,g,h){var j,k,l;if(b&&this.tagName.toLowerCase()!==b)return!1;if(c&&(j=c.match(v))&&j[1]!==this.id)return!1;if(c&&(q=c.match(w)))for(d=q.length;d--;){k=q[d].slice(1);if(!(I.g(k)||I.s(k,new RegExp("(^|\\s+)"+k+"(\\s+|$)"))).test(this.className))return!1}if(e&&!h){i=this.attributes;for(l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&(i[l].name||l)==f)return this}if(e&&!Q(g,this.getAttribute(f)||"",h))return!1;return this}function M(a){return a.match(F)}function G(a){k=[];for(d=0,o=a.length;d<o;d++)k[d]=a[d];return k}var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=/#([\w\-]+)/,w=/\.[\w\-]+/g,x=/^#([\w\-]+$)/,y=/^\.([\w\-]+)$/,z=/^([\w\-]+)$/,A=/^([\w]+)?\.([\w\-])+$/,B=b.getElementsByTagName("html")[0],C=/\s(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\])/,D=/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,E=/\[([\w\-]+)(?:([\^\$\*]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,F=new RegExp(D.source+"("+E.source+")?"),H=function(){this.c={}};H.prototype={g:function(a){return this.c[a]||undefined},s:function(a,b){this.c[a]=b;return b}};var I=new H,J=new H,K=new H,L=new H,S="compareDocumentPosition"in B?function(a,b){return(b.compareDocumentPosition(a)&16)==16}:"contains"in B?function(a,b){return b!==a&&b.contains(a)}:function(a,b){while(a=a.parentNode)if(a===b)return!0;return!1},T=function(){function a(c,d){d=typeof d=="string"?a(d)[0]:d;if(h=c.match(x))return[b.getElementById(h[1])];if(b.getElementsByClassName&&(h=c.match(y)))return G((d||b).getElementsByClassName(h[1]),0);return G((d||b).querySelectorAll(c),0)}if(b.querySelector&&b.querySelectorAll)return a;return function(a,c,d){c=typeof c=="string"?T(c)[0]:c||b;var f,g=[],i=[],j;if(h=a.match(x))return[b.getElementById(h[1])];if(h=a.match(z))return c.getElementsByTagName(h[1]);if(h=a.match(A)){s=c.getElementsByTagName(h[1]||"*"),k=I.g(h[2])||I.s(h[2],new RegExp("(^|\\s+)"+h[2]+"(\\s+|$)"));for(f=s.length;f--;)k.test(s[f].className)&&g.push(s[f]);return g}for(s=a.split(","),f=s.length;r=s[--f];)i[f]=R(r);for(f=i.length;u=i[--f];){var l=u;if(c!==b){l=[];for(e=u.length;j=u[--e];)S(j,c)&&l.push(j)}g=g.concat(l)}return g}}(),U=a.qwery;T.noConflict=function(){a.qwery=U;return this},a.qwery=T}(this,document),snack.qwery=qwery.noConflict(),snack.wrap.defineEngine(function(a,b){return snack.qwery(a,b)})