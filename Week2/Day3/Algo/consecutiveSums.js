/* 
    This is an actual interview algorithm given to a Coding Dojo alumni

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, an integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:

function findConsecutiveSums(arr, k){
    // create a variable that will store our result
    const sums = []
    // loop through the given starting from 0 to the end of the array by one step
    for(let i = 0; i <arr.length; i++){
        // create a consecutive sum array
        const consecNums = []
        // create a rolling sum variable
        let sum = 0
        // create a new variable work as an idx for array into the while loop
        let j = i
        // loop until the sum is less or equal than k or we read off the end of the array
        while(sum <= k && j < arr.length){
            // check if sum + the value at idx j is still smaller than k, add it to consecNums
            if(sum + arr[j] <= k){
                sum += arr[j]
                consecNums.push(arr[j])
                j++
                // check if sum is equal to k, push consecNums into sums output
                if(sum == k){
                    sums.push([...consecNums])

                }else{
                    // if the next number is so large that the sum becomes larger than k
                    break
                }
            }
        }
    }
    return sums
}