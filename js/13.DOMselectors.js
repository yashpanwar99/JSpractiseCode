console.log("We'll learn about HTML Selectors");
/*
    Element Selector -
       1). Single Element Selector
       2). Multi Element Selector
*/

let m = document.getElementById('myFirst');
// m = m.className;
// m = m.childNodes;
// m=m.parentNode;
// m=m.parentElement;
// m=m.style.color='red';    // We can also style the elements using DOM Selectors
// m.innerText='Yash Panwar';
m.innerHTML='<b>Yash Panwar</b>';
console.log(m);
// console.log(m.innerText);
