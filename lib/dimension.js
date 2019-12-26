import * as unit from './unit.js';

class Dimension extends Array {
  constructor(symbol, ...unit) {
    super(...unit);
    this.symbol = symbol;
  }

  toString() {
    return this.symbol;
  }
}

export const length = new Dimension(
  'L',
  unit.inch,
  unit.foot,
  unit.yard,
  unit.metre,
  unit.astronomicalUnit,
);
export const mass = new Dimension(
  'M',
  unit.gram,
  unit.ounce,
  unit.pound,
  unit.tonne,
);
export const time = new Dimension(
  'T',
  unit.second,
  unit.minute,
  unit.hour,
  unit.day,
  unit.annum,
);
