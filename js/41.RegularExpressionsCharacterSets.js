console.log("We will learn about Regular Expressions - Character sets & Quantifiers in JS");

// Character Set
let regex = /Yash/;
    regex = /Y[a-z]sh/;   // It will match with a to z any character.
    regex = /Y[ae]sh/;   // It will match with only a,e.
    regex = /Y[^ae]sh/;   // It will not match with only a,e.
    regex = /Y[ae]s[hs]/;
    regex = /Y[a-zA-Z]sh[cb0-9]/;   

// Quantifiers
    regex = /Ya{2}sh/;   // a can occur exactly two times.
    regex = /Ya{0,2}sh/;   // a can occur betwee 0 to 2 times.

// Groupings
    regex = /(Yas){2}/;   // Yas should occur exactly two times.


let str = "The winner of 2021 is Yash. Congratulations Yash";

let result = regex.exec(str);
// console.log("The result from exec is " , result);

if(regex.test(str)){
    console.log(`The string " ${str} " matches the expression '${regex.source}'`);
}
else{
    console.log(`The string " ${str} " does not match the expression '${regex.source}'`);
}