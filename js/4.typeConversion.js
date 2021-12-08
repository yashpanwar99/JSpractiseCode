// Type conversion & type coercion
console.log('Type Conversions');

let myVar ;
myVar = 99;
console.log(myVar, typeof (myVar));

let myVar1 ;
myVar1 = String(99);
console.log(myVar1, typeof (myVar1));

// Another way of type conversions
let num = 19;
console.log(num.toString());
console.log(typeof(num.toString()));

let num1 = true;
console.log(num1.toString());
console.log(typeof(num1.toString()));

// // number conversion
 let val = "1423";
console.log(val , typeof(val));

let valu = Number("1423");
console.log(valu , typeof(valu));

// Parse Int & Parse Float

let value = "10.345";
console.log(value , typeof(value));


let value1 = parseInt("10.345");
console.log(value1 , typeof(value1));


let value2 = parseFloat("10.345");
console.log(value2 , typeof(value2));