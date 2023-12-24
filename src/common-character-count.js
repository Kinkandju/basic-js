const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function getCommonCharacterCount(s1, s2) {
  let commonCounter = 0;

  // iterate each symbol in s1
  for (let symbol of s1) {

    // check -> if symbol exists in s2 -> increasing the counter
    if (s2.includes(symbol)) {
      commonCounter += 1;

      // remove the found symbol from s2 to avoid duplicates
      s2 = s2.replace(symbol, '');
    }
  }

  return commonCounter;
}

module.exports = {
  getCommonCharacterCount
};
