console.log("We'll learn about object prototypes in JS");

let obj = {
    name:"Yash",
    marks:100,
    roll_no : 19
}

// console.log(obj); 


// Creating our constructor
function objt(givenName,givenMarks){
    this.name = givenName;
    this.marks = givenMarks;
}
// Add in our own function to prototype

objt.prototype.getName = function(){
    return this.name;
}

objt.prototype.setName = function(newName){
     this.name = newName;
}
objt.prototype.setMarks = function(newMarks){
    this.marks = newMarks;
}
let nm1 = new objt('Yash',90);
console.log(nm1);
// console.log(nm1.name);















