console.log("We are going to learn AJAX");
/*
    Ajax stands for Asynchronous JavaScript And XML.
    Ajax is not a programming language but a set pf existing technologies.
    Ajax loads the data from the server and updating the parts of a web page selectively without reloading the whole page. 
    Ajax helps in fetching data asynchronously without interfaring with the existing page.
    No page reload/refresh
    Modern websites uses JSON instead or XML for data transfer.
    Ajax uses XMLHttpRequest object to achieve this.
*/

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');
    // Instantiate an XHR(XMLHttpRequest) object
    const xhr = new XMLHttpRequest();

    // Open the object

    // - Use this for get request
    // xhr.open('GET', 'yash.txt', true);
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // - Use this for post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');
    
    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log("on progress");
    }


/*
        // ReadyState values   

Value	         State	                                Description
0	             UNSENT	                              Client has been created. open() not called yet.
1	             OPENED	                              open() has been called.
2	             HEADERS_RECEIVED	                  send() has been called, and headers and status are available.
3	             LOADING	                          Downloading;responseText holds partial data.
4	             DONE	                              The operation is complete.

*/
    // xhr.onreadystatechange = function(){
    //     console.log("Ready state is" + xhr.readyState);
    // }


    // What to do when response is ready
    xhr.onload = function () {
        console.log(this.responseText)
    }

/*
    200 is the http status code for success , 404 for not found , 403 for forbidden . Google rest     

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Some error occured");
        }

    }
*/


    // Send the request
    params = `{"name":"test1","salary":"123","age":"23"}`;
    xhr.send(params);

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}