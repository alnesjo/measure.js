import * as prefix from './prefix.js';
class Unit extends Array {
  constructor(symbol, factor, ...prefix) {
    super(...prefix);
    this.symbol = symbol;
    this.factor = factor;
  }

  valueOf() {
    return this.factor;
  }

  toString() {
    return this.symbol;
  }
}

// SI base
export const metre = new Unit(
  'm',
  1,
  prefix.nano,
  prefix.micro,
  prefix.milli,
  prefix.centi,
  prefix.deci,
  prefix.none,
  prefix.kilo,
);
export const gram = new Unit(
  'g',
  0.001,
  prefix.micro,
  prefix.milli,
  prefix.none,
  prefix.hecto,
  prefix.kilo,
);
export const second = new Unit(
  's',
  1,
  prefix.nano,
  prefix.micro,
  prefix.milli,
  prefix.none,
);

// SI accepted
export const astronomicalUnit = new Unit('au', 149597870700, prefix.none);
export const tonne = new Unit(
  't',
  1000,
  prefix.none,
  prefix.kilo,
  prefix.mega,
  prefix.giga,
);
export const minute = new Unit('min', 60, prefix.none);
export const hour = new Unit('h', 3600, prefix.none);
export const day = new Unit('d', 86400, prefix.none);
export const annum = new Unit('a', 31557600, prefix.none, prefix.kilo);

// Imperial
export const inch = new Unit('in', 0.0254, prefix.none);
export const foot = new Unit('ft', 0.3048, prefix.none);
export const yard = new Unit('yd', 0.9144, prefix.none);
export const ounce = new Unit('oz', 0.028349523125, prefix.none);
export const pound = new Unit('lb', 0.45359237, prefix.none);
