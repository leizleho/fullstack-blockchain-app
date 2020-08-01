const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./cryptoHash');

class Block {
  constructor({ data, hash, lastHash, timestamp, nonce, difficulty }) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
    this.timestamp = timestamp;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    let hash, timestamp;
    const lastHash = lastBlock.hash;
    const { difficulty } = lastBlock;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(data, lastHash, timestamp, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

    return new this({ data, lastHash, timestamp, nonce, difficulty, hash });
  }

}

module.exports = Block;