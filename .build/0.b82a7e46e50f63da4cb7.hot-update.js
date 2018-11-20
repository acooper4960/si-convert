exports.id=0,exports.modules={"./server/convert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Conversions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./server/Conversions.js"),isNestedEquation=function(n){return n.length>1},isOperation=function(n){return n.length<=1},convert=function convert(conversionExpressionString){var chunks=conversionExpressionString.replace("(","").replace(")","").split(/([\(\)\+\-\*\/\.])/);console.log(chunks);var initializedChunks=initializeUnits(chunks),operationsArray=pluckOperationsFromUnits(initializedChunks),calculatedInnerOperationsArray=flattenAndCalculateInnerOperations(operationsArray),calculatedValue=eval(calculatedInnerOperationsArray.join("")),symbols=operationsArray.map(function(n){return n[n.length-1]}).join("");return{multiplication_factor:calculatedValue,unit_name:symbols}},pluckOperationsFromUnits=function(n){return n.map(function(n){return n.hasOwnProperty("SIUnitConversionChunks")?n.SIUnitConversionChunks:n})},initializeUnits=function(n){return n.map(function(n,e,r){return _Conversions__WEBPACK_IMPORTED_MODULE_0__.a.hasOwnProperty(n)?_Conversions__WEBPACK_IMPORTED_MODULE_0__.a[n]:n})},flattenAndCalculateInnerOperations=function flattenAndCalculateInnerOperations(operationsArray){return operationsArray.map(function(ops){if(isOperation(ops))return ops[0];var opsMinusType=ops.slice(0,ops.length-1);return isNestedEquation(opsMinusType)?eval(opsMinusType.join("")):opsMinusType[0]})};__webpack_exports__.a=convert}};