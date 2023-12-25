const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
*/

function calculateHanoi(disksNumber, turnsSpeed) {
  // Since each disc can only be moved once, and each 
  // move is counted in the minimum number of moves, the minimum 
  // number of moves required to solve the Tower of Hanoi puzzle 
  // can be expressed in terms of the number 2 to the power of 'diskNumber'.

  // In each turn of the solution, only one disc moves, 
  // and form towers on other poles. 
  // When move (n-1) discs from the original pole to the 
  // auxiliary pole, so it actually solving the Hanoi Tower puzzle with (n-1) discs.

  // returns the minimum number of moves
  const turns = Math.pow(2, disksNumber) - 1;

  // Start by calculating the number of hours needed to complete
  // all the moves. To do this, divide the number of turns 
  // by the 'turnsSpeed'. However, the original value of turn
  // speed represents the speed in revolutions per hour, so 
  // divide by turn (speed / 3600) to get the number of seconds.

  const SECONDS_IN_HOUR = 3600;

  // calculates the minimum number of seconds required to solve the puzzle
  const seconds = Math.floor(turns / (turnsSpeed / SECONDS_IN_HOUR));

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
