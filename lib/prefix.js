export class Prefix {
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
