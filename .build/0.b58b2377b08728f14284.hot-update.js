exports.id=0,exports.modules={"./server/server.js":function(e,s,n){"use strict";n.r(s);var i=n("express"),r=n.n(i);n("./conversion-data.json"),Math.PI,(void 0).initizalizeConversions();var t=function(e,s,n){},o=r()();o.get("/units/si",function(e,s){s.send({Value:t("m","mm",1e3)})});s.default=o}};