console.log("We'll learn DOM Traversal");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont);
// console.log(cont.childNodes); // It gives text , comments etc. too so we use children as it gives only elements.
// console.log(cont.children);
// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);

/* Node Types - 

    1. Element
    2. Attribute
    3. Text Node
    8. Comment
    9. Document
   10. DocType

*/
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);


// Accessing children's children

let con = document.querySelector('div.container');
console.log(con.children[0].children);
// console.log(con.children[0].children[0].children);

// console.log(con.childNodes);

// console.log(con.firstChild);
// console.log(con.firstElementChild);

// console.log(con.lastChild);
// console.log(con.lastElementChild);

// console.log(con.children);
// console.log(con.childElementCount);

// console.log(con.firstElementChild);
// console.log(con.firstElementChild.parentNode);
// console.log(con.firstElementChild.nextSibling);
// console.log(con.firstElementChild.nextElementSibling);

