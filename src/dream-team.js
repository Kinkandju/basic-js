const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
*/

function createDreamTeam(members) {
  // if "members" is not an array
  if (!Array.isArray(members)) {
    return false;
  }

  let secretName = '';

  // iterate each member in members
  for (let member of members) {
    
    // check if member is string
    if (typeof member === 'string') {
      
      // only if it is string -> trim any top or end whitespaces in the name
      member = member.trim();

      // add first letter of name to the secretName in uppercase
      secretName += member[0].toUpperCase();
    }
  }

  secretName = secretName.split('').sort().join('');

  return secretName;
}

module.exports = {
  createDreamTeam
};
