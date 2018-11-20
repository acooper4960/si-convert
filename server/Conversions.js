import Unit from './models/Unit';
import conversionData from '../conversion-data.json';

const initizalizeConversions = () => {
  return conversionData.reduce((conversions, conversionJson) => {
    conversions[conversionJson.name] = new Unit(conversionJson);
    return conversions;
  }, {});
}

const CONVERSIONS = initizalizeConversions();

export default CONVERSIONS;