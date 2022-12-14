import { describe, it } from 'mocha';

import {
  formatNumberString,
  formatPhoneNumberString,
} from '../lib';

const expect = require('chai').expect;

describe('formatNumberString', () => {
  it('should return non formatted integer when its < 1000', () => {
    expect(formatNumberString(100)).to.be.eql('100');
  });

  it('should return non formatted integer when its < 10000', () => {
    expect(formatNumberString(1000)).to.be.eql('1000');
  });

  it('should return formatted integer when its < 10000 and formatThousands option passed', () => {
    expect(formatNumberString(1000, { formatThousands: true })).to.be.eql('1 000');
  });

  it('should take account of custom formatting options', () => {
    expect(
      formatNumberString(-123456.78, {
        space: '!',
        delimiter: '@',
        minus: '#',
      }),
    ).to.be.eql('#123!456@78');
  });

  it('should accept custom formatting options partially', () => {
    // passing space only, all the other options should be default
    expect(
      formatNumberString(-123456.78, {
        space: '!',
      }),
    ).to.be.eql('−123!456,78');
  });

  it('should round floats to second digit after the delimiter', () => {
    expect(formatNumberString(123.456)).to.be.eql('123,46');
  });

  it('should remove trailing zeros when formatting float', () => {
    expect(formatNumberString(123.000)).to.be.eql('123');
    expect(formatNumberString(123.100)).to.be.eql('123,1');
    expect(formatNumberString(123.120)).to.be.eql('123,12');
  });

  it('should accept number string', () => {
    expect(formatNumberString('12345.67')).to.be.eql('12 345,67');
  });

  it('should throw when non valid number passed', () => {
    const str = 'asdkjgb';
    expect(() => formatNumberString(str)).to.throw(`Non valid number is passed: ${str}`);
  });
});

describe('formatPhoneNumberString', () => {
  it('should format proper phone number', () => {
    expect(formatPhoneNumberString(79001234567)).to.be.eql('+7\xa0900\xa0123-45-67');
  });

  it('should allow change prefix', () => {
    expect(formatPhoneNumberString(79001234567, { prefix: '~' })).to.be.eql('~7\xa0900\xa0123-45-67');
  });
});
