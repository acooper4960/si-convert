exports.id=0,exports.modules={"./server/convert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Conversions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./server/Conversions.js"),isNestedEquation=function(n){return n.length>1},isOperation=function(n){return n.length<=1},convert=function convert(conversionExpressionString){var chunks=conversionExpressionString.split(/([\(\)\+\-\*\/\.])/),initializedChunks=chunks.map(function(n,e,r){return e%2!=1?_Conversions__WEBPACK_IMPORTED_MODULE_0__.a[n]:n}),operationsArray=initializedChunks.map(function(n){return n.hasOwnProperty("SIUnitConversionChunks")?n.SIUnitConversionChunks:n}),symbols=operationsArray.map(function(n){return n[n.length-1]});console.log(symbols),console.log(operationsArray);var calcdInnerOperationsArray=flattenAndCalculateInnerOperations(operationsArray),calculatedValue=eval(calcdInnerOperationsArray.join(""));return calculatedValue+" "+symbols.join("")},flattenAndCalculateInnerOperations=function flattenAndCalculateInnerOperations(operationsArray){return operationsArray.map(function(ops){if(isOperation(ops))return ops[0];var opsMinusType=ops.slice(0,ops.length-1);return isNestedEquation(opsMinusType)?eval(opsMinusType.join("")):opsMinusType[0]})};__webpack_exports__.a=convert}};