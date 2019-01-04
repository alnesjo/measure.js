import * as dimension from './dimension';

const _number = Symbol('number'), _prefix = Symbol('prefix'), _unit = Symbol('unit');

class Measure {

    constructor(number, prefix, unit) {
        this[_number] = +number; // hint = number
        this[_prefix] = prefix;
        this[_unit] = unit;
    }

    valueOf() {
        return this[_number];
    }

    toString() {
        return `${this[_number]}${this[_prefix]}${this[_unit]}`;
    }

}

let base = {}, extended = {};

for (const d of Object.values(dimension)) {
    base[d] = class extends Measure {};
    for (const u of d) {
        for (const p of u) {
            extended[`${p}${u}`] = n => Object.freeze(new base[d](n, p, u));
            Object.defineProperty(base[d].prototype, `${p}${u}`, {
                get: function () {
                    return extended[`${p}${u}`](this[_number] * 10 ** (this[_prefix] - p) * this[_unit] / u);
                },
            });
        }
    }
}

export const {km, m, cm, mm, kg, g, mg, s, ms, in: inch, ft} = extended;