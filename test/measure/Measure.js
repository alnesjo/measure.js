/* eslint-env mocha */

import {expect} from 'chai';
import {Measure} from '../../src/measure/Measure.js';
import {s, µs, ft, inch} from '../../src/measure/index.js';

describe('Measure', function () {
    describe('#constructor', function () {
        it('should not throw', function () {
            expect(Measure.constructor).to.not.throw();
        });
    });
    describe('#valueOf()', function () {
        it('should return the numerical value', function () {
            expect(new Measure(73, 'c', 'm').valueOf()).to.equal(73);
        });
    });
    describe('#toString()', function () {
        it('should return a string representation', function () {
            expect(new Measure(17, 'm', 's').toString()).to.equal('17ms');
        });
    });
});

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
