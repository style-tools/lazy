(function(c,r,B){function A(a){try{a=JSON.parse(a)}catch(e){a=!1}return a}function m(a,e){return a.getAttribute("data-"+e)}function f(a,e,d){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var b=a[0];if("z"==b||"zb"==b)a={selector:a[3]||"[data-"+b+"]",src:b,base:a[1],webp:a[2]},"zb"==b&&(a.bg=!0);var c=a[0]||a.selector||"[data-src]",f=a[1]||a.threshold||a.observer,x=a[2]||a.rootMargin,h;f="object"==typeof f?f:{rootMargin:x||"0px",threshold:f||0};var l=a.src||"src",q=a.srcset||"srcset";
var y=a[5]||a.base||"";var v=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;b&&(l=b);var t=!1===a[3]||!1===a.webp?!1:!0;if(e instanceof Array){var p=e[2];var u=e[1];e=e[0];u=u||e}if(1===e){e=!1;var w=!0}e=e||function(a,g,b,c){if(g=m(a,l))if("["==g.substr(0,1)){if(g=A(g),t=t||!!g[3],b=g[1],c=g[2]||y,g=c+g[0],b){c=[];for(var e,d,f,h=0,x=b[1].length;h<x;h++)e=b[1][h],isNaN(e)||(e+="w"),f=!1,d=g,"string"===typeof e?e&&(f=e,d=g.replace(v,"-"+e+"$1")):(d=y+b[0],f=e[1]),c.push(d+(f?" "+f:""));b=c.join(",")}}else g=
y+g,b=m(a,q);b&&(t&&(b=z(b,a)),a.srcset=b,a.removeAttribute("data-srcset"));g&&(t&&(g=z(g,a)),a.src=g,a.removeAttribute("data-src"));p&&p(a)};d=d||function(a){for(var b,c,d=0,f=a.length;d<f;d++)if(b=a[d],(c=!k||b.isIntersecting)||u)b=k?b.target:b,c=(c?e:u)(b,k,c),k&&!1!==c&&k.unobserve(b)};"string"==typeof c?h=r.querySelectorAll(c):h=c&&c.length==B?[c]:c;if(-1===e)return h;var k=n&&!w?new n(d,f):!1;b=0;for(a=h.length;b<a;b++)c=h[b],k?k.observe(c):d([c]);return h}function C(a){v.push([].slice.call(arguments));
return p(a,-1)}var h=r.currentScript||r.querySelectorAll("script[data-z]")[0];var n;var b="IntersectionObserverEntry"in c?c.IntersectionObserverEntry.prototype:0;b&&"intersectionRatio"in b&&"isIntersecting"in b&&(n=c.IntersectionObserver);c.$lazy=f;var w,l=new Image;l.onload=l.onerror=function(){w=2==l.height};l.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var q,D=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var z=function(a,b,c){if(!w)return a;
q||(q=m(r.body,"webp")||".webp");if(b&&(c=m(b,"webp"),"no"==c))return a;c=c?c:q;b&&(b.onerror=function(){this.onerror=null;this.src=a});return a.replace(D,c)};c.$zwebp=z;var v=[];if(!n){var d;c.$lazypoly?d=c.$lazypoly:h&&(d=m(h,"poly"));if(d){var p=f;c.$lazy=f=C;"function"==typeof d&&(d=d());("string"!=typeof d&&"then"in d?d:$async.js(d)).then(function(){n=c.IntersectionObserver;c.$lazy=f=p;for(var a;a=v.shift();)f.apply(null,a)})}}if(h){(b=m(h,"z"))&&0===b.indexOf("||")?b=b.split("||"):b=[b];d=0;
for(var E=b.length;d<E;d++)(h=A(b[d]))?f(h):f()}})(window,document);
