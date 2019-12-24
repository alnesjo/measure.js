/* eslint-env mocha */

import {expect} from 'chai';
import {Measure} from '../../lib/measure/Measure.js';

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