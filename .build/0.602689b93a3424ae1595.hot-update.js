exports.id=0,exports.modules={"./server/Conversion.js":function(n,s,t){"use strict";var i=Math.PI,e=function n(s){!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=s.name,this.symbol=s.symbol,this.type=s.type,this.SIUnitConversion=s.SIUnitConversion.replace("π",i).replace("(","").replace(")","").replace("/","\\"),this.ratio=this.SIUnitConversion.substr(0,this.SIUnitConversion.lastIndexOf(" ")),this.baseUnit=this.SIUnitConversion.substr(this.SIUnitConversion.lastIndexOf(" ")),this.SIUnitConversionChunks=this.SIUnitConversion.split(" ")},o=t("./conversion-data.json"),r=(Math.PI,o.reduce(function(n,s){return n[s.name]=new e(s),n},{}));s.a=r}};