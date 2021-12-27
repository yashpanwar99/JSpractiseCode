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
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log("users resolved");
    return users;
    // return "Harry"
}

console.log("Before calling the function");
let a = func();
console.log("After calling the function");
console.log(a);
// a.then(data => console.log(data))
a.then(function(data){
    console.log(data);
});
console.log("Code Finished")


