export class Prefix {
    constructor(s,p) {
        this.symbol = s;
        this.power = p;
    }
    valueOf() {
        return this.power;
    }
    toString() {
        return this.symbol;
    }
}
