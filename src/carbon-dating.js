const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
*/

function dateSample(sampleActivity) {
  // checks the validity of the input parameters
  if (!sampleActivity || isNaN(sampleActivity) || typeof sampleActivity !== 'string') {
    return false;
  }

  // numeric value of the activity
  const currentActivity = Number(sampleActivity);

  // checks the validity of the activity value of the sample stored
  if (currentActivity <= 0 || currentActivity > MODERN_ACTIVITY) {
    return false;
  }

  const LOGARITHM_OF_TWO = 0.693;

  // value of the decay constant
  const k = LOGARITHM_OF_TWO / HALF_LIFE_PERIOD;
  
  const ages = Math.ceil(Math.log(MODERN_ACTIVITY / currentActivity) / k);

  return ages;
}

module.exports = {
  dateSample
};
