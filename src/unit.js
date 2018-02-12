const short = Symbol('short');

class Unit {
    constructor(s) {
        this[short] = s;
    }
    valueOf() {
        return NaN;
    }
    toString() {
        return this[short];
    }
}

export const one = new Unit('1');
export const metre = new Unit('m');
export const gram = new Unit('g');
export const second = new Unit('s');
//export const inch = 'in';
//export const foot = 'ft';
