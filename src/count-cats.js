const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
//    throw new NotImplementedError('Not implemented');
  // let arrCombined = matrix.reduce(function(result, current){
  //   return result(current)
  // },[]);
  let cats = [];
  let columns = matrix.length;
  for (let i = 0; i < columns; i++) {
    cats = cats.concat(matrix[i].filter(cat => (cat == '^^')))
    
  }
  //let cats = arrCombined.filter(cat => (cat == '^^'))
  return cats.length
}


module.exports = {
  countCats,
};
