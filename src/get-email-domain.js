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
  // split the email address string into an array
  const emailArray = email.split('@');

  // get the last element of the array, which will be the domain
  const domain = emailArray[emailArray.length - 1];
  
  return domain;
}

module.exports = {
  getEmailDomain
};
