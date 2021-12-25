console.log("We are going to learn about async/await in js.");

// function func(){
//     console.log("Inside the function")
//     return "Harry"
// }

// console.log("Before calling the function");
// let a = func();
// console.log(a);
// console.log("After calling the function");


// Async Function returns a promise

async function func(){
    console.log("Inside the function")
    return "Harry"
}

console.log("Before calling the function");
let a = func();
console.log(a);
console.log("After calling the function");