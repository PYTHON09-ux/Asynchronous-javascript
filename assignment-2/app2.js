// Getting elements from HTML page
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

// Creating a new div for appending the fetched data we get from API
const contentDiv = document.createElement("div");

  // Create and append header
  const header = document.createElement("h1");

// Adding an event listener to handle button click
button.addEventListener("click", function () {

    contentDiv.classList.remove("content-div");
    header.innerText=""

    // After button click appending the div to container/parent
    container.appendChild(contentDiv);
    contentDiv.innerHTML = "Promise started Executing☑️";
    
    Display();
}
)


function fetchData(){
    return new Promise((reslove)=>{
        reslove(fetch("https://dummyjson.com/posts"))
    })

}

function startfetching(){

    return new Promise((reject)=>{
        setTimeout(()=>{
            reject("Operation time out")
        },5000)
    })
}

function Display(){

    Promise.race([fetchData(), startfetching()])
    
    .then((resp)=> resp.json().then((res)=>{    
    contentDiv.classList.add("content-div");
    contentDiv.innerHTML = ""; // Clear previous content
    header.textContent = "Posts";
    container.insertBefore(header, contentDiv);
        for (const item of res.posts) {
            const content = document.createElement("p");
            content.classList.add("content");
            content.innerHTML = `${item.title}`;
            contentDiv.appendChild(content);
            console.log(item.title);
        }
    }))

    .catch((err)=>{
        contentDiv.innerHTML = "Operation Timeout";
    })
}