exports.id=0,exports.modules={"./server/server.js":function(n,e,t){"use strict";t.r(e);var s=t("express"),i=t.n(s);var o=Math.PI,r=function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e.name,this.symbol=e.symbol,this.type=e.type,this.SIUnitConversion=e.SIUnitConversion,this.SIUnitConversionChunks=this.SIUnitConversion.replace("π",o).replace("(","").replace(")").split(" ")},a=t("./conversion-data.json"),c=(Math.PI,a.map(function(n){return new r(n)})),u=function(n,e,t){return c},l=i()();l.get("/units/si",function(n,e){e.send({Value:u("m","mm",1e3)})});e.default=l}};