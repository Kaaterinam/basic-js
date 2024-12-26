const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let flag = ""
  const result = []
  for (let i = 0; i < arr.length; i+=1) {
    const it = arr[i]
    if (flag === '--discard-next') {
      flag = ""
      i+=1
      continue
    }
    if (it === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1])
      }

      continue
    }
    if (it === '--double-prev') {
      if (i > 0) {
        result.push(arr[i - 1])
      }
      continue
    }
    if (it === '--discard-prev') {
     result.pop()
      continue
    }
    if (it === '--discard-next') {
      flag = '--discard-next';
      continue;
    }

    result.push(it)
  }

  return result

}

module.exports = {
  transform
};
