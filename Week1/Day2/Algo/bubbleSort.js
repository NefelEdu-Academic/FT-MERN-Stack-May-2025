// bubbleSort()
/*
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//             j j+1
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    
    // write your code here
    // we create  a loop to loop through the array starting from 0 to length-1 with step 1
    for(let i = 0; i < nums.length; i++){
        // We create another loop to make sure that all the number are ordered
        for(let j = 0; j < nums.length-i; j++){
            // we will comare the number with the adjust number
            if(nums[j] > nums[j+1]){
                // Swap the two numbers
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums;
}

//TODO call the function and pass nums1, nums2, nums3
