const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
*/

function repeater(str, options) {
  // number of repetitions of the str
  let repeatTimes = options.repeatTimes || 1;

  // string separating repetitions of the str
  let separator = options.separator || '+';

  // additional string that will be added to each repetition of the str
  let addition = (options.addition !== undefined) ? String(options.addition) : '';

  // number of repetitions of the addition
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  // string separating repetitions of the addition
  let additionSeparator = options.additionSeparator || '|';

  let repeatedAddition = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let repeatedStr = (str + repeatedAddition + separator).repeat(repeatTimes - 1) + str + repeatedAddition;

  return repeatedStr;
}

module.exports = {
  repeater
};
