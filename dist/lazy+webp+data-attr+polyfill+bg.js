(function(n,E,S){function F(a){try{var c=JSON.parse(a)}catch(k){c=a}return c}function p(a,c){return a.getAttribute("data-"+c)}function G(a,c){return"/"===a[0]||T.test(a)?a:(c?c:"")+a}function t(a,c,k){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var u=a[0];if("z"==u||"zb"==u)a={selector:a[3]||"[data-"+u+"]",src:u,base:a[1],webp:a[2]},"zb"==u&&(a.bg=!0);var U=a[6]||a.bg,x=a[0]||a.selector||"[data-src]",A=a[1]||a.threshold||a.observer,V=a[2]||a.rootMargin,y;A="object"==typeof A?
A:{rootMargin:V||"0px",threshold:A||0};var B=a.src||"src",M=a.srcset||"srcset";var H=a[5]||a.base||N;var W=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;u&&(B=u);var z=!1===a[3]||!1===a.webp?!1:!0;if(c instanceof Array){var O=c[2];var I=c[1];c=c[0];I=I||c}if(1===c){c=!1;var X=!0}c=(c=!c&&U?function(e){function b(m){if(m&&1===f){if(m.matches)return;d.removeListener(b)}var l;f.forEach(function(g){l||("string"==typeof g&&(g=[g]),g[1]?(d=window.matchMedia(isNaN(g[1])?g[1]:"(max-width: "+g[1]+"px)"),d.matches?
(l=g[0],d.addListener(b)):d=!1):l=g[0])});l&&(z&&(l=C(l)),e.style.backgroundImage="url("+G(l,H)+")")}var d,f=p(e,B);if(f){var v="["==f.substr(0,1)?F(f):0;v instanceof Array?(f=v,b()):(z&&(f=C(f)),e.style.backgroundImage="url("+G(f,H)+")");e.removeAttribute("data-"+B)}}:c)||function(e,b,d,f,v){b=p(e,B);d=!1;if(b)if("["==b.substr(0,1)){if(b=F(b),z=z||!!b[3],d=b[1],f=b[2]||H,b=G(b[0],f),v=b[3]||b,d){f=[];for(var m,l,g,K=0,Y=d.length;K<Y;K++)m=d[K],isNaN(m)||(m+="w"),g=!1,l=b,"string"===typeof m?m&&(g=
m,l=b.replace(W,"-"+m+"$1")):(l=b,g=m[1]),f.push(l+(g?" "+g:""));f.push(v);d=f.join(",")}}else b=G(b,H),d=p(e,M);d&&(z&&(d=C(d,e)),e.srcset=d,e.removeAttribute("data-"+M));b&&(z&&(b=C(b,e)),e.src=b,e.removeAttribute("data-"+B));O&&O(e)};k=k||function(e){for(var b,d,f=0,v=e.length;f<v;f++)if(b=e[f],(d=!w||b.isIntersecting)||I)b=w?b.target:b,d=(d?c:I)(b,w,d),w&&!1!==d&&w.unobserve(b)};"string"==typeof x?y=E.querySelectorAll(x):y=x&&x.length==S?[x]:x;if(-1===c)return y;var w=D&&!X?new D(k,A):!1;y&&y.forEach(function(e){w?
w.observe(e):k([e])});return y}function Z(a){P.push([].slice.call(arguments));return Q(a,-1)}var r=E.currentScript||E.querySelectorAll("script[data-z]")[0];var D;var q="IntersectionObserverEntry"in n?n.IntersectionObserverEntry.prototype:0;var N="",T=/^[a-z]+:\/\//i;q&&"intersectionRatio"in q&&"isIntersecting"in q&&(D=n.IntersectionObserver);n.$lazy=t;var R,J=new Image;J.onload=J.onerror=function(){R=2==J.height};J.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
var L,aa=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var C=function(a,c,k){if(!R)return a;L||(L=p(E.body,"webp")||".webp");if(c&&(k=p(c,"webp"),"no"==k))return a;k=k?k:L;c&&(c.onerror=function(){this.onerror=null;this.src=a});return a.replace(aa,k)};n.$zwebp=C;var P=[];if(!D){var h;n.$lazypoly?h=n.$lazypoly:r&&(h=p(r,"poly"));if(h){var Q=t;n.$lazy=t=Z;"function"==typeof h&&(h=h());("string"!=typeof h&&"then"in h?h:$async.js(h)).then(function(){D=n.IntersectionObserver;n.$lazy=t=Q;for(var a;a=P.shift();)t.apply(null,
a)})}}if(r){(q=p(r,"z"))?q=[q]:q=F(p(r,"zz"));N=p(r,"b");h=0;for(var ba=q.length;h<ba;h++)(r=F(q[h]))?t(r):t()}})(window,document);
