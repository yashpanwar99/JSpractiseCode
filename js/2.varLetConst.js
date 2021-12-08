console.log("var Let Const Tutorial")
// Variables in Java Script
// var , let , const

var name1 = 'yash';
var surname = 'panwar';
var marks = 99;
var city = "Delhi";
console.log(name1,surname,marks); 

// Rules for creating javascript variables
/* 
1. Cannot start with numbers.
2. Can start with letters , _ , $.
3. Are case sensitive.
*/

// Const
const naam = "Yashwardhan";
console.log(naam);
// const once declared & initialized can not be re-declared & initialized again.

// let
// let has a block scope
// let helps in creating a local variable with polluting the global scope.
{
    let city = "Jaipur";
    city = "Khetri";
    console.log(city);
}

console.log(city);


/* MOST common programming case types are -
1. camelCase
2. PascalCase
3. kebab-case
4. snake_case 
8*/