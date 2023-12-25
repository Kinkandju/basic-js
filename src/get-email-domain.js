const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
*/

function getEmailDomain(email) {
  // check that the incoming data is an email
  if (typeof email === 'string' && email.includes('@')) {
    
    // split the email address string into an array
    const emailArray = email.split('@');

    // get the last element of the array, which will be the domain
    const domain = emailArray[emailArray.length - 1];

    return domain;
  }
  
  return false;
}

module.exports = {
  getEmailDomain
};
