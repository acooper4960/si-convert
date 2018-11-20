exports.id = "main";
exports.modules = {

/***/ "./server/convert.js":
/*!***************************!*\
  !*** ./server/convert.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Conversions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversions */ \"./server/Conversions.js\");\n\n\nvar isNestedEquation = function isNestedEquation(arr) {\n  return arr.length > 1;\n};\n\nvar isOperation = function isOperation(arr) {\n  return arr.length <= 1;\n};\n\nvar convert = function convert(conversionExpressionString) {\n  var chunks = conversionExpressionString.split(/([\\(\\)\\+\\-\\*\\/\\.])/);\n  var initializedChunks = initializeUnits(chunks);\n  var operationsArray = pluckOperationsFromUnits(initializedChunks);\n  var calculatedInnerOperationsArray = flattenAndCalculateInnerOperations(operationsArray);\n  var calculatedValue = eval(calculatedInnerOperationsArray.join(''));\n  var symbols = operationsArray.map(function (innerOperationsArray) {\n    return innerOperationsArray[innerOperationsArray.length - 1];\n  }).join('');\n  return \"\".concat(calculatedValue, \" \").concat(symbols);\n};\n\nvar pluckOperationsFromUnits = function pluckOperationsFromUnits(initializedChunks) {\n  return initializedChunks.map(function (chunk) {\n    if (chunk.hasOwnProperty(\"SIUnitConversionChunks\")) return chunk.SIUnitConversionChunks;else return chunk;\n  });\n};\n\nvar initializeUnits = function initializeUnits(chunks) {\n  return chunks.map(function (chunk, i, a) {\n    if (i % 2 !== 1) {\n      return _Conversions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][chunk];\n    } else {\n      return chunk;\n    }\n  });\n};\n\nvar flattenAndCalculateInnerOperations = function flattenAndCalculateInnerOperations(operationsArray) {\n  return operationsArray.map(function (ops) {\n    if (isOperation(ops)) return ops[0];\n    var opsMinusType = ops.slice(0, ops.length - 1);\n    if (!isNestedEquation(opsMinusType)) return opsMinusType[0];\n    return eval(opsMinusType.join(''));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (convert);\n\n//# sourceURL=webpack:///./server/convert.js?");

/***/ })

};