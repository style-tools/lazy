(function(m,C,P){function D(a){try{var c=JSON.parse(a)}catch(l){c=a}return c}function p(a,c){return a.getAttribute("data-"+c)}function E(a,c){return"/"===a[0]||Q.test(a)?a:(c?c:"")+a}function H(a,c,l){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var n=a[0];if("z"==n||"zb"==n)a={selector:a[3]||"[data-"+n+"]",src:n,base:a[1],webp:a[2]},"zb"==n&&(a.bg=!0);var I=a[6]||a.bg,u=a[0]||a.selector||"[data-src]",y=a[1]||a.threshold||a.observer,R=a[2]||a.rootMargin,v;y="object"==typeof y?
y:{rootMargin:R||"0px",threshold:y||0};var z=a.src||"src",L=a.srcset||"srcset";var A=a[5]||a.base||M;var S=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;n&&(z=n);var w=!1===a[3]||!1===a.webp?!1:!0;if(c instanceof Array){var N=c[2];var F=c[1];c=c[0];F=F||c}if(1===c){c=!1;var T=!0}c=(c=!c&&I?function(f){function b(q){if(q&&1===e){if(q.matches)return;d.removeListener(b)}var g;e.forEach(function(h){g||("string"==typeof h&&(h=[h]),h[1]?(d=window.matchMedia(isNaN(h[1])?h[1]:"(max-width: "+h[1]+"px)"),d.matches?
(g=h[0],d.addListener(b)):d=!1):g=h[0])});g&&(w&&(g=B(g)),f.style.backgroundImage="url("+E(g,A)+")")}var d,e=p(f,z);if(e){var k="["==e.substr(0,1)?D(e):0;k instanceof Array?(e=k,b()):(w&&(e=B(e)),f.style.backgroundImage="url("+E(e,A)+")");f.removeAttribute("data-"+z)}}:!1)||function(f,b,d,e){b=p(f,z);d=!1;if(b)if("["==b.substr(0,1)){if(b=D(b),w=w||!!b[3],d=b[1],e=b[2]||A,b=e+b[0],d){e=[];for(var k,q,g,h=0,U=d[1].length;h<U;h++)k=d[1][h],isNaN(k)||(k+="w"),g=!1,q=b,"string"===typeof k?k&&(g=k,q=b.replace(S,
"-"+k+"$1")):(q=E(d[0],A),g=k[1]),e.push(q+(g?" "+g:""));d=e.join(",")}}else b=E(b,A),d=p(f,L);d&&(w&&(d=B(d,f)),f.srcset=d,f.removeAttribute("data-"+L));b&&(w&&(b=B(b,f)),f.src=b,f.removeAttribute("data-"+z));N&&N(f)};l=l||function(f){for(var b,d,e=0,k=f.length;e<k;e++)if(b=f[e],(d=!r||b.isIntersecting)||F)b=r?b.target:b,d=(d?c:F)(b,r,d),r&&!1!==d&&r.unobserve(b)};"string"==typeof u?v=C.querySelectorAll(u):v=u&&u.length==P?[u]:u;if(-1===c)return v;var r=J&&!T?new J(l,y):!1;n=0;for(I=v.length;n<I;n++)a=
v[n],r?r.observe(a):l([a]);return v}var x=C.currentScript||C.querySelectorAll("script[data-z]")[0];var J,t="IntersectionObserverEntry"in m?m.IntersectionObserverEntry.prototype:0,M="",Q=/^[a-z]+:\/\//i;t&&"intersectionRatio"in t&&"isIntersecting"in t&&(J=m.IntersectionObserver);m.$lazy=H;var O,G=new Image;G.onload=G.onerror=function(){O=2==G.height};G.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var K,V=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;
var B=function(a,c,l){if(!O)return a;K||(K=p(C.body,"webp")||".webp");if(c&&(l=p(c,"webp"),"no"==l))return a;l=l?l:K;c&&(c.onerror=function(){this.onerror=null;this.src=a});return a.replace(V,l)};m.$zwebp=B;if(x){(m=p(x,"z"))?m=[m]:m=D(p(x,"zz"));M=p(x,"b");t=0;for(var W=m.length;t<W;t++)(x=D(m[t]))?H(x):H()}})(window,document);
