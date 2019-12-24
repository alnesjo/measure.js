/* eslint-env mocha */

import {expect} from 'chai';
import {cm, ft, min, inch, s, ms} from '../../lib/measure.js';

describe('s', function() {
  it('should print sensibly', function() {
    expect(`${s(10)}`).to.equal('10s');
  });
  it('should convert to ms', function() {
    expect(+s(123456.789).ms).to.equal(+ms(123456789));
  });
  it('should convert to min', function() {
    expect(+s(1800).min).to.equal(+min(30));
  });
});

describe('in', function() {
  it('should print sensibly', function() {
    expect(`${inch(6)}`).to.equal('6in');
  });
  it('should convert to ft', function() {
    expect(+inch(1476).ft).to.equal(+ft(123));
  });
  it('should convert to cm', function() {
    expect(+inch(100).cm).to.equal(+cm(254));
  });
});
