import {milli, centi, deci, none, hecto, kilo} from './prefix.js';

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
export const metre = new Unit('m', 1, milli, centi, deci, none, kilo);
export const gram = new Unit('g', 0.001, milli, centi, deci, none, hecto, kilo);
export const second = new Unit('s', 1, milli, none);

// SI accepted
export const tonne = new Unit('t', 1000, none);
export const minute = new Unit('min', 60, none);
export const hour = new Unit('h', 3600, none);
export const day = new Unit('d', 86400, none);

// Imperial
export const inch = new Unit('in', 0.0254, none);
export const foot = new Unit('ft', 0.3048, none);
export const yard = new Unit('yd', 0.9144, none);
export const ounce = new Unit('oz', 0.028349523125, none);
export const pound = new Unit('lb', 0.45359237, none);
