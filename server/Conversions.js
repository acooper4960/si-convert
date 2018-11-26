import Unit from './models/Unit';
import conversionData from '../conversion-data.json';

const initizalizeConversions = () => {
  return conversionData.reduce((conversions, conversionJson) => {
    let unit = new Unit(conversionJson);
    conversions[conversionJson.name] = unit;
    conversions[conversionJson.symbol] = unit; 
    return conversions;
  }, {});
}

const CONVERSIONS = initizalizeConversions();

export default CONVERSIONS;