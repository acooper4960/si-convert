exports.id=0,exports.modules={"./server/server.js":function(e,n,r){"use strict";r.r(n);var t=r("express"),s=r.n(t);Math.PI;var u=r("./conversion-data.json"),o=(Math.PI,u.reduce(function(e,n){return e[n.name]=n,e},{})),a=function(e,n,r){return o},i=s()();i.get("/units/si",function(e,n){n.send({Value:a("m","mm",1e3)})});n.default=i}};