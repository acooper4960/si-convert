import CONVERSIONS from './Conversions';
import math from 'mathjs';
const isNestedEquation = arr => arr.length >1;
const isOperation = arr => arr.length <= 1;
const SIG_FIGS = 14; //ideally move to a config file

const convert = (conversionExpressionString) => {
  let chunks = conversionExpressionString.split(/([\(\)\+\-\*\/\.])/);
  let initializedChunks = initializeUnits(chunks);
  let operationsArray = pluckOperationsFromUnits(initializedChunks);
  let calculatedInnerOperationsArray = flattenAndCalculateInnerOperations(operationsArray);
  let calculatedValue = math.eval(calculatedInnerOperationsArray.join(''));
  let formatted = Number(Number.parseFloat(calculatedValue).toPrecision(SIG_FIGS));

  let symbols = operationsArray.map(innerOperationsArray => innerOperationsArray[innerOperationsArray.length-1]).join('');

  return {
    multiplication_factor: formatted,
    unit_name:symbols
  };
};

const pluckOperationsFromUnits = (initializedChunks) => {
  return initializedChunks.map(chunk => {
      if(chunk.hasOwnProperty("SIUnitConversionChunks"))
        return chunk.SIUnitConversionChunks;
      else return chunk;
  });
};

const initializeUnits = (chunks) => {
  return chunks.map(chunk => {
    if (CONVERSIONS.hasOwnProperty(chunk)){
      return(CONVERSIONS[chunk]);
    } else {
      return(chunk);
    }
  });
};

const flattenAndCalculateInnerOperations = (operationsArray) => {
    return operationsArray.map(ops => {
      if (isOperation(ops))
        return ops[0];

      let opsMinusType = ops.slice(0,ops.length-1);

      if (!isNestedEquation(opsMinusType))
        return opsMinusType[0];

      return math.eval(opsMinusType.join(''));
  });
};

export default convert;