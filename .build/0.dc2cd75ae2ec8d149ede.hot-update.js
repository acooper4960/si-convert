exports.id=0,exports.modules={"./server/convert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Conversion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./server/Conversions.js"),isNestedEquation=function(n){return n.length>1},isOperation=function(n){return n.length<=1},convert=function(n){var e=[];n.split(/([\(\)\+\-\*\/\.])/).forEach(function(n,r,t){r%2!=1?e.push(_Conversion__WEBPACK_IMPORTED_MODULE_0__.a[n]):e.push(n)});var r=e.map(function(n){return n.hasOwnProperty("SIUnitConversionChunks")?n.SIUnitConversionChunks:n});return flattenAndCalculateOperations(r)},flattenAndCalculateOperations=function flattenAndCalculateOperations(operationsArray){return operationsArray.map(function(ops){if(isOperation(ops))return ops[0];var opsMinusType=ops.slice(0,ops.length-1);return isNestedEquation(opsMinusType)?eval(opsMinusType.slice(0,opsMinusType.length-1).join("")):opsMinusType[0]})};__webpack_exports__.a=convert}};