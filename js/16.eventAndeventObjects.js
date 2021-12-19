console.log('We will learn about event and event objects');

document.getElementById('heading').addEventListener('click' , function(e){
    console.log('hello peter!!!!!');
    //e is called event object
    console.log(e);
    let a = e.target.className;
    // a = e.target.classList;
    // a = Array.from(e.target.classList);
    // let a = e.target.id;
    // a = e.offsetX;
    // a = e.offsetY;
    // a = e.clientX;
    // a= e.clientY; 
    // console.log(a)
// location.href = '//google.com';


});
