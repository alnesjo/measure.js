class Prefix {
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

export const yotta = Object.freeze(new Prefix('Y', 24));
export const zetta = Object.freeze(new Prefix('Z', 21));
export const exa = Object.freeze(new Prefix('E', 18));
export const peta = Object.freeze(new Prefix('P', 15));
export const tera = Object.freeze(new Prefix('T', 12));
export const giga = Object.freeze(new Prefix('G', 9));
export const mega = Object.freeze(new Prefix('M', 6));
export const kilo = Object.freeze(new Prefix('k', 3));
export const hecto = Object.freeze(new Prefix('h', 2));
export const deca = Object.freeze(new Prefix('da', 1));
export const none = Object.freeze(new Prefix('', 0));
export const deci = Object.freeze(new Prefix('d', -1));
export const centi = Object.freeze(new Prefix('c', -2));
export const milli = Object.freeze(new Prefix('m', -3));
export const micro = Object.freeze(new Prefix('µ', -6));
export const nano = Object.freeze(new Prefix('n', -9));
export const pico = Object.freeze(new Prefix('p', -12));
export const femto = Object.freeze(new Prefix('f', -15));
export const atto = Object.freeze(new Prefix('a', -18));
export const zepto = Object.freeze(new Prefix('z', -21));
export const yocto = Object.freeze(new Prefix('y', -24));
