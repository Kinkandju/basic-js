const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
*/

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.error = 'Incorrect arguments!';
    this.characters = 26;
    this.ASCII = 65;
  }

  encrypt(message, key) {

    // check that both required parameters are passed
    if (!message || !key) {
      throw new Error(this.error);
    }

    // convert the message and key to uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    // iterate over each symbol of the message
    for (let symbol = 0; symbol < message.length; symbol += 1) {

      // check that the symbol is a letter of the Latin alphabet
      if (message[symbol].match(/[A-Z]/)) {

        // get the message symbol code and the key symbol code
        const messageCharCode = message[symbol].charCodeAt(0) - this.ASCII;
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - this.ASCII;

        // calculate the code of the encrypted character using the Vigener cipher algorithm
        const encryptedCharCode = (messageCharCode + keyCharCode) % this.characters + this.ASCII;
        encryptedMessage += String.fromCharCode(encryptedCharCode);

        keyIndex += 1;
      } 
      
      // if the symbol is not a letter, add it to the encrypted message without modification
      else {
        encryptedMessage += message[symbol];
      }
    }

    // return an encrypted message, depending on the type of machine (forward or reverse order)
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {

    // check that both required parameters are passed
    if (!encryptedMessage || !key) {
      throw new Error(this.error);
    }

    // convert the encrypted message and the key to uppercase
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let keyIndex = 0;

    // iterate over each symbol of the encrypted message
    for (let symbol = 0; symbol < encryptedMessage.length; symbol += 1) {

      // check that the symbol is a letter of the Latin alphabet
      if (encryptedMessage[symbol].match(/[A-Z]/)) {

        // get the encrypted message symbol code and the key symbol code
        const encryptedCharCode = encryptedMessage[symbol].charCodeAt(0) - this.ASCII;
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - this.ASCII;

        // calculate the code of the decrypted character using the Vigener cipher algorithm
        const decryptedCharCode = (encryptedCharCode - keyCharCode + this.characters) % this.characters + this.ASCII;
        decryptedMessage += String.fromCharCode(decryptedCharCode);

        keyIndex += 1;
      } 
      
      // if the symbol is not a letter, add it to the decrypted message without changes
      else {
        decryptedMessage += encryptedMessage[symbol];
      }
    }

    // return the decrypted message, depending on the type of machine (forward or reverse order)
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
