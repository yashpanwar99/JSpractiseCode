console.log("We'll learn about fetch API in js")

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');


// function getData(){
//     console.log("Started getData")
//     url = "yash.txt"
//     fetch(url).then((response)=>{
//     console.log("inside first then")
//         return response.text();
//     }).then((data)=>{
//     console.log("inside second then")
//         console.log(data); 
//     })
// }
// console.log("Before running getData");
// getData()
// console.log("After running getData");


// Gettig data using githib api  (GET REQUEST)
function getData(){
    url = "https://api.github.com/users"
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data); 
    })
}

getData();

// Gettig data (POST REQUEST)
// function postData(){
//     url = "https://api.instantwebtools.net/v1/airlines";
    
//    data=`{
//     "id": 127634561,
//     "name": "Sri Lankan Airways",
//     "country": "Sri Lanka",
//     "slogan": "From Sri Lanka",
//     "head_quaters": "Katunayake, Sri Lanka",
//     "website": "www.srilankaairways.com",
//     "established": "1990"
// }`

//     params = {
//         method:'post',
//         headers:{
//             'Content-type':'application/json'
//         },
//         // body:JSON.stringify(data)                     //as data is already a string
//         body: data
//     }
//     fetch(url,params).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data); 
//     })
// }

// postData();
 