const short = Symbol('short');
const power = Symbol('power');

class Prefix {
    constructor(s,p) {
        this[short] = s;
        this[power] = p;
    }
    valueOf() {
        return this[power];
    }
    toString() {
        return this[short];
    }
}

export const kilo = new Prefix('k', 3);
export const none = new Prefix('', 0);
export const centi = new Prefix('c', -2);
export const milli = new Prefix('m', -3);
