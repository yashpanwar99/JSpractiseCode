// Initialized the variables
let apiKey = 'a8cc0465c16c4a079cc22a138742d76c';
// let source = 'bbc-news';
let source = 'crypto-coins-news';
// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        console.log(articles);
        
        // for(let val of articles){
        //     console.log(val)
        // }
        let newsHTML = "";
        articles.forEach(function(element,index){
            // console.log(articles[index]);
                    let news = 
                    `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index+1} : </b>${element["title"]}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                            ${element["content"]}. <a href="${element.url}" target = "_blank">Read more here</a>
                            </div>
                        </div>
                    </div>`
            newsHTML += news;
        }); 
        newsAccordion.innerHTML=newsHTML;    
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send();

