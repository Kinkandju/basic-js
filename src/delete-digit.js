const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
*/

function deleteDigit(n) {
  let maxNumber = 0;
  let stringOfNumbers = n.toString();

  // iterate over each position (index) in the string of numbers
  for (let i = 0; i < stringOfNumbers.length; i += 1) {
    let leftPartOfString = stringOfNumbers.substring(0, i);
    let rightPartOfString = stringOfNumbers.substring(i + 1);

    let currentNumber = Number(leftPartOfString + rightPartOfString);

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
