// Arrow Function
const greetUser = (username)=>{
    return `Hello ${username}`

}

console.log(greetUser("Mustapha"));

// Callback Functions
const processString = (str, transformStr)=>{
    return transformStr(str)
}

const toUpperCaseFn = (word) =>{
    return word.toUpperCase()
}

const strText = "hello"
console.log(processString(strText, toUpperCaseFn));


const doubleNumbers = (nums, callBackFn)=>{
    let result = []
    for(let i = 0; i < nums.length; i++){
        result.push(callBackFn(nums[i]))
    }
    return result
}

const multiplyByTwo = (num) => num * 2
const square = (num) => num * num

console.log(doubleNumbers([3,5,6,4], multiplyByTwo));
console.log(doubleNumbers([3,5,6,4], square));


// Array Method: .map()
const discount = (price) => price * 0.9

const originalPrices = [5, 10, 15, 20]
const discountedPrices = originalPrices.map(discount)
console.log(discountedPrices);

// Array Method: .filter()
const ages = [5, 10, 18, 20, 19, 4, 8, 318]
const isAdult = (age) => age >= 18
const adults = ages.filter(isAdult)
console.log(adults);

// Array Method: .forEach()
const fruits = ["apple", "banana", "orange", "citron", "strawberry"]
const logFruit = (fruit) => console.log(`Fruit: ${fruit}`);
fruits.forEach(logFruit)

// Array Method: .find()
const scores = [85, 92, 99, 78, 95, 5, 88, 0]
const win = (score) => score >= 90
console.log(scores.find(win))

// Freeze
const arr = Object.freeze([1,2,3,4]);
console.log(arr);

//arr.push(300); // we're no longer allowed to change `arr`
const numbers = [10, 5,1, 3, 12, 22, 8];
numbers.sort();
console.log(numbers);

// this will return [10, 12, 22, 3, 5, 8 ]

const items = ["carrots", "onions", "celery", "mushrooms", "butter", "thyme"];
items.sort(); 

console.log(items);

