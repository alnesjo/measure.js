import {Dimension} from './Dimension';
import {inch, foot, yard, metre, gram, ounce, pound, tonne, second, minute, hour, day, year, annum} from '../unit';

export const length = Object.freeze(new Dimension('L', inch, foot, yard, metre));
export const mass = Object.freeze(new Dimension( 'M', gram, ounce, pound, tonne));
export const time = Object.freeze(new Dimension( 'T', second, minute, hour, day, year, annum));
