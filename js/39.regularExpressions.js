console.log("We'll learn about JavaScript Regular Expressions & related functions. ");
/*
Regular expressions are the patterns that are used to match character combinations in strings. Regular expressions are a powerful way of doing search and replace in strings. It is a small language which is a part of many programming languages like JavaScript, Python, and Java. Regular expression allows us to check a string of characters like a password for patterns, to see if the set password matches with the pattern defined by that regular expression. 

SYNTAX   -   /pattern/modifiers;
*/

let reg = /Yash/;  // This is a regular expression literal in js
// reg = /Yash/g;     // g is a flag to search globally.
// reg = /Yash/i;     // i is a flag to search case insensitive.
console.log(reg);
console.log(reg.source);      // Gives us the value of regular expression

//Functions to match expressions
 
let s = "The winner of 2021 is Yash. Congratulations Yash";
// Functions to match expressions
//1.exec() - This function will return an array for match or null for no match
let result = reg.exec(s);   // This will match the first occurance of regular expression
console.log(result);
// result = reg.exec(s);   // This will match the second occurance of regular expression
// console.log(result);
// console.log(result.input);
// console.log(result.index);
// result = reg.exec(s);      // We can use as many exec function using global flag.
// console.log(result);

// 2. test() - Returns true or false.

let result1 = reg.test(s);  // This will return true only if reg is present in string s.
console.log(result1);

// 3. match() - It will return an array of results or null  

// let result2 = reg.match(s) ---> This is wrong!!
let result2 = s.match(reg) // ---> This is right
console.log(result2);

// 4. search() - Returns index of first match else -1

// let result3 = reg.search(s) ---> This is wrong!!
let result3 = s.search(reg) // ---> This is right
console.log(result3);

// 5. replace() - Returns new replaced string with all the replacements if global flag is there (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);

