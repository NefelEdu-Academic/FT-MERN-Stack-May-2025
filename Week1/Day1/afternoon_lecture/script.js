// // Object
// const book = {
//     title: "Book 1",
//     nbOfPages: 200,
//     author: "Flen Ben Flen",
//     popular: true,
//     types: ["Roman", "Science Fiction", "Thriller", "Comedian"]
// }

// // const num= book.nbOfPages
// // console.log(num);
// // Destructring
// // const {nbOfPages}= book
// // console.log(nbOfPages);
// const {popular, title, author} = book
// // console.log(title);
// // console.log(popular);
// // console.log(author);
// // const {popular: type} = book
// // console.log(type);

// // console.log(book);

// const {types: [, , , fourthType ]}=book
// // console.log(types);
// console.log(fourthType);


// // Array
// const sports= ["Football", "Tennis", "Swimming", "Sky"]
// // const firstValue = sports[0]
// // const secondValue = sports[1]
// // const thirdValue = sports[2]
// const [secondValue, firstValue, thirdValue] = sports;

// // console.log(firstValue);
// // console.log(secondValue);
// // console.log(thirdValue);

//Spread Operator
// const animal = {
//   type: "bird",
// };
// const animalCopy = {...animal};
// animalCopy.type = "turtle";
// console.log("Original: " + animal.type, "The Copy: " + animalCopy.type);

// // Output: Original: birdThe Copy: turtle
// const animals = ["horse", "dog", "fish", "cat", "bird"];
// const [firstAnimal, secondAnimal, ...others] = animals;  
// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(others);


// // useState example

// let arr = ["Mostafa", "Rayen", "Kossay"]
// const useState = [
//     // getter
//     function (){
//         return arr
//     },
//     // setter
//     function (newArray){
//         arr =newArray
//         return arr
//     }
// ]

// const [getter, setter] = useState
// console.log(getter(), setter(["Jammali", "Tliba", "Battach"]));

// // Functions
// var addNumbers = function (a, b){
//     console.log(a+b);
    
// }

// // addNumbers(3,5)

// // Arrow Functions
// // const addNumbersArrow = (a, b) => {
// //     console.log(a+b);
    
// // }
// // addNumbersArrow(3,5)
// const addNumbersArrow = (a, b) => {
//     const square = (x)=>x*x
//     const s = square(3)
//     console.log(s);
    
//     return a+b
// }
// const result = addNumbersArrow(4,6)
// console.log(result);


const age = 20
// if(age <18){
//     console.log("You're under age");
    
// }else{
//     console.log("welcome");
    
// }
const height = 1.90
// Ternary Operator
age < 18 ? console.log("You're under age") : console.log("Welcome");
// age < 18 ? height < 1.80 ? console.log("You're too short") : console.log("You're tall enough") : console.log("Welcome");


