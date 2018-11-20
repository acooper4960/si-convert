const π = Math.PI;
class Unit {
  constructor(opts) {
    this.name = opts.name;
    this.symbol = opts.symbol;
    this.type = opts.type;
    this.SIUnitConversion = opts.SIUnitConversion.replace('π', π).replace(/[)(]/g,"");
    this.ratio = this.SIUnitConversion.substr(0,this.SIUnitConversion.lastIndexOf(' '));
    this.baseUnit = this.SIUnitConversion.substr(this.SIUnitConversion.lastIndexOf(' '));
    this.SIUnitConversionChunks = this.SIUnitConversion.split(' ');
  }
}

export default Unit