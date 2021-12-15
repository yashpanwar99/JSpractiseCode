console.log('We will create a web crawler');

/* We have to create a variable which is a string containing the text in a link we are interested in.

  We have to fetch all the links from a given page which contains the text.
*/

let strn = 'python';
let lnk = document .links;
console.log(lnk);
 let a = Array.from(lnk);
 console.log(a);

 Array.from(lnk).forEach(function(element){
     let b = element.href;
     if(b.includes(strn)){
         console.log(b);
     }
});