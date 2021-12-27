console.log("We'll learn more about regular expressions");

let regex = /Yash/;
// Let's look into some MetaCharacter symbols

regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/ // Escape sequence (\ backward slash)



let str = "The winner of 2021 is Yash. Congratulations Yash";

let result = regex.exec(str);
console.log(result);
console.log("The result from exec is " + result);
console.log("The result from exec is " , result);

if(regex.test(str)){
    console.log(`The string " ${str} " matches the expression '${regex.source}'`);
}
else{
    console.log(`The string " ${str} " does not match the expression '${regex.source}'`);
}









