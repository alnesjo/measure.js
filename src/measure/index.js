import {Measure} from './Measure';
import * as dimension from '../dimension';

let base = {}, extended = {};

for (const d of Object.values(dimension)) {
    base[d] = class extends Measure {};
    for (const u of d) {
        for (const p of u) {
            extended[`${p}${u}`] = n => Object.freeze(new base[d](n, p, u));
            Object.defineProperty(base[d].prototype, `${p}${u}`, {
                get: function () {
                    return extended[`${p}${u}`](this.number * 10 ** (this.prefix - p) * this.unit / u);
                },
            });
        }
    }
}

export const {km, m, cm, mm, kg, g, mg, s, ms, ft, µs, in: inch} = extended;