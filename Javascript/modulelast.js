const postsDiv = document.getElementById("posts");

// Task 1: Display only the first five posts
// Task 2: Show userId on each card
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        return response.json();
    })
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
            postsDiv.innerHTML += `
                <div style="border:1px solid black; padding:10px; margin:10px;">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <p>User ID: ${post.userId}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Task 3: Request one post by ID
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(post => {
        console.log("Single Post:", post);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Task 4: Try an invalid URL and inspect the error
fetch("https://jsonplaceholder.typicode.com/invalid")
    .then(response => {
        console.log("Status:", response.status);
        console.log("Response OK:", response.ok);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        return response.json();
    })
    .catch(error => {
        console.log("Invalid URL Error:", error.message);
    });