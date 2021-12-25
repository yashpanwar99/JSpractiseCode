console.log("We'll learn about arrow functions.");

// // Syntax 1 (NORMAL FUNCTIONS)

// function welcome(){
//     console.log("Welcome , Mr. Yash");
// }

// welcome();


// Syntax 2  (NORMAL FUNCTIONS)

// const welcome = function(){
//     console.log("Welcome , Mr. Yash");
// }

// welcome();

// Syntax 3  (ARROW FUNCTIONS)

// const welcome = ()=>{
//     console.log("Welcome , Mr. Yash");
// }

// welcome();

// RETURNING FUNCTIONS

// const greet=function(){
//     // return(console.log("Hello , Peter"));
//     return ("Hello , Peter");
// }
// console.log(greet())

// SO arrow functions reduces the lines of code
// Arrow functions allow one liners without curly braces.

// const greet = ()=>("Hello , Peter");
// const greet = ()=>{return("Hello , Peter")};
// const greet = ()=>({name : "Peter"});



// ARROW FUNCTIONS Single ARGUMENTS

// const greet = (name)=> "Hello " + name;
// const greet = name=> "Hello " + name;
console.log(greet("Yash"))

// ARROW FUNCTIONS Multiple ARGUMENTS
const greet = (name,end)=> "Hello " + name + end;
console.log(greet("Yash"," Bye"))
