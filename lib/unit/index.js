import {Unit} from './Unit';
import {centi, deci, femto, giga, hecto, kilo, mega, micro, milli, nano, none, pico} from '../prefix';

export const inch = Object.freeze(new Unit('in', 0.0254, none));
export const foot = Object.freeze(new Unit('ft', 0.3048, none));
export const yard = Object.freeze(new Unit('yd', 0.9144, none));
export const metre = Object.freeze(new Unit('m', 1, femto, pico, nano, micro, milli, centi, deci, none, kilo));
export const gram = Object.freeze(new Unit('g', 0.001, micro, milli, none, hecto, kilo));
export const ounce = Object.freeze(new Unit('oz', 0.028349523125, none));
export const pound = Object.freeze(new Unit('lb', 0.45359237, none));
export const tonne = Object.freeze(new Unit('t', 1000, none));
export const second = Object.freeze(new Unit('s', 1, nano, micro, milli, none));
export const minute = Object.freeze(new Unit('min', 60, none));
export const hour = Object.freeze(new Unit('h', 3600, none));
export const day = Object.freeze(new Unit('d', 86400, none));
export const year = Object.freeze(new Unit('yr', 31557600, none));
export const annum = Object.freeze(new Unit('a', 31557600, none, kilo, mega, giga));
