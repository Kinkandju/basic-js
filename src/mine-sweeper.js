const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
*/

function minesweeper(matrix) {
  // create a new matrix to store the result
  const result = [];

  const rows = matrix.length;
  const cols = matrix[0].length;

  // get the number of rows and columns for iterations over the input matrix
  for (let i = 0; i < rows; i += 1) {
    result[i] = [];
    for (let j = 0; j < cols; j += 1) {
      let count = 0;

      // initialize a count variable for the current cell
      // check each neighboring cell (including diagonals)
      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          const neighborRow = i + x;
          const neighborCol = j + y;

          // skip the current cell or neighbor if they don't exist
          if (x === 0 && y === 0) continue;
          if (neighborRow < 0 || neighborCol < 0) continue;
          if (neighborRow >= rows || neighborCol >= cols) continue;

          // if the neighboring cell contains a mine (true), increment the count
          if (matrix[neighborRow][neighborCol]) {
            count += 1;
          }
        }
      }

      // update the corresponding cell in the result matrix with the count of mines
      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
