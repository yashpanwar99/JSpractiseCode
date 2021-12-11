console.log("We are going to create , replace & remove the elements");

// Creating Element
let elmt = document.createElement('li');

// Defining Element
elmt.className = 'childul';
elmt.id = 'createdLi';
elmt.setAttribute('title' , 'myTitle');
// elmt.innerText='inner text';
elmt.innerHTML='<b>inner text</b>';

// console.log(elmt);

// Appending the element

let itm = document.querySelector('ul.this');
itm.appendChild(elmt);

// method-2 of putting text in the created element

// let txt = document.createTextNode(' Hello , PETER!!!!');
// elmt.appendChild(txt);


// replacing elements usin DOM

let elem2 = document.createElement('h3');
elem2.className='elm2';
elem2.id='elm2ID';
// let txt = document.createTextNode('This is a Hello for Peter!!!!')
// elem2.appendChild(txt);

// elmt.replaceWith(elem2);

// Replacing chld Nodes

let mul = document.querySelector('#myUL')
// console.log(mul);
mul.replaceChild(elmt , document.getElementById('fui'));
mul.removeChild(document.getElementById('lui'));

let a = elem2.getAttribute('id');
// console.log(a);
let b = elem2.getAttribute('class');
// console.log(b);
let c = elem2.hasAttribute('href');
console.log(c)

elem2.removeAttribute('id');
console.log(elem2);

elem2.setAttribute('title' , 'myTitle'); 