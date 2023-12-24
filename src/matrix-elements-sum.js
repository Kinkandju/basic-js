const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
*/

function getMatrixElementsSum(matrix) {
  let sumElements = 0;

  // iterate each column
  for (let column = 0; column < matrix[0].length; column += 1) {

    // iterate each row
    for (let row = 0; row < matrix.length; row += 1) {

      // add the value to the sum if there is no "0" below the current value
      if (matrix[row][column] !== 0) {
        sumElements += matrix[row][column]; 
      }

      // exit the loop if "0" is found below the current value
      else {
        break;
      }
    }
  }

  return sumElements;
}

module.exports = {
  getMatrixElementsSum
};
