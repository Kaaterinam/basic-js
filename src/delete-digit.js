const { NotImplementedError } = require('../extensions/index.js');
const {stringify} = require("mocha/lib/utils");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  let string=n.toString()
  let arrNew=[]
  for (let i=0; i<string.length; i+=1){
    let newStr = string.slice(0,i)+string.slice(i+1)
    arrNew.push(Number(newStr));
  }
  return Math.max(...arrNew)
}

module.exports = {
  deleteDigit
};
