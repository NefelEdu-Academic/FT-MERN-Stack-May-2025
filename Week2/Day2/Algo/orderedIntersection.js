/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//! do not use Set()

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  // create a result variable with an empty array to store the resulted array
  // create two variables to store the indices of the given arrays (idxA=0 idxB=0)
  // looping through the given arrays until we reach the end of both of them
    // check if the value at the current index of the first array is equal to the value at the current index of the second array
      // check if the value at the current index of the first array is different to the last value at the result
        // push the value at the current index of the first array in the result
      // move the idxA and idxB to the next value
    // otherwise if the value at the first array is smaller than the value at the second array
      // move idxA to the next value
    // otherwise
      // move idxB to the next value
  // return the result array
}

orderedIntersection(arrA1, arrB1);