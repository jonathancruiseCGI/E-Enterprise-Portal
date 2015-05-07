// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.11/esri/copyright.txt for details.
//>>built
define("esri/symbols/ShieldLabelSymbol","dojo/_base/declare dojo/_base/lang dojo/sniff dojox/gfx/_base ../kernel ../lang ../urlUtils ./MarkerSymbol ./Font".split(" "),function(b,f,h,e,k,m,n,p,q){var g={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0};b=b(p,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shieldlabelsymbol",color:[255,255,255,1],width:32,height:32,font:e.defaultFont,constructor:function(a,c,d,l,b){a?f.isString(a)?(this.url=a,c&&(this.color=c),d&&(this.width=d),l&&(this.height=
l),void 0!==b&&(this.font=b)):(this.width=e.pt2px(a.width),this.height=e.pt2px(a.height),c=a.imageData,!(9>h("ie"))&&c&&(d=this.url,this.url="data:"+(a.contentType||"image")+";base64,"+c,this.imageData=d)):f.mixin(this,g)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(a){this.width=a;return this},setHeight:function(a){this.height=a;return this},setUrl:function(a){a!==this.url&&(delete this.imageData,delete this.contentType);this.url=a;return this},setFont:function(a){this.font=
a;return this},setText:function(a){this.text=a;return this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){return{defaultShape:{type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""},fill:null,stroke:null}},toJson:function(){var a=this.url,c=this.imageData;if(0===a.indexOf("data:"))var d=a,a=c,c=d.indexOf(";base64,")+8,c=d.substr(c);var a=n.getAbsoluteUrl(a),d=e.px2pt(this.width),
d=isNaN(d)?void 0:d,b=e.px2pt(this.height),b=isNaN(b)?void 0:b,a=m.fixJson(f.mixin(this.inherited("toJson",arguments),{type:"esriSHD",url:a,imageData:c,contentType:this.contentType,width:d,height:b}));this.font?(c=new q(this.font),a.font=c.toJson()):a.font=null;delete a.size;a.imageData||delete a.imageData;return a}});b.defaultProps=g;h("extend-esri")&&(f.setObject("symbol.ShieldLabelSymbol",b,k),k.symbol.defaultShieldLabelSymbol=g);return b});