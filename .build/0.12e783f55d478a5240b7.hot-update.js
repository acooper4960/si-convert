exports.id=0,exports.modules={"./server/server.js":function(n,s,t){"use strict";t.r(s);var e=t("express"),i=t.n(e);var o=Math.PI,r=function n(s){!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=s.name,this.symbol=s.symbol,this.type=s.type,this.SIUnitConversion=s.SIUnitConversion.replace("π",o).replace("(","").replace(")",""),this.ratio=this.SIUnitConversion.substr(0,this.SIUnitConversion.lastIndexOf(" ")),this.baseUnit=this.SIUnitConversion.substr(this.SIUnitConversion.lastIndexOf(" ")),this.SIUnitConversionChunks=this.SIUnitConversion.split(" ")},a=t("./conversion-data.json"),u=(Math.PI,a.reduce(function(n,s){return n[s.name]=new r(s),n},{})),c=function(n){var s=[];return n.split(/([\(\)\+\-\*\/\.])/).forEach(function(n,t,e){t%2!=1?(console.log(u),console.log(u[n]),s.push(u[n])):s.push(n)}),s},h=i()();h.get("/units/si",function(n,s){s.send({Value:c("degree/minute")})});s.default=h}};