const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
*/

function getSumOfDigits(n) {
  const MAX_VALUE = 9;

  let sum = 0;
  let stringOfNumbers = n.toString();

  // iterate through the entire string
  for (let i = 0; i < stringOfNumbers.length; i += 1) {

    // convert the current element of the string to a number
    let number = Number(stringOfNumbers[i]);

    // add all the numbers to the sum
    sum += number;
  }

  // There should only be one Duncan MacLeod left 😠
  if (sum > MAX_VALUE) {
    return getSumOfDigits(sum);
  } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
