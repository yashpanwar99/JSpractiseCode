console.log("Asynchronous Programming");
/*
In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, you can move to another task before the previous one finishes.

In jS there are 3 ways for asynchronous programming-

   - Async/Await
   - Callback
   - Promises

*/


//  SYNCHRONOUS PROGRAMMING

// for(let i=0 ; i<10000 ; i++){
//    let num = i;
//    console.log("This is the " + i +"th index")
// }

// console.log("Completed the printing");


// ASYNCHRONOUS PROGRAMMING

// setTimeout(() => {
//    for(let i=0 ; i<10000 ; i++){
//          let num = i;
//          console.log("This is the " + i +"th index")
//       }
      
// },100);
// console.log("Completed the printing");