(function(d,p,q){var m,f="IntersectionObserverEntry"in d?d.IntersectionObserverEntry.prototype:0;f&&"intersectionRatio"in f&&"isIntersecting"in f&&(m=d.IntersectionObserver);d.$lazy=function(a,c,d){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var b=a[0]||a.selector||"[data-src]";var h=a[1]||a.threshold||a.observer,f=a[2]||a.rootMargin,e;h="object"==typeof h?h:{rootMargin:f||"0px",threshold:h||0};var r=a.src||"src",t=a.srcset||"srcset";if(c instanceof Array){var n=c[2];var k=c[1];
c=c[0];k=k||c}if(1===c){c=!1;var l=!0}c=c||function(a,c,b){c=a.getAttribute("data-"+r);if(b=a.getAttribute("data-"+t))a.srcset=b,a.removeAttribute("data-srcset");c&&(a.src=c,a.removeAttribute("data-src"));n&&n(a)};d=d||function(a){for(var b,d,e=0,f=a.length;e<f;e++)if(b=a[e],(d=!g||b.isIntersecting)||k)b=g?b.target:b,d=(d?c:k)(b,g,d),g&&!1!==d&&g.unobserve(b)};"string"==typeof b?e=p.querySelectorAll(b):e=b&&b.length==q?[b]:b;if(-1===c)return e;var g=m&&!l?new m(d,h):!1;b=0;for(a=e.length;b<a;b++)l=
e[b],g?g.observe(l):d([l]);return e}})(window,document);
