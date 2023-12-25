const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
*/

function getDNSStats(domains) {
  // object to store the appearances of the DNS
  const appearances = {};

  for (const domain of domains) {

    // split the domain into subdomains
    const subdomains = domain.split('.');

    // variable to keep track of the current domain level
    let currentLevel = '';

    // build the current domain level by adding subdomains in reverse order
    for (let i = subdomains.length - 1; i >= 0; i -= 1) {
      currentLevel = subdomains[i] + (currentLevel ? '.' + currentLevel : '');

      // if the current domain level exists as a property in the appearances object, increment its count by 1;
      // otherwise, initialize it with a count of 1
      appearances[currentLevel] = appearances[currentLevel] ? appearances[currentLevel] + 1 : 1;
    }
  }

  // new appearances object with the correct hierarchy of DNS
  const result = {};

  for (const key in appearances) {
    result[`.${key.split('.').reverse().join('.')}`] = appearances[key];
  }

  return result;
}

module.exports = {
  getDNSStats
};
