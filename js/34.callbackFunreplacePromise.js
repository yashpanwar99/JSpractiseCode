console.log("In this tut we will learn using promises instead of call back functions");

// Pretend that this response is comming from the server
const students = [
    {name:"Yash",lang:"JavaScript"},
    {name:"Chintu",lang:"Java"}
]


function enrollStudents(student){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();    
            }else{
                reject();
            }
            
            
        }, 5000);
    
    })

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
enrollStudents(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("Some error occured"); 
});


// function inside then is ran as - resolve()
// function inside catch is ran as - reject()