(function(l,x,y){var p,q="IntersectionObserverEntry"in l?l.IntersectionObserverEntry.prototype:0;q&&"intersectionRatio"in q&&"isIntersecting"in q&&(p=l.IntersectionObserver);l.$lazy=function(a,b,m){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var d=a[0]||a.selector||"[data-src]",k=a[1]||a.threshold||a.observer,z=a[2]||a.rootMargin,h;k="object"==typeof k?k:{rootMargin:z||"0px",threshold:k||0};var u=a.src||"src",v=a.srcset||"srcset";if(b instanceof Array){var w=b[2];var n=b[1];b=
b[0];n=n||b}if(1===b){b=!1;var r=!0}b=b||function(e,c,f){c=e.getAttribute("data-"+u);if(f=e.getAttribute("data-"+v))e.srcset=f,e.removeAttribute("data-"+v);c&&(e.src=c,e.removeAttribute("data-"+u));w&&w(e)};m=m||function(e){for(var c,f,t=0,A=e.length;t<A;t++)if(c=e[t],(f=!g||c.isIntersecting)||n)c=g?c.target:c,f=(f?b:n)(c,g,f),g&&!1!==f&&g.unobserve(c)};"string"==typeof d?h=x.querySelectorAll(d):h=d&&d.length==y?[d]:d;if(-1===b)return h;var g=p&&!r?new p(m,k):!1;d=0;for(r=h.length;d<r;d++)a=h[d],
g?g.observe(a):m([a]);return h}})(window,document);
