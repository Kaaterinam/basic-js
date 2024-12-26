const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
const repeatTimes=options.repeatTimes !==undefined ? options.repeatTimes : 1 ;
const separator=options.separator !==undefined ? options.separator : "+";
const addition=options.addition !==undefined ? options.addition : ''
  const additionRepeatTimes=options.additionRepeatTimes !==undefined ? options.additionRepeatTimes:1
  const additionSeparator=options.additionSeparator !==undefined?options.additionSeparator:"|"
  const strToRepeat=str===null?'null':String(str)
  const additionToRepeat=addition===null?'null':String(addition)
  const stringRepeat=new Array(additionRepeatTimes).fill(additionToRepeat).join(additionSeparator)
  const stringStr=`${strToRepeat}${stringRepeat}`
  const endStr=new Array(repeatTimes).fill(stringStr).join(separator)
  return endStr
}

module.exports = {
  repeater
};
