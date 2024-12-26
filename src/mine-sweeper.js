const { NotImplementedError } = require('../extensions/index.js');
const {min} = require("mocha/lib/reporters");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let result=[]
  for (let i=0; i<matrix.length; i+=1){
    result[i] = []
    for (let j=0; j<matrix[i].length; j+=1){
      if (matrix[i][j]){
        result[i][j]=1
      } else{
        let mines=0
        for (let x=-1; x<=1; x+=1){
          for (let y=-1; y<=1; y+=1){
            if (x ===0 && y===0){
              continue
            }
            let ii=i+x
            let jj=j+y
            if (ii>=0 && jj>=0 && ii<matrix.length&& jj<matrix[i].length){
              if (matrix[ii][jj]){
                mines+=1
              }
            }
          }
        }
        result[i][j]=mines
      }
    }
  }
  return result
}

module.exports = {
  minesweeper
};
