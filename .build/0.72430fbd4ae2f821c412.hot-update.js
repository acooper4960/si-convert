exports.id=0,exports.modules={"./server/server.js":function(e,n,s){"use strict";s.r(n);var t=s("express"),i=s.n(t);Math.PI;var r=s("./conversion-data.json"),u=(Math.PI,r.reduce(function(e,n){return e[n.name]=n,e},{})),a=function(e){return e.split(/([\(\)\+\-\*\/\.])/).forEach(function(e,n,s){s%2==1?initializedChunks.push(u[e]):initializedChunks.push(e)}),u},o=i()();o.get("/units/si",function(e,n){n.send({Value:a("m","mm",1e3)})});n.default=o}};