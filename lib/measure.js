import * as dimension from './dimension.js';

class Measure {
  constructor(number, prefix, unit) {
    this.number = +number;
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

const factory = {};

for (const d of Object.values(dimension)) {
  const base = class extends Measure {};
  for (const u of d) {
    for (const p of u) {
      factory[`${p}${u}`] = (n) => new base(n, p, u);
      Object.defineProperty(base.prototype, `${p}${u}`, {
        get: function() {
          return factory[`${p}${u}`](
            (this.number * 10 ** (this.prefix - p) * this.unit) / u,
          );
        },
      });
    }
  }
}

export const {au, km, m, yd, ft, dm, in: inch, cm, mm} = factory;
export const {Gt, Mt, kt, t, kg, lb, hg, oz, g, mg, µg, ng} = factory;
export const {ka, a, d, h, min, s, ms, µs, ns} = factory;
