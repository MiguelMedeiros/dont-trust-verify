// import libs
var bitcoin = require('bitcoinjs-lib');
var bitcoinMessage = require('bitcoinjs-message');

// **************************************************************************************
// do it on private

// set message
var message = "I am Satoshi Nakamoto!";

// my private key WIF
var myPrivateKeyWIF = "Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct";

// create random eliptic curve pairs
var keyPair1 = bitcoin.ECPair.makeRandom();
var keyPair2 = bitcoin.ECPair.makeRandom();
var keyPair3 = bitcoin.ECPair.fromWIF(myPrivateKeyWIF);

// get private key (WIF - wallet import format)
var privateKey1 = keyPair1.toWIF();
var privateKey2 = keyPair2.toWIF();
var privateKey3 = myPrivateKeyWIF;

// get private key buffer
var privateKeyBuffer1 = keyPair1.d.toBuffer(32);
var privateKeyBuffer2 = keyPair2.d.toBuffer(32);
var privateKeyBuffer3 = keyPair3.d.toBuffer(32);

// get address
var address1 = keyPair1.getAddress();
var address2 = keyPair2.getAddress();
var address3 = keyPair3.getAddress();

// sign message with your private key
var signature = bitcoinMessage.sign(message, privateKeyBuffer3, privateKeyBuffer3.compressed).toString('base64');

// **************************************************************************************
// do it on public

// verifying message
var verifyAddress1 = bitcoinMessage.verify(message, address1, signature);
var verifyAddress2 = bitcoinMessage.verify(message, address2, signature);
var verifyAddress3 = bitcoinMessage.verify(message, address3, signature);

// results
console.log("Message:   " + message); // message signed
console.log("Signature: " + signature); // signature it self
console.log("Address 1: " + address1, verifyAddress1); // check: false
console.log("Address 2: " + address2, verifyAddress2); // check: false
console.log("Address 3: " + address3, verifyAddress3); // check: true