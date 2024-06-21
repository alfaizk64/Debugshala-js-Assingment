

// 4. Check type of document and window and print in console.
// console.log("Type of document: ", typeof document); // object
// console.log("Type of window: ", typeof window); // object


// 5. Create one html page using these data and get element data by id attribute by <h1> and print in console
// <body>
//     <div>Hello Students</div>
//     <h1 id="head">DOM Manipulation in JavaScript</h1>
//     <p id="para1-id">Welcome to the DOM Manipulation lesson by Mr. Smith</p>
//     <p class="para1-class">Today, we will learn about Web Development</p>
//     <p class="para-class">Next, we will explore Data Science fundamentals</p>
//     <button>Click Me</button>
//     <script src="A_08_Dom.js"></script>
// </body>
// let data =document.getElementById("head")
// console.log(data);

// 6. Using the above html page get select data by className and print in console.
// let data = document.getElementsByClassName("para-class");
// console.log(data); // HTMLCollection


// 7. Using the above html page get select data by tagName and print in console.
// let data = document.getElementsByTagName("p");
// console.log(data); // HTMLCollection


// 8. Using the above html page get select data by method querySelectorAll() using . for class data and print in console.
// let data = document.querySelectorAll(".para-class");
// console.log(data); // NodeList

// 9. Using the above html page get select data by method querySelector() using # for id data and print in console.
// let data = document.querySelector("#para1-id");
// console.log(data); // HTMLParagraphElement


// 10. If I want to use these (#para1-class) which dom method is used.
let data = document.querySelector("#para1-class");
console.log(data); // null