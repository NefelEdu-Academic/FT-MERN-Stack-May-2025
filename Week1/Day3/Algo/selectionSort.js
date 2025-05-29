/* 
    https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

function selectionSort(arr){
    // loop through the given array strating from 0 to the end by one step (counter : i)
        // create a new variable (minIndex) that contain the counter of the loop (to suppose that the current index contain the minimum value in the array)
        // loop through the array starting from i + 1 to the end of the array and going step by step (counter: j)
            // check if the current index (j) contain a value that is lower than the value at minIndex
                // update the minIndex to the current index (j)
        // create a new variable to store the temporary value (temp) of the value that exist in i
        // update the value at index i with the value at minIndex
        // update the value at minIndex with the value of temp
    // return arr

 }

// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));

