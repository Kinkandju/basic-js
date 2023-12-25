const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
*/

function getSeason(date) {
  const NOT_PASSED = 'Unable to determine the time of year!';

  // checks if date is falsy (not provided)
  if (!date) {
    return NOT_PASSED;
  }

  const INVALID = 'Invalid date!';

  // checks if date is not valid
  if (!Date.parse(date) || !(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error(INVALID);
  }

  // returns the month number for a given date (0 - 11; 0 - January)
  let month = date.getMonth();

  const MARCH = 2;
  const MAY = 4;
  const JUNE = 5;
  const AUGUST = 7;
  const SEPTEMBER = 8;
  const NOVEMBER = 10;

  if (month >= MARCH && month <= MAY) {
    return 'spring';
  } else if (month >= JUNE && month <= AUGUST) {
    return 'summer';
  } else if (month >= SEPTEMBER && month <= NOVEMBER) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
