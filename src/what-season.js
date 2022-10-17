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
// let Data = new Date()
function getSeason(date) {
// throw new NotImplementedError('Not implemented');
if (!date) return 'Unable to determine the time of year!'
let result = ""

if (date instanceof Date) {
if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')
const numMonth = date.getMonth()
if (numMonth == 11 || numMonth == 0 || numMonth == 1){
  result = "winter"
} else if (numMonth == 2 || numMonth == 3 || numMonth == 4){
  result = "spring"
} else if (numMonth == 5 || numMonth == 6 || numMonth == 7){
  result = "summer"
} else if (numMonth == 8 || numMonth == 9 || numMonth == 10){
  result = "autumn"
} else { result= ("Error time of year")}
return result;// 
}else {
  throw new Error('Invalid date!')
}
}
module.exports = {
  getSeason
};
