console.log("We'll learn about HTML Selectors");
/*
    Element Selector -
       1). Single Element Selector
       2). Multi Element Selector
*/

//  Single Element Selectors

let m = document.getElementById('myFirst');
// m = m.className;
// m = m.childNodes;
// m=m.parentNode;
// m=m.parentElement;
// m=m.style.color='red';    // We can also style the elements using DOM Selectors
// m.innerText='Yash Panwar';
// m.innerHTML='<b>Yash Panwar</b>';
// console.log(m);
// console.log(m.innerText);


//  QUERY SELECTORs

let n = document.querySelector('#myFirst');
n = document .querySelector('.child');
n=document.querySelector('div');
n=document.querySelector('b');
n=document.querySelector('h1');
n.style.color=('green');
console.log(n);


// Multi Element Selector

let elems = document.getElementsByClassName('child');
    elems = document.getElementsByTagName('div');
console.log(elems);

