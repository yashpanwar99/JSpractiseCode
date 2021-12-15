console.log('Exercise 2');
/*
    You have to create a div & inject it into the page which contains a heading.
    Whenever someone clicks on the div , it should be converted into an editable item.
    Whenever user clicks away(blur) , save the note into local storage.    

*/

let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is my element , click to edit it');
}else{
    text = document.createTextNode(val);
}


divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elemClass');
divElem.setAttribute('style','border:5px solid black ; width : 250px ; margin : 30px ; padding : 23px');

let cont = document.querySelector('.container');
let first = document.getElementById('myFirst');

cont.insertBefore(divElem , first);


divElem.addEventListener('click',function(){
    let noTextarea = document.getElementsByClassName('textarea').length;
    if(noTextarea ==0){
    let html = elem.innerHTML;
    divElem.innerHTML=`<textarea class="textarea form-control" id="textarea" rows = "3">${html}</textarea>`;
}
    
    let textArea = document.getElementById('textarea');
    textArea.addEventListener('blur' , function(){
        elem.innerHTML = textArea.value;
        localStorage.setItem('text', elem.innerHTML);
    })
});