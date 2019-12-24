export class Measure {

    constructor(number, prefix, unit) {
        this.number = +number; // hint = number
        this.prefix = prefix;
        this.unit = unit;
    }

    valueOf() {
        return this.number;
    }

    toString() {
        return `${this.number}${this.prefix}${this.unit}`;
    }

}