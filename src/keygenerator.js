const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); // Algorithm used to generate the key pair in Bitcoin

const key = ec.genKeyPair(); // Generate a key pair
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key:', privateKey);

console.log();
console.log('Public key:', publicKey);
