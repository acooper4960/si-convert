exports.id=0,exports.modules={"./server/index.js":function(e,r,t){"use strict";t.r(r);var s=t("http"),n=t.n(s),o=t("./server/server.js"),c=Object({BUILD_TARGET:"server"}).PORT||8080;try{var u=n.a.createServer(o.default),v=o.default;u.listen(c,function(){return console.log("listening on port ".concat(c))}),e.hot.accept("./server/server.js",function(e){o=t("./server/server.js"),u.removeListener("request",v),u.on("request",o.default),v=o.default})}catch(e){console.error(e)}}};