/* eslint-env mocha */

import {expect} from 'chai';
import {ft, inch, s, ms} from '../../lib/measure.js';

describe('ms', function() {
  it('should print sensibly', function() {
    expect(`${ms(10)}`).to.equal('10ms');
  });
  it('should convert to s', function() {
    expect(+ms(123456789).s).to.eql(+s(123456.789));
  });
});

describe('in', function() {
  it('should print sensibly', function() {
    expect(`${inch(6)}`).to.equal('6"');
  });
  it('should convert to ft', function() {
    expect(+inch(1476).ft).to.equal(+ft(123));
  });
});
