(function(e,n){var g;function h(a,e){e||(e=Object);return a instanceof e}function d(a,b){if(!a||"object"!=typeof a||h(a,Node)||h(a,NodeList))a=[a];var c=a[0]||a.selector||"[data-src]";var f=a[1]||a.threshold||a.observer;a=a[2]||a.rootMargin;var d;f="object"==typeof f?f:{rootMargin:a||"0px",threshold:f||0};b||(b=function(a){for(var b,d=0,f=a.length;d<f;d++)if(b=a[d],!k||b.isIntersecting){var c=k?b.target:b,g=c.getAttribute("data-srcset"),h=c.getAttribute("data-src");g&&(c.srcset=g);h&&(c.src=h);"CustomEvent"in
e&&c.dispatchEvent(new CustomEvent("$lazy",{bubbles:!0,cancelable:!0,detail:{el:c,entry:b}}));k&&k.unobserve(c)}});var k=g?new g(b,f):!1;h(c,Node)?d=[c]:d=h(c,NodeList)?c:n.querySelectorAll(c);f=0;for(a=d.length;f<a;f++)c=d[f],k?k.observe(c):b([c]);return d}function p(a,b){m.push([a,b])}var l="IntersectionObserverEntry"in e?e.IntersectionObserverEntry.prototype:0;l&&"intersectionRatio"in l&&"isIntersecting"in l&&(g=e.IntersectionObserver);e.$lazy=d;var m=[];if(!g){if(e.$lazypoly)var b=e.$lazypoly;
if(b){var q=d;e.$lazy=d=p;"function"==typeof b&&(b=b());("string"!=typeof b&&"then"in b?b:$async.a(b)).then(function(){g=e.IntersectionObserver;e.$lazy=d=q;for(var a;a=m.shift();)d(a[0],a[1])})}}})(window,document);
