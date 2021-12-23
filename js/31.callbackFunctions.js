console.log("We'll learn callback functions");

/*
A callback is a function that is executed after another function has finished executing. As we have studied earlier that functions are objects. Functions can take functions as arguments and can be returned by other functions. Functions that take another function as an argument are called higher-order functions. So, the callback function can also be defined as any function that is passed as an argument is called a callback function.
*/


// Pretend that this response is comming from the server
const students = [
    {name:"Yash",lang:"JavaScript"},
    {name:"Chintu",lang:"Java"}
]


function enrollStudents(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 5000);
};
function getStudents(){
    setTimeout(() => {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("Students has been fetched");
    }, 1000);
};


let newStudent={name:"Max",lang:"python"};
enrollStudents(newStudent,getStudents);
// getStudents();