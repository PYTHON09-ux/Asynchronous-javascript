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
    contentDiv.innerHTML = "Callback 🔁 will be executed after 5 seconds ☑️";

    setTimeout(() => {
        // Fetching data and then calling displayData after promise resolves
        fetch("https://dummyjson.com/posts")
            .then((response) => response.json())
            .then((data) => {
                displayData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, 5000);
});

function displayData(data) {
    contentDiv.classList.add("content-div");
    contentDiv.innerHTML = ""; // Clear previous content

    header.textContent = "Posts";
    container.insertBefore(header, contentDiv);

    // Loop through posts and display titles
    for (const item of data.posts) {
        const content = document.createElement("p");
        content.classList.add("content");
        content.innerHTML = `${item.title}`;
        contentDiv.appendChild(content);
        console.log(item.title);
    }
}
