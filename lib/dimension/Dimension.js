export class Dimension extends Array {

    constructor(symbol, ...unit) {
        super(...unit);
        this.symbol = symbol;
    }

    toString() {
        return this.symbol;
    }

}