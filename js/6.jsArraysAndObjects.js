const marks = [12,14,16,18,20];
const fruits = ["Apple","Mango","Kiwi"]; 
const mixed = [11,12,"mango",[1,2]];

const arr = new Array(1,2,3,"Yash",[5,6]);
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

console.log(fruits[1]);
console.log(fruits[2]);

// There are 2 things for an array - property & method 
console.log(fruits.length);
fruits[3]="Pineapple";
console.log(fruits)
console.log(fruits.length);
let value = fruits.indexOf("Mango");
console.log(value);

for(let val of fruits){
    console.log(val);
}

for(let index in fruits){
    console.log(index);
}


for(let index in fruits){
    console.log(fruits[index]);
}

// Arrays are dynamic in nature so we can add elements later in it using push/pop & shift/unshift

fruits.push("melon");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("straberry");
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.reverse();
console.log(fruits);

//Array concatination
let veg = ['aloo','kanda','bhindi'];
console.log(fruits.concat(veg));
console.log(fruits);


// OBJECTS IN JAVA-SCRIPT
let myobj={
    name : "Yash",
    marks : 99,
    subjects : ["english","hindi","maths"],
    pass : true,
    ['full name'] : "yash panwar" // if we want to give space in the keys
}
console.log(myobj);
console.log(myobj.name);
console.log(myobj['marks']);
console.log(myobj['full name']);
console.log(myobj.marks);
