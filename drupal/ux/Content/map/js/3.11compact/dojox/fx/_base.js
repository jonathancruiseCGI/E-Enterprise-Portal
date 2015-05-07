//>>built
define("dojox/fx/_base","dojo/_base/array dojo/_base/lang dojo/_base/fx dojo/fx dojo/dom dojo/dom-style dojo/dom-geometry dojo/_base/connect dojo/_base/html".split(" "),function(f,g,e,h,l,p,s,n,k){f=g.getObject("dojox.fx",!0);g.mixin(f,{anim:e.anim,animateProperty:e.animateProperty,fadeTo:e._fade,fadeIn:e.fadeIn,fadeOut:e.fadeOut,combine:h.combine,chain:h.chain,slideTo:h.slideTo,wipeIn:h.wipeIn,wipeOut:h.wipeOut});f.sizeTo=function(a){var d=a.node=l.byId(a.node),c=a.method||"chain";a.duration||(a.duration=
500);"chain"==c&&(a.duration=Math.floor(a.duration/2));var b,r,m,f,k,q=null,n=function(c){return function(){var d=p.getComputedStyle(c),e=d.position,g=d.width,h=d.height;b="absolute"==e?c.offsetTop:parseInt(d.top)||0;m="absolute"==e?c.offsetLeft:parseInt(d.left)||0;k="auto"==g?0:parseInt(g);q="auto"==h?0:parseInt(h);f=m-Math.floor((a.width-k)/2);r=b-Math.floor((a.height-q)/2);"absolute"!=e&&"relative"!=e&&(d=p.coords(c,!0),b=d.y,m=d.x,c.style.position="absolute",c.style.top=b+"px",c.style.left=m+
"px")}}(d),d=e.animateProperty(g.mixin({properties:{height:function(){n();return{end:a.height||0,start:q}},top:function(){return{start:b,end:r}}}},a)),c=e.animateProperty(g.mixin({properties:{width:function(){return{start:k,end:a.width||0}},left:function(){return{start:m,end:f}}}},a));return h["combine"==a.method?"combine":"chain"]([d,c])};f.slideBy=function(a){var d,c,b=function(a){return function(){var b=p.getComputedStyle(a),e=b.position;d="absolute"==e?a.offsetTop:parseInt(b.top)||0;c="absolute"==
e?a.offsetLeft:parseInt(b.left)||0;"absolute"!=e&&"relative"!=e&&(b=s.coords(a,!0),d=b.y,c=b.x,a.style.position="absolute",a.style.top=d+"px",a.style.left=c+"px")}}(a.node=l.byId(a.node));b();a=e.animateProperty(g.mixin({properties:{top:d+(a.top||0),left:c+(a.left||0)}},a));n.connect(a,"beforeBegin",a,b);return a};f.crossFade=function(a){var d=a.nodes[0]=l.byId(a.nodes[0]),c=k.style(d,"opacity"),b=a.nodes[1]=l.byId(a.nodes[1]);k.style(b,"opacity");return h.combine([e[0==c?"fadeIn":"fadeOut"](g.mixin({node:d},
a)),e[0==c?"fadeOut":"fadeIn"](g.mixin({node:b},a))])};f.highlight=function(a){var d=a.node=l.byId(a.node);a.duration=a.duration||400;var c=a.color||"#ffff99",b=k.style(d,"backgroundColor");"rgba(0, 0, 0, 0)"==b&&(b="transparent");a=e.animateProperty(g.mixin({properties:{backgroundColor:{start:c,end:b}}},a));"transparent"==b&&n.connect(a,"onEnd",a,function(){d.style.backgroundColor=b});return a};f.wipeTo=function(a){a.node=l.byId(a.node);var d=a.node,c=d.style,b=a.width?"width":"height",f={};f[b]=
{start:function(){c.overflow="hidden";if("hidden"==c.visibility||"none"==c.display)return c[b]="1px",c.display="",c.visibility="",1;var a=k.style(d,b);return Math.max(a,1)},end:a[b]};return e.animateProperty(g.mixin({properties:f},a))};return f});