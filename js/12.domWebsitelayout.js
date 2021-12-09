console.log("We'll learn DOM manipulation & website layout");

// DOM - Document Object Model is structural representation of html doucument
let a = document;
    // b = document.all;
    // b = document.body;
    // b = document.forms;
    // b= document.links;
    // b= document.links[0];
    // b= document.links[0].href;
    
    // Array.from(a).forEach(function(element){
    //     console.log(element);
    // })
    // console.log(a);
    // console.log(b);



// We need to find all the links containing the given string in it.

let str= document.links;
let string= "google";
Array.from(str).forEach(function(element){
if(element.href.includes(string)){
        console.log(element.href);
    }
})


