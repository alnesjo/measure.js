import {kilo, none, centi, milli} from './prefix';
import {one, gram, metre, second} from './unit';

const prefix = Symbol('prefix');
const unit = Symbol('unit');
const number  = Symbol('number');

class Measure {
    constructor(n, p = none, u = one) {
        this[number] = +n; // hint = number
        this[prefix] = p;
        this[unit] = u;
    }

    valueOf() {
        return this[number];
    }

    toString() {
        return `${this[number]}${this[prefix]}${this[unit]}`;
    }
}

let measure = {};

const prefixes = [kilo, none, centi, milli];
const units = [gram, metre, second];
const combinations = prefixes.map(p => units.map(u => ({p, u}))).reduce((a, b) => [...a, ...b]);

for (const {p, u} of combinations) {
    // Constructor
    measure[`${p}${u}`] = class extends Measure {
        constructor(n) {
            super(n, p, u);
        }
    };
    // Getter and setter
    Object.defineProperty(Measure.prototype, `${p}${u}`, {
        get: function () {
            if (u === this[unit]) {
                return 10 ** (this[prefix] - p) * this[number];
            } else {
                throw new TypeError(`no known conversion from ${this[unit]} to ${u}`);
            }
        },
        set: function (n) {
            this[number] = 10 ** (p - this[prefix]) * n;
        }
    });
}

export default measure;