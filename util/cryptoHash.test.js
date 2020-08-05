const cryptoHash = require('./cryptoHash');

describe('cryptoHash()', () => {
  it('generates a SHA-256 hash', () => {
    expect(cryptoHash('block'))
      .toEqual('e7cb19a5f148e6ec1664df15935013f7ca50f7006f4c2cba9b6f9151bda2dc4a');
  });

  it('produces the same hash with input arguments in any order', () => {
    expect(cryptoHash('red', 'blue', 'green'))
      .toEqual(cryptoHash('green', 'blue', 'red'));
  });

  it('produces a unique hash when input properties changed', () => {
    const block = {};
    const originalHash = cryptoHash(block);
    block['data'] = 'data';
    expect(cryptoHash(block)).not.toEqual(originalHash);
  });

});