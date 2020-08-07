const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  data: 'Welcome to CryptoChain 1.0',
  hash: '75508ddea720aba5d5775f7e5ca5492309278e22cedb4ba15590467b8c5b5588',
  lastHash: '0',
  timestamp: 1596259892486,
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0
};

const STARTING_BALANCE = 1000;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE };