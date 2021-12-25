console.log("We'll learn about promises.");
/*
    - Resolve
    - Reject
    - Pending
*/

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
           const error = true;
           if(!error){
            console.log('Your promises has been resolved'); 
            resolve();
           }else{
            console.log('Your promise has not been resolved');
            reject('Sorry not fulfilled');
           }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Yash: Thanks for resolving");
}).catch(function(error){
    console.log("Yash: Very bad " + error)
})

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()












