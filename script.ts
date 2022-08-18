const postList = document.getElementById("postList")

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {


    data.forEach((post:any, index:number) => {
        postList.innerHTML += `
      
        <a href="https://jsonplaceholder.typicode.com/posts/${index}">  <div style="cursor:pointer;" class="post" >
        <h3>${post["title"]} </h3>
        <h5>${post["body"]}</h5>
    </div></a>
        `;

    });
}); 

