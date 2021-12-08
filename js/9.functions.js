// Functions are a block of code designed to do a perticular task at multiple instances

function greet(name,congo){
    console.log(`Hello ${name} , all  the best , ${congo}`);
}

greet('Yash' , 'congratulations');
greet('Chintu' , 'better luck next time');


// We can also return values from function

function increment(num){
    return num+1;
}
 const d = increment(10);
 console.log(d);

 // Scope

 /* 
     var has a function scope
     let & const has a block scope.
*/     