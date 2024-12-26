const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date ) {
  if (!date) {
    return ('Unable to determine the time of year!');
  }

  try {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error("Invalid date!");
    }
  } catch (e) {
    throw new Error("Invalid date!");
  }

  if (date.getMonth()===1 || date.getMonth()===11 || date.getMonth()===0){
    return 'winter'
  } else if (date.getMonth()===3 || date.getMonth()===4 || date.getMonth()===2){
    return 'spring'
  } else if(date.getMonth()===6 || date.getMonth()===7 || date.getMonth()===5){
    return 'summer'
  } else if (date.getMonth()===10 || date.getMonth()===9 || date.getMonth()===8){
    return 'autumn'
  }
  return false
}

module.exports = {
  getSeason
};
