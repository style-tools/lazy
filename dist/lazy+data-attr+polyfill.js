(function(c,q,y){function w(a){try{a=JSON.parse(a)}catch(z){a=!1}return a}function d(a,b,e){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var f=a[0];if("z"==f||"zb"==f)a={selector:a[3]||"[data-"+f+"]",src:f,base:a[1],webp:a[2]},"zb"==f&&(a.bg=!0);var c=a[0]||a.selector||"[data-src]",d=a[1]||a.threshold||a.observer,g=a[2]||a.rootMargin,k;d="object"==typeof d?d:{rootMargin:g||"0px",threshold:d||0};var m=a.src||"src",p=a.srcset||"srcset";var r=a[5]||a.base||"";var u=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;
f&&(m=f);if(b instanceof Array){var x=b[2];var n=b[1];b=b[0];n=n||b}if(1===b){b=!1;var v=!0}b=b||function(a,b,c,e){if(b=a.getAttribute("data-"+m))if("["==b.substr(0,1)){if(b=w(b),c=b[1],e=b[2]||r,b=e+b[0],c){e=[];for(var d,f,g,t=0,h=c[1].length;t<h;t++)d=c[1][t],isNaN(d)||(d+="w"),g=!1,f=b,"string"===typeof d?d&&(g=d,f=b.replace(u,"-"+d+"$1")):(f=r+c[0],g=d[1]),e.push(f+(g?" "+g:""));c=e.join(",")}}else b=r+b,c=a.getAttribute("data-"+p);c&&(a.srcset=c,a.removeAttribute("data-srcset"));b&&(a.src=b,
a.removeAttribute("data-src"));x&&x(a)};e=e||function(a){for(var c,d,e=0,f=a.length;e<f;e++)if(c=a[e],(d=!h||c.isIntersecting)||n)c=h?c.target:c,d=(d?b:n)(c,h,d),h&&!1!==d&&h.unobserve(c)};"string"==typeof c?k=q.querySelectorAll(c):k=c&&c.length==y?[c]:c;if(-1===b)return k;var h=l&&!v?new l(e,d):!1;f=0;for(a=k.length;f<a;f++)c=k[f],h?h.observe(c):e([c]);return k}function u(a){m.push([].slice.call(arguments));return p(a,-1)}var g=q.currentScript||q.querySelectorAll("script[data-z]")[0];var l;var e=
"IntersectionObserverEntry"in c?c.IntersectionObserverEntry.prototype:0;e&&"intersectionRatio"in e&&"isIntersecting"in e&&(l=c.IntersectionObserver);c.$lazy=d;var m=[];if(!l){var b;c.$lazypoly?b=c.$lazypoly:g&&(b=g.getAttribute("data-poly"));if(b){var p=d;c.$lazy=d=u;"function"==typeof b&&(b=b());("string"!=typeof b&&"then"in b?b:$async.js(b)).then(function(){l=c.IntersectionObserver;c.$lazy=d=p;for(var a;a=m.shift();)d.apply(null,a)})}}if(g){(e=g.getAttribute("data-z"))&&0===e.indexOf("||")?e=e.split("||"):
e=[e];b=0;for(var v=e.length;b<v;b++)(g=w(e[b]))?d(g):d()}})(window,document);
