/* eslint-env mocha */

import {expect} from 'chai';
import {Measure} from '../../src/measure/Measure';

describe('Measure', function () {
    describe('#constructor', function () {
        it('does not throw', function () {
            expect(Measure.constructor).to.not.throw();
        });
    });
    describe('#valueOf()', function () {
        it('returns the numerical value', function () {
            expect(Measure(73, 'c', 'm').valueOf()).to.equal(73);
        });
    });
    describe('#toString()', function () {
        it('returns a formatted string', function () {
            expect(Measure(17, 'm', 's').toString()).to.equal('17ms');
        });
    });
});
