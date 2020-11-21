(function(p,E,T){function F(a){try{var d=JSON.parse(a)}catch(k){d=a}return d}function q(a,d){return a.getAttribute("data-"+d)}function G(a,d){return"/"===a[0]||U.test(a)?a:(d?d:"")+a}function u(a,d,k){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var v=a[0];if("z"==v||"zb"==v)a={selector:a[3]||"[data-"+v+"]",src:v,base:a[1],webp:a[2]},"zb"==v&&(a.bg=!0);var V=a[6]||a.bg,x=a[0]||a.selector||"[data-src]",A=a[1]||a.threshold||a.observer,W=a[2]||a.rootMargin,y;A="object"==typeof A?
A:{rootMargin:W||"0px",threshold:A||0};var B=a.src||"src",M=a.srcset||"srcset";var H=a[5]||a.base||N;var X=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;v&&(B=v);var z=!1===a[3]||!1===a.webp?!1:!0;var O=a[4]||a.events||["click","mouseover","z"];if(d instanceof Array){var P=d[2];var I=d[1];d=d[0];I=I||d}if(1===d){d=!1;var Y=!0}d=(d=!d&&V?function(e){function b(l){if(l&&1===f){if(l.matches)return;c.removeListener(b)}var m;f.forEach(function(g){m||("string"==typeof g&&(g=[g]),g[1]?(c=window.matchMedia(isNaN(g[1])?
g[1]:"(max-width: "+g[1]+"px)"),c.matches?(m=g[0],c.addListener(b)):c=!1):m=g[0])});m&&(z&&(m=C(m)),e.style.backgroundImage="url("+G(m,H)+")")}var c,f=q(e,B);if(f){var n="["==f.substr(0,1)?F(f):0;n instanceof Array?(f=n,b()):(z&&(f=C(f)),e.style.backgroundImage="url("+G(f,H)+")");e.removeAttribute("data-"+B)}}:d)||function(e,b,c,f,n){b=q(e,B);c=!1;if(b)if("["==b.substr(0,1)){if(b=F(b),z=z||!!b[3],c=b[1],f=b[2]||H,b=G(b[0],f),n=b[3]||b,c){f=[];for(var l,m,g,K=0,Z=c.length;K<Z;K++)l=c[K],isNaN(l)||
(l+="w"),g=!1,m=b,"string"===typeof l?l&&(g=l,m=b.replace(X,"-"+l+"$1")):(m=b,g=l[1]),f.push(m+(g?" "+g:""));f.push(n);c=f.join(",")}}else b=G(b,H),c=q(e,M);c&&(z&&(c=C(c,e)),e.srcset=c,e.removeAttribute("data-"+M));b&&(z&&(b=C(b,e)),e.src=b,e.removeAttribute("data-"+B));P&&P(e)};k=k||function(e,b){for(var c,f,n=0,l=e.length;n<l;n++)if(c=e[n],(f=(b=b===c)||!w||c.isIntersecting)||I)c=!b&&w?c.target:c,f=(f?d:I)(c,w,f),w&&!1!==f&&w.unobserve(c)};"string"==typeof x?y=E.querySelectorAll(x):y=x&&x.length==
T?[x]:x;if(-1===d)return y;var w=D&&!Y?new D(k,A):!1;y&&y.forEach(function(e){function b(n){e.removeEventListener(n.type,b);k([e],e)}w?w.observe(e):k([e]);for(var c=0,f=O.length;c<f;c++)e.addEventListener(O[c],b,{passive:!0,once:!0})});return y}function aa(a){Q.push([].slice.call(arguments));return R(a,-1)}var t=E.currentScript||E.querySelectorAll("script[data-z]")[0];var D;var r="IntersectionObserverEntry"in p?p.IntersectionObserverEntry.prototype:0;var N="",U=/^[a-z]+:\/\//i;r&&"intersectionRatio"in
r&&"isIntersecting"in r&&(D=p.IntersectionObserver);p.$lazy=u;var S,J=new Image;J.onload=J.onerror=function(){S=2==J.height};J.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var L,ba=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var C=function(a,d,k){if(!S)return a;L||(L=q(E.body,"webp")||".webp");if(d&&(k=q(d,"webp"),"no"==k))return a;k=k?k:L;d&&(d.onerror=function(){this.onerror=null;this.src=a});return a.replace(ba,k)};p.$zwebp=C;var Q=
[];if(!D){var h;p.$lazypoly?h=p.$lazypoly:t&&(h=q(t,"poly"));if(h){var R=u;p.$lazy=u=aa;"function"==typeof h&&(h=h());("string"!=typeof h&&"then"in h?h:$async.js(h)).then(function(){D=p.IntersectionObserver;p.$lazy=u=R;for(var a;a=Q.shift();)u.apply(null,a)})}}if(t){(r=q(t,"z"))?r=[r]:r=F(q(t,"zz"));N=q(t,"b");h=0;for(var ca=r.length;h<ca;h++)(t=F(r[h]))?u(t):u()}})(window,document);
