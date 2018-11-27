import convert from '../server/convert';
const assert = require('assert');
describe('Convert Test', () => {
  it('minute/minute', () => {
    let calculated = convert('minute/minute');
    assert.equal(calculated.unit_name, 's/s');
    assert.equal(calculated.multiplication_factor, 1);
  });
  it('minute*minute', () => {
    let calculated = convert('minute*minute');
    assert.equal(calculated.unit_name, 's*s');
    assert.equal(calculated.multiplication_factor, 3600);
  });
  it('arcminute*arcminute', () => {
    let calculated = convert('arcminute*arcminute');
    assert.equal(calculated.unit_name, 'rad*rad');
    assert.equal(calculated.multiplication_factor, 8.461594994075237e-8.toFixed(14));
  });
  it('hour/minute', () => {
    let calculated = convert('hour/minute');
    assert.equal(calculated.unit_name, 's/s');
    assert.equal(calculated.multiplication_factor, 60);
  });
  it('hectare/minute', () => {
    assert.equal(convert('hectare/minute').unit_name, 'm^2/s');
  });
  it('tonne/litre', () => {
    assert.equal(convert('tonne/litre').unit_name, 'kg/m^3');
  });
  it('litre/tonne', () => {
    assert.equal(convert('litre/tonne').unit_name, 'm^3/kg');
  });
  it('litre*tonne', () => {
    assert.equal(convert('litre*tonne').unit_name, 'm^3*kg');
  });
  it('litre*tonne/minute', () => {
    assert.equal(convert('litre*tonne/minute').unit_name, 'm^3*kg/s');
  });
  it('litre*(tonne/minute)', () => {
    assert.equal(convert('litre*(tonne/minute)').unit_name, 'm^3*(kg/s)');
  });
  it('(litre*tonne)/minute*minute', () => {
    let calculated = convert('(litre*tonne)/minute*minute');
    assert.equal(calculated.unit_name, '(m^3*kg)/s*s');
    assert.equal(calculated.multiplication_factor, 1);
  });
  it('(litre*tonne)/(minute*minute)', () => {
    let calculated = convert('(litre*tonne)/(minute*minute)');
    assert.equal(calculated.unit_name, '(m^3*kg)/(s*s)');
    assert.equal(calculated.multiplication_factor, 0.0002777777777777778.toFixed(14));
  });
  it('minute*hour*day*degree*arcminute', () => {
    let calculated = convert('minute*hour*day*degree*arcminute');
    assert.equal(calculated.multiplication_factor, 94748.20225045785);
    assert.equal(calculated.unit_name, 's*s*s*rad*rad');
  });
  it('minute*hour*day*degree*arcminute*arcsecond', () => {
    let calculated = convert('minute*hour*day*degree*arcminute*arcsecond');
    assert.equal(calculated.multiplication_factor, 0.4593522471155529.toFixed(14));
    assert.equal(calculated.unit_name, 's*s*s*rad*rad*rad');
  });
  it('minute*hour*day*degree*arcminute*arcsecond*hectare', () => {
    let calculated = convert('minute*hour*day*degree*arcminute*arcsecond*hectare');
    assert.equal(calculated.multiplication_factor, 4593.522471155529);
    assert.equal(calculated.unit_name, 's*s*s*rad*rad*rad*m^2');
  });
  it('minute*hour*day*degree*arcminute*arcsecond*hectare*litre*tonne', () => {
    let calculated = convert('minute*hour*day*degree*arcminute*arcsecond*hectare*litre*tonne');
    assert.equal(calculated.multiplication_factor, 4593.52247115553);
    assert.equal(calculated.unit_name, 's*s*s*rad*rad*rad*m^2*m^3*kg');
  });
  it('minute*hour*day*degree/(arcminute*arcsecond*hectare)*litre*tonne', () => {
    let calculated = convert('minute*hour*day*degree/(arcminute*arcsecond*hectare)*litre*tonne');
    assert.equal(calculated.multiplication_factor, 23096377920634.87);
    assert.equal(calculated.unit_name, 's*s*s*rad/(rad*rad*m^2)*m^3*kg');
  });
  it(`min*h*d*°/('*"*h)*L*t`, () => {
    let calculated = convert(`min*h*d*°/('*"*ha)*L*t`);
    assert.equal(calculated.unit_name, 's*s*s*rad/(rad*rad*m^2)*m^3*kg');
    assert.equal(calculated.multiplication_factor, 23096377920634.87);
  });
});
