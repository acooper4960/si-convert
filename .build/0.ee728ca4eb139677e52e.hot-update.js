exports.id=0,exports.modules={"./server/convert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Conversion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./server/Conversions.js"),isNestedEquation=function(){return opsMinusType<=1},convert=function convert(conversionExpressionString){var chunks=conversionExpressionString.split(/([\(\)\+\-\*\/\.])/),initializedChunks=[];chunks.forEach(function(n,o,e){o%2!=1?(console.log(_Conversion__WEBPACK_IMPORTED_MODULE_0__.a),console.log(_Conversion__WEBPACK_IMPORTED_MODULE_0__.a[n]),initializedChunks.push(_Conversion__WEBPACK_IMPORTED_MODULE_0__.a[n])):initializedChunks.push(n)});var operationsArray=initializedChunks.map(function(n){return n.hasOwnProperty("SIUnitConversionChunks")?n.SIUnitConversionChunks:n});console.log(operationsArray);var calcdOperationsArray=operationsArray.map(function(ops){var opsMinusType=ops.slice(0,ops.length-1);return isNestedEquation?eval(ops.slice(0,ops.length-1).join("")):opsMinusType});return calcdOperationsArray};__webpack_exports__.a=convert}};