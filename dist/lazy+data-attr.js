(function(d,p,A){function q(a){try{var b=JSON.parse(a)}catch(B){b=a}return b}function w(a,b){return"/"===a[0]||r.test(a)?a:b+a}function l(a,b,d){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var f=a[0];if("z"==f||"zb"==f)a={selector:a[3]||"[data-"+f+"]",src:f,base:a[1],webp:a[2]},"zb"==f&&(a.bg=!0);var g=a[0]||a.selector||"[data-src]",c=a[1]||a.threshold||a.observer,h=a[2]||a.rootMargin,m;c="object"==typeof c?c:{rootMargin:h||"0px",threshold:c||0};var l=a.src||"src",x=a.srcset||
"srcset";var t=a[5]||a.base||y;var r=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;f&&(l=f);if(b instanceof Array){var z=b[2];var n=b[1];b=b[0];n=n||b}if(1===b){b=!1;var v=!0}b=b||function(a,e,b,d){e=a.getAttribute("data-"+l);b=!1;if(e)if("["==e.substr(0,1)){if(e=q(e),b=e[1],d=e[2]||t,e=d+e[0],b){d=[];for(var c,f,g,h=0,k=b[1].length;h<k;h++)c=b[1][h],isNaN(c)||(c+="w"),g=!1,f=e,"string"===typeof c?c&&(g=c,f=e.replace(r,"-"+c+"$1")):(f=w(b[0],t),g=c[1]),d.push(f+(g?" "+g:""));b=d.join(",")}}else e=w(e,
t),b=a.getAttribute("data-"+x);b&&(a.srcset=b,a.removeAttribute("data-"+x));e&&(a.src=e,a.removeAttribute("data-"+l));z&&z(a)};d=d||function(a){for(var e,c,d=0,f=a.length;d<f;d++)if(e=a[d],(c=!k||e.isIntersecting)||n)e=k?e.target:e,c=(c?b:n)(e,k,c),k&&!1!==c&&k.unobserve(e)};"string"==typeof g?m=p.querySelectorAll(g):m=g&&g.length==A?[g]:g;if(-1===b)return m;var k=u&&!v?new u(d,c):!1;f=0;for(g=m.length;f<g;f++)a=m[f],k?k.observe(a):d([a]);return m}var h=p.currentScript||p.querySelectorAll("script[data-z]")[0];
var u,c="IntersectionObserverEntry"in d?d.IntersectionObserverEntry.prototype:0,y="",r=/^[a-z]+:\/\//i;c&&"intersectionRatio"in c&&"isIntersecting"in c&&(u=d.IntersectionObserver);d.$lazy=l;if(h){(d=h.getAttribute("data-z"))?d=[d]:d=q(h.getAttribute("data-zz"));y=h.getAttribute("data-b");c=0;for(var v=d.length;c<v;c++)(h=q(d[c]))?l(h):l()}})(window,document);
