import {inch, foot, yard, metre, gram, second, minute, hour, day} from './unit';

class Dimension extends Array {

    constructor(symbol, ...unit) {
        super(...unit);
        this.symbol = symbol;
    }

    toString() {
        return this.symbol;
    }

}

export const length = Object.freeze(new Dimension('L', inch, foot, yard, metre));
export const mass = Object.freeze(new Dimension( 'M', gram));
export const time = Object.freeze(new Dimension( 'T', second, minute, hour, day));