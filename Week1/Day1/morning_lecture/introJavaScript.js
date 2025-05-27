// naming convention in JS: camelCase

// // Global Scope
// //🥷 Variables declared outside any function or block have global scope. They can be accessed from anywhere in the code.
// var globalVariable = "Hello World!"

// // Local Scope
// function showGlobalVar(){
//     // Function Scope
//     console.log(globalVariable);
    
// }

// showGlobalVar()
// console.log(globalVariable);

// // ES6
// let price = 9.5
// function increasePrice(){

//     price+=1
// }
// console.log(price);
// increasePrice();
// console.log(price);

// // Local Scope
// //🥷 Variables declared within a function or block have local scope. They can only be accessed within that function or block.
// function showLocalVar(){
//     // Function Scope
//     var localVariable = "Hello Mohamed!"
//     console.log(localVariable);
    
// }

// showLocalVar()
// // console.log(localVariable);


// Block Scope
if(true){
    var blockVariable = "Var from block"
    console.log(blockVariable);
    
}

console.log(blockVariable);
// Hoisting

console.log(x);
var x=10;
console.log(x);


