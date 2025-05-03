async function getPosts() {
    // Async
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const Posts = await response.json();
    console.log(Posts);
  
    // Sync
    const result = Posts.map(function(ele) {
      return `
        <h2>${ele.title}</h2>
        <p>${ele.body}</p>
      `;
    }).join("");
  
    document.querySelector(".Posts").innerHTML = result;
  }
  
  getPosts();
  