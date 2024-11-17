// Get elements from the HTML page
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

// Create reusable elements
const contentDiv = document.createElement("div");
const header = document.createElement("h1");

// Adding an event listener to handle button click
button.addEventListener("click", async () => {
  contentDiv.classList.remove("content-div");
  header.textContent = "";
  contentDiv.innerHTML = "Promise started Executing ☑️";

  // Append contentDiv to container after button click
  container.appendChild(contentDiv);

  // Call the API
  await fetchData();
});

// Function to fetch data from API
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    displayData(data.posts);
  } catch (error) {
    contentDiv.innerHTML = `Error: ${error.message}`;
  }
}

// Function to display fetched data
function displayData(posts) {
  contentDiv.classList.add("content-div");
  contentDiv.innerHTML = ""; // Clear previous content

  // Create and append header
  header.textContent = "Posts";
  container.insertBefore(header, contentDiv);

  // Append each post to contentDiv
  posts.forEach((post) => {
    const content = document.createElement("p");
    content.classList.add("content");
    content.textContent = post.title;
    contentDiv.appendChild(content);
    console.log(post)
  });
}
