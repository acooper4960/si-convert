exports.id=0,exports.modules={"./server/index.js":function(e,r,t){"use strict";t.r(r);var s=t("http"),n=t.n(s),o=t("./server/server.js"),u=n.a.createServer(o.default),i=o.default;u.listen(3e3,function(){return console.log("listening on port ".concat(3e3))}),e.hot.accept("./server/server.js",function(e){o=t("./server/server.js"),u.removeListener("request",i),u.on("request",o.default),i=o.default})},http:function(e,r){e.exports=require("http")}};