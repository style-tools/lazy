(function(l,x,D){var q,r="IntersectionObserverEntry"in l?l.IntersectionObserverEntry.prototype:0;r&&"intersectionRatio"in r&&"isIntersecting"in r&&(q=l.IntersectionObserver);l.$lazy=function(a,b,e){a&&"string"!=typeof a&&(a instanceof Array||a.selector)||(a=[a]);var f=a[0]||a.selector||"[data-src]",m=a[1]||a.threshold||a.observer,E=a[2]||a.rootMargin,k;m="object"==typeof m?m:{rootMargin:E||"0px",threshold:m||0};var y=a.src||"src",z=a.srcset||"srcset";var A=!1===a[3]||!1===a.webp?!1:!0;if(b instanceof
Array){var B=b[2];var n=b[1];b=b[0];n=n||b}if(1===b){b=!1;var t=!0}b=b||function(d,c,g){c=d.getAttribute("data-"+y);if(g=d.getAttribute("data-"+z))A&&(g=u(g,d)),d.srcset=g,d.removeAttribute("data-"+z);c&&(A&&(c=u(c,d)),d.src=c,d.removeAttribute("data-"+y));B&&B(d)};e=e||function(d){for(var c,g,v=0,F=d.length;v<F;v++)if(c=d[v],(g=!h||c.isIntersecting)||n)c=h?c.target:c,g=(g?b:n)(c,h,g),h&&!1!==g&&h.unobserve(c)};"string"==typeof f?k=x.querySelectorAll(f):k=f&&f.length==D?[f]:f;if(-1===b)return k;var h=
q&&!t?new q(e,m):!1;f=0;for(t=k.length;f<t;f++)a=k[f],h?h.observe(a):e([a]);return k};var C,p=new Image;p.onload=p.onerror=function(){C=2==p.height};p.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var w,G=/(\.(jp(e)?g|gif|bmp|png|tiff))/ig;var u=function(a,b,e){if(!C)return a;w||(w=x.body.getAttribute("data-webp")||".webp");if(b&&(e=b.getAttribute("data-webp"),"no"==e))return a;e=e?e:w;b&&(b.onerror=function(){this.onerror=null;
this.src=a});return a.replace(G,e)};l.$zwebp=u})(window,document);
