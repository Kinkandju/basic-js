const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
*/

function countCats(matrix) {
  const catEars = '^^';
  let catCounter = 0;

  // iterate each row in matrix
  for (let row of matrix) {

    // iterate each element in row
    for (let element of row) {
      if (element === catEars) {
        catCounter += 1;
      }
    }
  }

  return catCounter;
}

module.exports = {
  countCats
};
