export class Unit extends Array {

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