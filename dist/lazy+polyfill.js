(function(e,A,B){function m(a,c,q){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var k=a[0]||a.selector||"[data-src]",n=a[1]||a.threshold||a.observer,C=a[2]||a.rootMargin,l;n="object"==typeof n?n:{rootMargin:C||"0px",threshold:n||0};var v=a.src||"src",w=a.srcset||"srcset";if(c instanceof Array){var x=c[2];var r=c[1];c=c[0];r=r||c}if(1===c){c=!1;var D=!0}c=c||function(b,d,f){d=b.getAttribute("data-"+v);if(f=b.getAttribute("data-"+w))b.srcset=f,b.removeAttribute("data-"+w);d&&(b.src=
d,b.removeAttribute("data-"+v));x&&x(b)};q=q||function(b){for(var d,f,t=0,E=b.length;t<E;t++)if(d=b[t],(f=!h||d.isIntersecting)||r)d=h?d.target:d,f=(f?c:r)(d,h,f),h&&!1!==f&&h.unobserve(d)};"string"==typeof k?l=A.querySelectorAll(k):l=k&&k.length==B?[k]:k;if(-1===c)return l;var h=p&&!D?new p(q,n):!1;l&&l.forEach(function(b){h?h.observe(b):q([b])});return l}function F(a){y.push([].slice.call(arguments));return z(a,-1)}var p,u="IntersectionObserverEntry"in e?e.IntersectionObserverEntry.prototype:0;
u&&"intersectionRatio"in u&&"isIntersecting"in u&&(p=e.IntersectionObserver);e.$lazy=m;var y=[];if(!p){if(e.$lazypoly)var g=e.$lazypoly;if(g){var z=m;e.$lazy=m=F;"function"==typeof g&&(g=g());("string"!=typeof g&&"then"in g?g:$async.js(g)).then(function(){p=e.IntersectionObserver;e.$lazy=m=z;for(var a;a=y.shift();)m.apply(null,a)})}}})(window,document);
