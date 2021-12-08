/* Data Types is Java Script are -
  - Primitive Datatypes ( memory allocation in stack )
     1. bool
     2- string
     3- numbers
     4- null
     5- undefined
     6- symbol

  - Reference Datatypes ( memory allocation in heap(dynamic memory) )
     1- array
     2- object literal
     3- function
     4- dates
*/
// Primitive Data types
   // String
  let name1 = "Yash";
  console.log("My string is " + name1);      
  console.log("Data Type is " +  typeof (name1));

// Number  
  let num = 10;
  console.log("Data Type is " +  typeof (num));

// boolean
let val = true;
console.log("Data Type is " +  typeof (val));

//null
let value = null;
  console.log("Data Type is " +  typeof (value));

// Undefined
  let undef = undefined;
  console.log("Data Type is " +  typeof (undef));

// Reference Datatypes

// Arrays
let arr = [1,2,3,true,'yash'];
console.log("Data Type is " +  typeof (arr));

// Javascript is a dynamically typed language , so don't need to pre-define any variable as every variable is an object in js.


// Object literals
let StMarks={
    Yash : 100,
    Wardhan : 99,
    Singh : 101,
}
console.log(StMarks);
console.table(StMarks);

// Function
function findName(){

}
console.log(typeof(findName))

//Dates
let date = new Date();
console.log(typeof(date)); 