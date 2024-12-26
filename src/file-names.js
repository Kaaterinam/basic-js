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
  let count = {};
  let result = [];

  names.forEach(name => {
    let newName;

    if (count[name] !== undefined) {
      let k = count[name] + 1;
      while (count[`${name}(${k})`] !== undefined) {
        k += 1;
      }
      newName = `${name}(${k})`;
      count[name] = k;
    } else {
      newName = name;
      count[name] = 0;
    }

    count[newName] = 0;
    result.push(newName);
  });

  return result;
}

module.exports = {
  renameFiles
};
