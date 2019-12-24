import {_number, _prefix, _unit, Measure} from './Measure';
import * as dimension from '../dimension';

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

export const {km, m, cm, mm, kg, g, mg, s, ms, ft, µs} = extended;