// Loops are used for tasks with repetation
// General Loops - For , While , Do-While

//   for loop -

for(let i=0; i<10 ; i++){
    console.log(i);
}

// while loop -

let j=0;
while(j<10){
    console.log(j);
    j++;
}

// do while loop

let b = 0;
do{
    console.log(b);
    b+=1;
}while(b<10); 


// Break - It is used to break the loop when a perticular condition gets satisfied

let num = 0;
while(num<6){
    console.log(num);
    num++;
    if(num===2){
        break;
    }
}

// Continue - Used to skip that iteration

let nume = 0;
while(nume<6){
    if(nume===2){
        nume+=1;
        continue;
    }
    console.log(nume);
    nume++;
}


// Loop for an array

const arr = [1,2,'Yash',4,'Panwar',6,7,8];
arr.forEach(function(element){
    console.log(element);
});


arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

console.log("Done"); 

for(let a=0 ; a<arr.length; a++){
    console.log(arr[a]);
}


// Loop for an object

let obj = {
    name : "Yash",
    surname : "Panwar",
    Marks : 100,
    status : true
}

for( let key in obj){
    // console.log(console.log(key));
    // console.log(console.log(obj[key]));
    
    console.log(`The ${key} of the object is ${obj[key]}`);
}