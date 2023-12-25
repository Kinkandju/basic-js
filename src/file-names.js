const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
*/

function renameFiles(names) {
  let counts = {};

  /*
  let counts = {
    "file": 3,
    "image": 1,
    "file(1)": 1,
    "file(2)": 1
  };
  */

  for (let i = 0; i < names.length; i += 1) {
    let name = names[i];
    
    // if the name already exists, append 'k' to it
    if (counts[name]) {
      let newName = name + '(' + counts[name] + ')';

      // increment count for the updated name
      counts[newName] = (counts[newName] || 0) + 1;
      names[i] = newName;
    }
    
    // increment count for the original name
    counts[name] = (counts[name] || 0) + 1;
  }

  return names;
}

module.exports = {
  renameFiles
};
