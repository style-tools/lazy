(function(b,u,x){function e(a,d,f){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var b=a[0]||a.selector||"[data-src]";var c=a[1]||a.threshold||a.observer,e=a[2]||a.rootMargin,h;c="object"==typeof c?c:{rootMargin:e||"0px",threshold:c||0};var k=a.src||"src",p=a.srcset||"srcset";var l=!1===a[3]||!1===a.webp?!1:!0;if(d instanceof Array){var n=d[2];var q=d[1];d=d[0];q=q||d}if(1===d){d=!1;var r=!0}d=d||function(a,b,d){b=a.getAttribute("data-"+k);if(d=a.getAttribute("data-"+p))l&&(d=t(d,
a)),a.srcset=d,a.removeAttribute("data-srcset");b&&(l&&(b=t(b,a)),a.src=b,a.removeAttribute("data-src"));n&&n(a)};f=f||function(a){for(var b,c,f=0,e=a.length;f<e;f++)if(b=a[f],(c=!g||b.isIntersecting)||q)b=g?b.target:b,c=(c?d:q)(b,g,c),g&&!1!==c&&g.unobserve(b)};"string"==typeof b?h=u.querySelectorAll(b):h=b&&b.length==x?[b]:b;if(-1===d)return h;var g=m&&!r?new m(f,c):!1;b=0;for(a=h.length;b<a;b++)r=h[b],g?g.observe(r):f([r]);return h}function y(a){n.push([].slice.call(arguments));return v(a,-1)}
var m,p="IntersectionObserverEntry"in b?b.IntersectionObserverEntry.prototype:0;p&&"intersectionRatio"in p&&"isIntersecting"in p&&(m=b.IntersectionObserver);b.$lazy=e;var w,k=new Image;k.onload=k.onerror=function(){w=2==k.height};k.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var l,z=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var t=function(a,b,c){if(!w)return a;l||(l=u.body.getAttribute("data-webp")||".webp");if(b&&(c=b.getAttribute("data-webp"),
"no"==c))return a;c=c?c:l;b&&(b.onerror=function(){this.onerror=null;this.src=a});return a.replace(z,c)};b.$zwebp=t;var n=[];if(!m){if(b.$lazypoly)var c=b.$lazypoly;if(c){var v=e;b.$lazy=e=y;"function"==typeof c&&(c=c());("string"!=typeof c&&"then"in c?c:$async.js(c)).then(function(){m=b.IntersectionObserver;b.$lazy=e=v;for(var a;a=n.shift();)e.apply(null,a)})}}})(window,document);
