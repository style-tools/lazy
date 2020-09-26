(function(g,z,F){function C(a){try{a=JSON.parse(a)}catch(d){a=!1}return a}function m(a,d){return a.getAttribute("data-"+d)}function e(a,d,c){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var b=a[0];if("z"==b||"zb"==b)a={selector:a[3]||"[data-"+b+"]",src:b,base:a[1],webp:a[2]},"zb"==b&&(a.bg=!0);var g=a[6]||a.bg,e=a[0]||a.selector||"[data-src]",n=a[1]||a.threshold||a.observer,l=a[2]||a.rootMargin,q;n="object"==typeof n?n:{rootMargin:l||"0px",threshold:n||0};var k=a.src||"src",y=
a.srcset||"srcset";var t=a[5]||a.base||"";var B=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;b&&(k=b);var r=!1===a[3]||!1===a.webp?!1:!0;var w=a[4]||a.events||["click","mouseover","z"];if(d instanceof Array){var x=d[2];var A=d[1];d=d[0];A=A||d}if(1===d){d=!1;var E=!0}d=(d=!d&&g?function(a){function D(d){if(d&&1===h){if(d.matches)return;f.removeListener(D)}var b;h.forEach(function(a){b||("string"==typeof a&&(a=[a]),a[1]?(f=window.matchMedia(isNaN(a[1])?a[1]:"(max-width: "+a[1]+"px)"),f.matches?(b=a[0],
f.addListener(D)):f=!1):b=a[0])});b&&(r&&(b=u(b)),a.style.backgroundImage="url("+t+b+")")}var f,h=m(a,k);if(h){var d="["==h.substr(0,1)?C(h):0;d instanceof Array?(h=d,D()):(r&&(h=u(h)),a.style.backgroundImage="url("+t+h+")");a.removeAttribute("data-"+k)}}:!1)||function(a,b,f,d){if(b=m(a,k))if("["==b.substr(0,1)){if(b=C(b),r=r||!!b[3],f=b[1],d=b[2]||t,b=d+b[0],f){d=[];for(var c,h,e,g=0,n=f[1].length;g<n;g++)c=f[1][g],isNaN(c)||(c+="w"),e=!1,h=b,"string"===typeof c?c&&(e=c,h=b.replace(B,"-"+c+"$1")):
(h=t+f[0],e=c[1]),d.push(h+(e?" "+e:""));f=d.join(",")}}else b=t+b,f=m(a,y);f&&(r&&(f=u(f,a)),a.srcset=f,a.removeAttribute("data-srcset"));b&&(r&&(b=u(b,a)),a.src=b,a.removeAttribute("data-src"));x&&x(a)};c=c||function(a,b){for(var f,c,e=0,g=a.length;e<g;e++)if(f=a[e],(c=(b=b===f)||!p||f.isIntersecting)||A)f=!b&&p?f.target:f,c=(c?d:A)(f,p,c),p&&!1!==c&&p.unobserve(f)};"string"==typeof e?q=z.querySelectorAll(e):q=e&&e.length==F?[e]:e;if(-1===d)return q;var p=v&&!E?new v(c,n):!1;a=0;for(b=q.length;a<
b;a++)(function(a){function b(d){a.removeEventListener(d.type,b);c([a],a)}p?p.observe(a):c([a]);for(var d=0,e=w.length;d<e;d++)a.addEventListener(w[d],b,{passive:!0,once:!0})})(q[a]);return q}function E(a){B.push([].slice.call(arguments));return w(a,-1)}var l=z.currentScript||z.querySelectorAll("script[data-z]")[0];var v;var b="IntersectionObserverEntry"in g?g.IntersectionObserverEntry.prototype:0;b&&"intersectionRatio"in b&&"isIntersecting"in b&&(v=g.IntersectionObserver);g.$lazy=e;var x,k=new Image;
k.onload=k.onerror=function(){x=2==k.height};k.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var y,G=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var u=function(a,b,c){if(!x)return a;y||(y=m(z.body,"webp")||".webp");if(b&&(c=m(b,"webp"),"no"==c))return a;c=c?c:y;b&&(b.onerror=function(){this.onerror=null;this.src=a});return a.replace(G,c)};g.$zwebp=u;var B=[];if(!v){var c;g.$lazypoly?c=g.$lazypoly:l&&(c=m(l,"poly"));if(c){var w=e;g.$lazy=
e=E;"function"==typeof c&&(c=c());("string"!=typeof c&&"then"in c?c:$async.js(c)).then(function(){v=g.IntersectionObserver;g.$lazy=e=w;for(var a;a=B.shift();)e.apply(null,a)})}}if(l){(b=m(l,"z"))&&0===b.indexOf("||")?b=b.split("||"):b=[b];c=0;for(var H=b.length;c<H;c++)(l=C(b[c]))?e(l):e()}})(window,document);