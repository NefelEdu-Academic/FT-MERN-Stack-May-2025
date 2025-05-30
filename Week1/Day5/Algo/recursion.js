// Recursion: a programming technique where a function calls itself to solve a smaller version of the original problem. Every recursive function must have:

// Base case – the condition to stop the recursion.

// Recursive case – the function calls itself with a smaller input.

// It’s like solving a big problem by breaking it into smaller, similar problems.




// Factorial
// Write a recursive function called factorial that takes a positive integer num as input and returns the factorial of that number.
// The factorial of a number n is the product of all positive integers from n down to 1.
// For example:

// factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 = 120
//                                        5 * factorial(4)
//                                        4 * factorial(3)
//                                        3 * factorial(2)
//                                        2 * factorial(1)
//                                        1

// factorial(1) should return 1


function factorial(num) {
  // Basic Case
  if(num ===1){
    return 1
  }
  // LOGIC 
  return num * factorial(num-1)
  
}

console.log(factorial(4));


// Count Down
// Create a recursive function named countdown that takes a number n and prints numbers from n down to 1. When the countdown reaches 0 or a negative number, print "Done!".

// Example Output:
// If the input is 5, the function should print:

// 5  
// 4  
// 3  
// 2  
// 1  
// Done!
function countdown(n) {
    // Basic Case
    if(n<=0){
      console.log("Done!");
      return;
    }
    // LOGIC
    console.log(n);
    return countdown(n-1)
}

countdown(5);


// Sum of Numbers from 1 to n
// Create a recursive function called sumTo that takes a number n and returns the sum of all numbers from 1 to n.
// For example:

// sumTo(5) should return 15 because 5 + 4 + 3 + 2 + 1 = 15

// sumTo(1) should return 1
function sumTo(n) {
    // Basic Case
    if(n === 1){
      return 1
    }
    // LOGIC
    return n + sumTo(n-1)
}

console.log(sumTo(5)); 
