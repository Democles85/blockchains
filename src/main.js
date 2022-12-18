const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(
  '89cff4d002c5834d23e7cab9ab014a5f5131a0bf3b678fac0cbc85663452147e'
); // Private key
const myWalletAddress = myKey.getPublic('hex');

let CJCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
CJCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
CJCoin.minePendingTransactions(myWalletAddress);

console.log(
  '\nBalance of Sixhei is',
  CJCoin.getBalanceOfAddress(myWalletAddress)
);

CJCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', CJCoin.isChainValid());
