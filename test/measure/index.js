/* eslint-env mocha */

import {expect} from 'chai';
import {ft, inch, s, µs} from '../../lib/measure/index.js';

describe('µs', function () {
    it('should convert to s', function () {
        expect(µs(123456789).s).to.eql(s(123.456789));
    });
});

describe('ft', function () {
    it('should convert to in', function () {
        expect(ft(123).in).to.eql(inch(1476));
    });
});
