/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
  // think about the steps first
  // create a variable to store the sum of the number in the left diagonal
  let sum1 = 0
  // create a variable to store the sum of the number in the right diagonal
  let sum2 = 0

  // loop through the given matrix starting from 0 to the end by step 1

  for(let i = 0 ; i < sqrMatrix.length ; i++ ){
    // we are updating the sum1 by adding the next number of our left diagonal
    sum1 += sqrMatrix[i][i];
    // we are updating the sum2 by adding the next number of our right diagonal
    sum2 += sqrMatrix[i][sqrMatrix.length - 1 - i];
  }
  // retun the absolute value of the difference between the two sums 
  return Math.abs(sum1 - sum2)
  
}