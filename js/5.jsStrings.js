console.log("We are learning JS Strings");

const str1 = "Yash";
const str2 = "Panwar";
console.log(str1 + " " + str2);

let str3 = "Yashwardhan"

// String concatination
str3 = str3.concat(" is the best");
console.log(str3);

// String Length
console.log(str3.length)

// converting to lowercase
let str4 = "YASHWHARDHAN";
console.log(str4.toLowerCase());

//converting to upper case
console.log(str3.toUpperCase());

//indexing of elements
console.log(str3.indexOf('h'))
console.log(str3.indexOf('p')) // element is not present so it returned -1.
console.log(str3.indexOf('a',2)) // It finds the element after that index.
console.log(str3.lastIndexOf('h'));

// finding characters
console.log(str3.charAt(2));

// to chck the ending of a string.
console.log(str3.endsWith("best"))
console.log(str3.includes('is'));

// substr & substring
let strg = "Yashwardhan";
console.log(strg.substr(2));
console.log(strg.substr(2,5));

console.log(strg.substring(2));
console.log(strg.substring(2,5));

console.log(strg.slice(2));
console.log(strg.slice(2,5));

console.log(strg.split('a'));

console.log(strg.replace('Y','H'))


// JavaScript templates
let temp1 = 'Yash';
let temp2 = 'best';
console.log(`${temp1} is the ${temp2}`)
