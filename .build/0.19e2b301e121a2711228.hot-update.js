exports.id=0,exports.modules={"./server/convert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Conversion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./server/Conversions.js"),isNestedEquation=function(n){return n.length>1},isOperation=function(n){return n.length<=1},convert=function convert(conversionExpressionString){var chunks=conversionExpressionString.split(/([\(\)\+\-\*\/\.])/),initializedChunks=[];chunks.forEach(function(n,e,r){e%2!=1?initializedChunks.push(_Conversion__WEBPACK_IMPORTED_MODULE_0__.a[n]):initializedChunks.push(n)});var operationsArray=initializedChunks.map(function(n){return n.hasOwnProperty("SIUnitConversionChunks")?n.SIUnitConversionChunks:n});console.log(operationsArray);var calcdOperationsArray=operationsArray.map(function(ops){if(isOperation(ops))return ops[0];var opsMinusType=ops.slice(0,ops.length-1);return isNestedEquation(opsMinusType)?eval(ops.slice(0,ops.length-1).join("")):opsMinusType[0]});return calcdOperationsArray};__webpack_exports__.a=convert}};