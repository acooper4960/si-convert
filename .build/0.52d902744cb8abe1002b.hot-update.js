exports.id=0,exports.modules={"./server/server.js":function(e,s,r){"use strict";r.r(s);var n=r("express"),t=r.n(n);var o=r("./conversion-data.json"),u=(Math.PI,o),i=function(e,s,r){return u},a=t()();a.get("/units/si",function(e,s){s.send({Value:i("m","mm",1e3)})});s.default=a}};