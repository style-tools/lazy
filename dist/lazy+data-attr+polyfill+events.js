(function(c,u,D){function v(a){try{var b=JSON.parse(a)}catch(G){b=a}return b}function m(a,b){return a.getAttribute("data-"+b)}function z(a,b){return"/"===a[0]||w.test(a)?a:b+a}function k(a,b,d){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var c=a[0];if("z"==c||"zb"==c)a={selector:a[3]||"[data-"+c+"]",src:c,base:a[1],webp:a[2]},"zb"==c&&(a.bg=!0);var e=a[0]||a.selector||"[data-src]",g=a[1]||a.threshold||a.observer,k=a[2]||a.rootMargin,n;g="object"==typeof g?g:{rootMargin:k||"0px",
threshold:g||0};var x=a.src||"src",q=a.srcset||"srcset";var y=a[5]||a.base||A;var t=/(\.[a-z]{2,4}(\.[a-z]{2,4})?(\?.*)?)$/i;c&&(x=c);var B=a[4]||a.events||["click","mouseover","z"];if(b instanceof Array){var C=b[2];var r=b[1];b=b[0];r=r||b}if(1===b){b=!1;var w=!0}b=b||function(a,h,f,d){h=m(a,x);f=!1;if(h)if("["==h.substr(0,1)){if(h=v(h),f=h[1],d=h[2]||y,h=d+h[0],f){d=[];for(var b,c,e,g=0,k=f[1].length;g<k;g++)b=f[1][g],isNaN(b)||(b+="w"),e=!1,c=h,"string"===typeof b?b&&(e=b,c=h.replace(t,"-"+b+"$1")):
(c=z(f[0],y),e=b[1]),d.push(c+(e?" "+e:""));f=d.join(",")}}else h=z(h,y),f=m(a,q);f&&(a.srcset=f,a.removeAttribute("data-"+q));h&&(a.src=h,a.removeAttribute("data-"+x));C&&C(a)};d=d||function(a,d){for(var f,c,e=0,h=a.length;e<h;e++)if(f=a[e],(c=(d=d===f)||!l||f.isIntersecting)||r)f=!d&&l?f.target:f,c=(c?b:r)(f,l,c),l&&!1!==c&&l.unobserve(f)};"string"==typeof e?n=u.querySelectorAll(e):n=e&&e.length==D?[e]:e;if(-1===b)return n;var l=p&&!w?new p(d,g):!1;n.forEach(function(a){function c(b){a.removeEventListener(b.type,
c);d([a],a)}l?l.observe(a):d([a]);for(var b=0,e=B.length;b<e;b++)a.addEventListener(B[b],c,{passive:!0,once:!0})});return n}function E(a){q.push([].slice.call(arguments));return t(a,-1)}var g=u.currentScript||u.querySelectorAll("script[data-z]")[0];var p;var e="IntersectionObserverEntry"in c?c.IntersectionObserverEntry.prototype:0;var A="",w=/^[a-z]+:\/\//i;e&&"intersectionRatio"in e&&"isIntersecting"in e&&(p=c.IntersectionObserver);c.$lazy=k;var q=[];if(!p){var d;c.$lazypoly?d=c.$lazypoly:g&&(d=
m(g,"poly"));if(d){var t=k;c.$lazy=k=E;"function"==typeof d&&(d=d());("string"!=typeof d&&"then"in d?d:$async.js(d)).then(function(){p=c.IntersectionObserver;c.$lazy=k=t;for(var a;a=q.shift();)k.apply(null,a)})}}if(g){(e=m(g,"z"))?e=[e]:e=v(m(g,"zz"));A=m(g,"b");d=0;for(var F=e.length;d<F;d++)(g=v(e[d]))?k(g):k()}})(window,document);
