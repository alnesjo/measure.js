import * as dimension from '../dimension.js';

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

const base = {};
const extended = {};

for (const d of Object.values(dimension)) {
  base[d] = class extends Measure {};
  for (const u of d) {
    for (const p of u) {
      extended[`${p}${u}`] = (n) => new base[d](n, p, u);
      Object.defineProperty(base[d].prototype, `${p}${u}`, {
        get: function() {
          return extended[`${p}${u}`](
            (this.number * 10 ** (this.prefix - p) * this.unit) / u,
          );
        },
      });
    }
  }
}

export const {km, m, dm, cm, mm} = extended;
export const {ft, in: inch} = extended;
export const {t, kg, g, mg} = extended;
export const {d, h, min, s, ms} = extended;
