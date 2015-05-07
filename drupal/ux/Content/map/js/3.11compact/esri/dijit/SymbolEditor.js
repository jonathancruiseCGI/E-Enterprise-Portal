// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.11/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/SymbolEditor.html":'\x3cdiv class\x3d"esriSymbolEditor"\x3e\n\x3c/div\x3e'}});
define("esri/dijit/SymbolEditor","dojo/_base/declare dojo/_base/lang dojo/has ../kernel dojo/_base/array dojo/_base/Color dojo/dom-construct dojo/query dijit/_Widget dijit/_TemplatedMixin ../domUtils ./Form dojo/text!./templates/SymbolEditor.html dojo/i18n!../nls/jsapi".split(" "),function(d,f,h,k,s,l,m,t,n,p,g,q,r,e){d=d([n,p],{declaredClass:"esri.dijit.SymbolEditor",widgetsInTemplate:!0,templateString:r,symbolConfigLabel:e.widgets.textSymbolEditor.symbolConfiguration,alignmentLabel:e.widgets.textSymbolEditor.alignment,
colorLabel:e.widgets.textSymbolEditor.color,constructor:function(c,a){},destroy:function(){this.inherited(arguments);this.form.destroy();this.form=null},createForm:function(c){if(c=c||this.graphic){var a=c.symbol||c.getLayer().renderer&&c.getLayer().renderer.getSymbol(c),b={};if(this.form&&(!this._symbolType||this._symbolType===a.type))b.color=a.color.toHex(),b.alignment=(a.verticalAlignment||"baseline")+","+a.horizontalAlignment,this._symbolChangeHandler&&this._symbolChangeHandler.remove(),this.form.setValues(b);
else{this.form&&this.destroy();this._symbolType=a.type;b=m.create("div",null,this.domNode);switch(a.type){case "textsymbol":this.form=this._createTextEditorForm(a,b)}this.form.startup()}this._symbolChangeHandler=this.form.on("value-change",f.hitch(this,"_valueChangeCallback",c,a))}},hide:function(){g.hide(this.domNode)},show:function(){g.show(this.domNode)},_createTextEditorForm:function(c,a){var b=(c.verticalAlignment||"baseline")+","+c.horizontalAlignment,d=c.color.toHex();return new q({fields:[{name:"alignment",
label:this.alignmentLabel,type:"string",value:b,widget:"./FontAlignment"},{name:"color",label:this.colorLabel,type:"string",value:d,widget:"dijit/ColorPalette",widgetParameters:{palette:"7x10"}}]},a)},_valueChangeCallback:function(c,a,b){if("color"===b.fieldName)a.setColor(new l(b.value));else if("alignment"===b.fieldName){var d=b.value.split(",")[0];b=b.value.split(",")[1];a.setHorizontalAlignment(b);a.setVerticalAlignment(d)}c.setSymbol(a);this.emit("symbol-change",{symbol:a})}});h("extend-esri")&&
f.setObject("dijit.SymbolEditor",d,k);return d});