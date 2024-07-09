// const url = "https://jsonplaceholder.typicode.com/posts"


// Using the Promise chaining :-
// 1: Fetch and Display a Single Post Title
// Task: Write a function getFirstPostTitle that fetches the first post from https://jsonplaceholder.typicode.com/posts and displays its title in a paragraph with the id post.when user click button (get title in list)
// document.getElementById("btn").addEventListener("click",()=> getFirstPostTitle(url) )
// function getFirstPostTitle(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data[0].title)
//         document.getElementById("post").innerHTML = data[0].title
//         })
// }



// 2: Display Post Titles in an Ordered List
// Task: Create a function displayPostTitlesInList that fetches all posts and displays their titles in an ordered list (ol) on the page. when user click button (get title in list).
// document.getElementById("btn").addEventListener("click",()=> displayPostTitlesInList(url) )
// function displayPostTitlesInList(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         let list = document.getElementById("list")
//         for (let i = 0; i < data.length; i++) {
//             let li = document.createElement("li")
//             li.innerHTML = data[i].title
//             list.appendChild(li)
//             }
//             })
// }

// 3: Fetch and Display User Information
// Task: Write a function getUserInfo that fetches a user by ID from https://jsonplaceholder.typicode.com/users/1 and displays the user's name and email in two separate paragraphs.when user click button (get user info).
// const url1 ="https://jsonplaceholder.typicode.com/users/1"
//  function getUserInfo(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("name").innerHTML = data.name
//         document.getElementById("email").innerHTML = data.email
//         })  
//  }
//  document.getElementById("btn").addEventListener("click",()=> getUserInfo(url1) )

// 4: Fetch and Display All User Names
// Task: Create a function displayUserNames that fetches all users from https://jsonplaceholder.typicode.com/users and displays their names in a bulleted list (ul).when user click button (get All user names).
// let userApi = "https://jsonplaceholder.typicode.com/users"
// function displayUserName(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         let list = document.getElementById("list")
//         for (let i = 0; i < data.length; i++) {
//             let li = document.createElement("li")
//             li.innerHTML = data[i].name
//             list.appendChild(li)
//             }
//             })
            
// }
// document.getElementById("btn").addEventListener("click",()=> displayUserName(userApi))



// 5: Fetch and Display a Post with ID
// Task: Write a function getPostById that fetches a post by ID from https://jsonplaceholder.typicode.com/posts/{id} (replace {id} with an actual number) and displays the post's title and body in separate paragraphs.when user click button (get posts title with appropriate id using post method).
// let url ="https://jsonplaceholder.typicode.com/posts/1"
// function getPostById(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("title").innerHTML = data.title
//         document.getElementById("body").innerHTML = data.body
//         })
//         }
//         document.getElementById("btn").addEventListener("click",()=> getPostById(url))



// at last try this all using async and await();
// 1: Fetch and Display a Single Post Title
// Task: Write a function getFirstPostTitle that fetches the first post from https://jsonplaceholder.typicode.com/posts and displays its title in a paragraph with the id post.when user click button (get title in list)

// async function getFirstPostTitle(){
//     let url = "https://jsonplaceholder.typicode.com/posts"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     document.getElementById("post").innerHTML = data[0].title
// }
// document.getElementById("btn").addEventListener("click",()=> getFirstPostTitle())

// 2: Display Post Titles in an Ordered List
// Task: Create a function displayPostTitlesInList that fetches all posts and displays their titles in an ordered list (ol) on the page. when user click button (get title in list).

// async function displayPostTitlesInList(){
//     let url = "https://jsonplaceholder.typicode.com/posts"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     let list = document.getElementById("list")
//     for(let i=0; i<data.length; i++){
//         let li = document.createElement("li")
//         li.innerHTML = data[i].title
//         list.appendChild(li)
//         }
// }
// document.getElementById("btn").addEventListener("click",()=> displayPostTitlesInList())


// 3: Fetch and Display User Information
// Task: Write a function getUserInfo that fetches a user by ID from https://jsonplaceholder.typicode.com/users/1 and displays the user's name and email in two separate paragraphs.when user click button (get user info).

// async function getUserInfo(){
//     let url = "https://jsonplaceholder.typicode.com/users/1"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     document.getElementById("name").innerHTML = data.name
//     document.getElementById("email").innerHTML = data.email
    
// }
// document.getElementById("btn").addEventListener("click",()=> getUserInfo())


// 4: Fetch and Display All User Names
// Task: Create a function displayUserNames that fetches all users from https://jsonplaceholder.typicode.com/users and displays their names in a bulleted list (ul).when user click button (get All user names).
//  async function displayUserName(){
//     let url = "https://jsonplaceholder.typicode.com/users"
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     let list = document.getElementById("list")
//     for(let i=0; i<data.length; i++){
//         let li = document.createElement("li")
//         li.innerHTML = data[i].name
//         list.appendChild(li)
//         }
//  }
//  document.getElementById("btn").addEventListener("click",()=> displayUserName())

// 5: Fetch and Display a Post with ID
// Task: Write a function getPostById that fetches a post by ID from https://jsonplaceholder.typicode.com/posts/{id} (replace {id} with an actual number) and displays the post's title and body in separate paragraphs.when user click button (get posts title with appropriate id using post method).

async function getPostById(){
    let url = "https://jsonplaceholder.typicode.com/posts/1"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    document.getElementById("title").innerHTML = data.title
    document.getElementById("body").innerHTML = data.body
    
}
document.getElementById("btn").addEventListener("click",()=> getPostById())