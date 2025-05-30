/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.

    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    can shift OR swap target element until it reaches desired position

    shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat

*/

function insertionSort2(arr){
    // loop through the array starting from the second element (1) to the end of the array by one step
    
    for(let i=1; i<arr.length; i++){
        // create a new variable (temp) to store the current element (arr[i]) to be inserted in the sorted part
        let temp = arr[i]
        // create a flag variable to track whether "temp" has been inserted (flag=false)
        let flag =false
        // loop through the left part starting from i-1 to 0 by one step backward
        for(let j=i-1; j>=0; j--){
            // check if the current element (arr[j]) is greater than "temp"
            if(arr[j]> temp){
                // update the value at j+1 to the value at j (arr[j+1]= arr[j])
                arr[j + 1] = arr[j];
            }
            // otherwise 
            else{
                // update the value at j+1 to the value of temp (arr[j+1]= temp)
                arr[j + 1] = temp;
                // update the flag to true
                flag = true
                // break
                break;
            }
        }
        // check if the flag is false
        if(!flag){
            // update the value at index 0 to temp value
            arr[0]=temp
        }
    }
    // return arr
    return arr
     
}
let nums = [3, 5, 2, 1, 0];
 console.log(insertionSort2(nums));
  
insertionSort2([3, 0]);
insertionSort2([0]);
insertionSort2([]);
insertionSort2([1, 2, 3, 4, 5]);
insertionSort2([5, 4, 3, 2, 1]);
insertionSort2([5, 4, 0, 2, 1]);




















// ---------------------------


function insertionSort(arr) {
    // pseudo code first
}

insertionSort([3, 5, 2, 1, 0]);
// insertionSort([3, 0])
// insertionSort([0])
// insertionSort([])
// insertionSort([1, 2, 3, 4, 5])
// insertionSort([5, 4, 3, 2, 1])
// insertionSort([5, 4, 0, 2, 1])