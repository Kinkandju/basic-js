const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
*/

function encodeLine(str) {
  let encodeString = '';
  let counter = 1;

  // iterate through the entire string
  for (let i = 0; i < str.length; i += 1) {

    // check if the current symbol is the same as the next symbol
    if (str[i] === str[i + 1]) {
      counter += 1;
    } 
    
    // if the next symbol is different
    else {

      // If the number of repetitions is not equal to 1
      if (counter !== 1) {

        // add the count and current symbol to the encoded string
        encodeString += counter + str[i];
      } 
      
      // otherwise, add only the current symbol
      else {
        encodeString += str[i];
      }

      // reset the counter
      counter = 1;
    }
  }

  return encodeString;
}

module.exports = {
  encodeLine
};
