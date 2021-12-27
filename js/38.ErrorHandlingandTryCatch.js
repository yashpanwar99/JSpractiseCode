console.log("We'll learn about Error Handling & Try Catch");

let x = "yash";
x=undefined;       // so it does not throw error
// if(x!=undefined){
//     console.log("X is not undefined");
// }else{
//     console.log("x is undefined");
// }

if(x!=undefined){
    throw new Error("X is not undefined"); // To throw a custom error.
}else{
    console.log("x is undefined");
}


try {
    // hellopeter          // its an error as it is not a js syntax
    console.log("Hello Peter"); 
} catch (error){
    console.log("Sorry for the error");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Finally we'll run this")
}



