(function(e,p){function l(a,b){a&&"object"===typeof a||(a=[a]);var d=a[0]||a.selector||"[data-src]",c=a[1]||a.threshold||.006;a=a[2]||a.rootMargin||"0px";c="object"===typeof c?c:{threshold:[c],rootMargin:a};var f;"function"!==typeof b&&(b=function(a){for(var b,c=0,d=a.length;c<d;c++)if(b=a[c],!k||b.isIntersecting){var g=k?b.target:b,f=g.getAttribute("data-srcset"),h=g.getAttribute("data-src");f&&(g.srcset=f);h&&(g.src=h);"CustomEvent"in e&&g.dispatchEvent(new CustomEvent("$lazy",{bubbles:!0,cancelable:!0,
detail:{el:g,entry:b}}));k&&k.unobserve(g)}});var k=h?new h(b,c):!1;d instanceof Node?f=[d]:f=d instanceof NodeList?d:p.querySelectorAll(d);c=0;for(a=f.length;c<a;c++)d=f[c],k?k.observe(d):b([d])}function q(a,b){n.push([a,b])}var h,m="IntersectionObserverEntry"in e?e.IntersectionObserverEntry.prototype:0;m&&"intersectionRatio"in m&&"isIntersecting"in m&&(h=e.IntersectionObserver);e.$lazy=l;var n=[];if(!h){if(e.$lazypoly)var b=e.$lazypoly;b&&(e.$lazy=q,"function"===typeof b&&(b=b()),("string"!==typeof b&&
"then"in b?b:$async.a(b)).then(function(){e.$lazy=l;for(var a;a=n.shift();)l(a)}))}})(window,document);
