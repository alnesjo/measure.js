import {metre, gram, tonne, second, minute, hour, day} from './unit.js';
import {ounce, pound, inch, foot, yard} from './unit.js';

class Dimension extends Array {
  constructor(symbol, ...unit) {
    super(...unit);
    this.symbol = symbol;
  }

  toString() {
    return this.symbol;
  }
}

export const length = new Dimension('L', inch, foot, yard, metre);
export const mass = new Dimension('M', gram, ounce, pound, tonne);
export const time = new Dimension('T', second, minute, hour, day);
