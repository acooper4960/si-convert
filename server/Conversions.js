import Unit from './models/Unit';
import conversionData from '../conversion-data.json';

const initizalizeConversions = () => {
  return conversionData.reduce((conversions, conversionJson) => {
    conversions[conversionJson.name] = new Unit(conversionJson);
    conversions[conversionJson.symbol] = new Unit(conversionJson); //since this is read-only, I am duplicating data allows for O(1) lookup for both name and symbol
    return conversions;
  }, {});
}

const CONVERSIONS = initizalizeConversions();

export default CONVERSIONS;