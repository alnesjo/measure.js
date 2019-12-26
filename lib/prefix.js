class Prefix {
  constructor(symbol, power) {
    this.symbol = symbol;
    this.power = power;
  }
  valueOf() {
    return this.power;
  }
  toString() {
    return this.symbol;
  }
}

export const yotta = new Prefix('Y', 24);
export const zetta = new Prefix('Z', 21);
export const exa = new Prefix('E', 18);
export const peta = new Prefix('P', 15);
export const tera = new Prefix('T', 12);
export const giga = new Prefix('G', 9);
export const mega = new Prefix('M', 6);
export const kilo = new Prefix('k', 3);
export const hecto = new Prefix('h', 2);
export const deca = new Prefix('da', 1);
export const none = new Prefix('', 0);
export const deci = new Prefix('d', -1);
export const centi = new Prefix('c', -2);
export const milli = new Prefix('m', -3);
export const micro = new Prefix('µ', -6);
export const nano = new Prefix('n', -9);
export const pico = new Prefix('p', -12);
export const femto = new Prefix('f', -15);
export const atto = new Prefix('a', -18);
export const zepto = new Prefix('z', -21);
export const yocto = new Prefix('y', -24);
