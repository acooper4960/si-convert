exports.id=0,exports.modules={"./server/Unit.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function _classCallCheck(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}var π=Math.PI,Unit=function Unit(opts){_classCallCheck(this,Unit),this.name=opts.name,this.symbol=opts.symbol,this.type=opts.type,this.SIUnitConversion=opts.SIUnitConversion.replace("π",π).replace("(","").replace(")",""),this.ratio=eval(this.SIUnitConversion.substr(0,this.SIUnitConversion.lastIndexOf(" "))),this.baseUnit=this.SIUnitConversion.substr(this.SIUnitConversion.lastIndexOf(" ")),this.SIUnitConversionChunks=this.SIUnitConversion.split(" ")};__webpack_exports__.a=Unit},"./server/server.js":function(s,t,n){"use strict";n.r(t);var e=n("express"),i=n.n(e),o=n("./server/Unit.js"),r=n("./conversion-data.json"),a=(Math.PI,r.map(function(s){return new o.a(s)})),c=function(s,t,n){return a},l=i()();l.get("/units/si",function(s,t){t.send({Value:c("m","mm",1e3)})});t.default=l}};