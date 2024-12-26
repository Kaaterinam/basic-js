const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
    const nonNegatives = arr.filter(x => x !== -1);
    nonNegatives.sort((a, b) => a - b);
    let idx = 0;
    return arr.map(x => {
      if (x === -1) {
        return -1;
      } else {
        return nonNegatives[idx++];
      }
    });
}

module.exports = {
  sortByHeight
};
