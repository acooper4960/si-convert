exports.id=0,exports.modules={"./server/server.js":function(n,t,e){"use strict";e.r(t);var s=e("express"),i=e.n(s);var o=function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=t.name,this.symbol=t.symbol,this.type=t.type,this.SIUnitConversion=t.SIUnitConversion},r=e("./conversion-data.json"),a=(Math.PI,r.map(function(n){return new o(n)})),u=function(n,t,e){return a},c=i()();c.get("/units/si",function(n,t){t.send({Value:u("m","mm",1e3)})});t.default=c}};