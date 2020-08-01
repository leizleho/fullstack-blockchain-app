const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./cryptoHash');

class Block {
  constructor({ data, hash, lastHash, timestamp }) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
    this.timestamp = timestamp;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;

    return new this({
      data,
      lastHash,
      timestamp,
      hash: cryptoHash(data, lastHash, timestamp)
    });
  }

}

module.exports = Block;