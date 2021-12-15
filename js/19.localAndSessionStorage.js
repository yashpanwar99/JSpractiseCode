console.log('We will learn about local and session storage');
/*
  Local Storage stores some key - values of a web site which we can access later also
  while session storage stores key - values for a session & will be removed after the session is over. 

   Local Storage & Session Storage are components of window objects.
  
  */

// let a = window;
// console.log(a);

let impArray = ['MSIT' , 'MAIT' , 'BVP'];
let impArray2 = ['KTM' , 'Ducati' , 'TVS'];
let impArray3 = ['mango' , 'kiwi' , 'apple'];

localStorage.setItem('name' , 'Yash');
localStorage.setItem('name2' , 'Yashwardhan');
localStorage.setItem('college' , impArray);
localStorage.setItem('bike',JSON.stringify(impArray2));
localStorage.setItem('fruits',JSON.stringify(impArray3));

let name1 = localStorage.getItem('name');
let name2 = localStorage.getItem('name2');
let name3 = localStorage.getItem('college');
let name4 = localStorage.getItem('bike');
let name5 = JSON.parse(localStorage.getItem('fruits'));

console.log(name1);
console.log(name2);
console.log(name3);
console.log(typeof name3);
console.log(name4);
console.log(typeof name4);
console.log(name5);
console.log(typeof name5);

/* JSON.parse will convert it into an array object
so now we can apply all array functions & methods on it.
*/
name5.forEach(function(element)  {
        console.log(element);    
});


// localStorage.clear();    // Clears the entire local storage.
// localStorage.removeItem('name');   // Clears the given key-value pairs.


// SESSION STORAGE

sessionStorage.setItem('sessionname' , 'sYash');
sessionStorage.setItem('sessionname2' , 'sYashwardhan');
sessionStorage.setItem('sessioncollege' , impArray);
// sessionStorage.clear();
//localStorage.clear();