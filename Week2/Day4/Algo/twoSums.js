/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/

// 👉  take a few mins to write the pseudocode first
// create the function twoSums and decide what params it needs and what it will return here:
function twoSums(arr, target) {
  // create a variable to store the first index
  let idx1 = 0;
  // create a variable to store the second index
  let idx2 = 1;

  //   create an empty array to store our result
  const result = [];
  // loop until idx1 reaches the end of the array
  while (idx1 !== arr.length) {
    // check if the sum of elements at idx1 and idx2 equals the target
    if (arr[idx1] + arr[idx2] === target) {
      // push indices to the result array
      result.push(idx1);
      result.push(idx2);
      return result;
    }
    // otherwise check if idx2 reaches the end of the array
    else if (idx2 === arr.length) {
      idx1++; //move idx1 to the next index
      idx2 = idx1 + 1; // reset idx2 to be the next element after idx1
    }
    //otherwise we need to increment idx2 by 1
    else {
      idx2++;
    }
  }
  return result;
}


arr = [2, 11, 7, 5];
arr2 = [3, 4, 5, 6, 7, 8, 9, 8, 9];
console.log(twoSums(arr, 9));
console.log(twoSums(arr2, 17));

