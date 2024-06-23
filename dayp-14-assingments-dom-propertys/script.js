
// 1. Modifying Elements Using innerText of paragrapg and provide some unique numbers to that text.

// <div>
//   <h1>Hello World</h1>
// </div>
// <p class="info">This is a paragraph.</p>
// <p class="info">This is another paragraph.</p>
// <p class="info">This is a paragraph.</p>
// <p class="info">This is another paragraph.</p>
// <p class="info">This is a paragraph.</p>
// <p class="info">This is another paragraph.</p>
// <button id="modify">Modify Text</button>

// let button = document.querySelector("button")
// console.log(button );
// button.addEventListener("click", ()=>{
//     let paragraphs = document.querySelectorAll("p.info");
//     for(let i = 0; i < paragraphs.length; i++){
//         paragraphs[i].innerText += ` ${i+1}`
//         }
        
// })


// 2. Appending Text Using textContent in h1 tag and modify that h1 text not removing the original content.

// <div>
//   <h1>Hello From DebugShala </h1>
// </div>
// <button id="but_id"> By JavaScript Lovers</button>

// let h1 = document.querySelector("h1")
// let button = document.querySelector("button")
// console.log(button );
// button.addEventListener("click", ()=>{
//     h1.textContent += " By JavaScript Lovers"
// })


// 3. Using innerHTML to Add List Items that adds a new list item <li>Orange</li> to the unordered list 

// <ul id="fruit-list">
//   <li>Apple</li>
//   <li>Banana</li>
// </ul>
// <button id="add-fruit">Add Fruit</button>
// let fruit = document.querySelector("#fruit-list")
// // console.log(fruit);
// let button = document.querySelector("button")
// // console.log(button );
// button.addEventListener("click", ()=>{
//     fruit.innerHTML += "<li>Orange</li>"
//     })


// 4. Accessing and Modifying Multiple Elements  using text-content property and add unique no to every element

// <div class="class-box" style="visibility: hidden;">Box 1</div>
// <div class="class-box" style="visibility: hidden;">Box 2</div>
// <div class="class-box" style="visibility: hidden;">Box 3</div>
// let div = document.querySelectorAll(".class-box")

// for(let i=0; i<div.length; i++){
//     div[i].textContent += ` ${i+1}`
//     div[i].style.visibility = "visible"
    
// }


// 5. Creating and Appending New Elements that creates three new <div> elements with the text "New Element 1", "New Element 2", and "New Element 3" respectively, and appends them to the div id="container".

// <div id="container"></div>
// <button id="create">Create Elements</button>
// let div = document.querySelector("#container")

// let button = document.querySelector("#create")
// button.addEventListener("click", ()=>{
//     for(let i=1; i<=3; i++){
//         let newDiv = document.createElement("div")
//         newDiv.textContent = `New Element ${i}`
//         div.appendChild(newDiv)
//         }
// })


// 6. Using querySelectorAll to Change Style that changes the color of all paragraphs with the class text to blue 

// <p class="text">Paragraph 1</p>
// <p class="text">Paragraph 2</p>
// <p class="text">Paragraph 3</p>
// <button id="change-style">Change Style</button>
// let p = document.querySelectorAll("p")
// console.log(p);
// let button = document.querySelector("#change-style")
// button.addEventListener("click", ()=>{
//     p.forEach((element)=>{
//         element.style.color = "blue"
//         })
// })

// 7. Removing Elements from the DOM that removes the last list item from the unordered list with the id list 

// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// <button id="remove-item">Remove Last Item</button>
// let ul = document.querySelector("#list")
// let button = document.querySelector("#remove-item")
// button.addEventListener("click", ()=>{
//     let lastItem = ul.lastElementChild
//     ul.removeChild(lastItem)
//     })



// 8. Creating and Inserting Elements at Specific Positions ,that creates a new list item <li>Yellow</li> and inserts it as the second item in the unordered list with the id color-list 

// <ul id="color-list">
//   <li>Red</li>
//   <li>Green</li>
//   <li>Blue</li>
// </ul>
// <button id="insert-color">Insert Color</button>
// let ul = document.querySelector("#color-list")
// let button = document.querySelector("#insert-color")
// button.addEventListener("click", ()=>{
//     let newLi = document.createElement("li")
//     newLi.textContent = "Yellow"
//     let secondItem = ul.children[1]
//     ul.insertBefore(newLi, secondItem)
//     })



// 9. Changing Styles that changes the background color of the div with the id box to green using innerHTML property

// <div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
// <button id="change-color">Change Color</button>

// let id =document.querySelector("#box")
// // console.log(id);
// let button = document.querySelector("#change-color")
// button.addEventListener("click", ()=>{
//     id.style.backgroundColor = "green"
//     })


// 10. Swapping Elements that swaps the positions of the div elements with the ids first and second using InnerText property

// <div id="first">First Div</div>
// <div id="second">Second Div</div>
// <button id="swap-button">Swap</button>

// let id = document.querySelector("#first")
// let id2 = document.querySelector("#second")
// let button = document.querySelector("#swap-button")
// button.addEventListener("click", ()=>{
//     let temp = id.innerText
//     id.innerText = id2.innerText
//     id2.innerText = temp    
//     })



// 11. Add some Items in li and append in last at using innerText property

// <div>
// <ul id="item-list">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Cherry</li>
//   <li>Date</li>
//   <li>Fig</li>
// </ul>
// </div>

// let li = document.querySelector("#item-list")
// let newLi = document.createElement("li")
// newLi.innerText = "Grapes"
// li.appendChild(newLi)
// console.log(li);\



// 12. Displaying All Tag Names using for of loop and print in console.

// <p>Paragraph 1</p>
// <p>Paragraph 2</p>
// <div id="container">Hello ALL From DebugShala</div>
// <p class="text">Paragraph 3</p>
// <button id="show-tags">Show Tag Names</button>

// let button = document.querySelector("#show-tags")
// button.addEventListener("click", ()=>{
//     let elements = document.querySelectorAll("*")
//     for(let element of elements){
//         console.log(element.tagName)
//         }
//         })


// 13. Changing Text Content Using innerText property that changes the text of the <h1> element to "New Header" and print in console.

// <h1 id="header">Old Header</h1>
// <button id="change-text">Change Text</button>
// let h1 = document.querySelector("#header")
// let button = document.querySelector("#change-text")
// button.addEventListener("click", ()=>{
//     h1.innerText = "New Header"
//     console.log(h1)
//     })


// 14. Updating Inner HTML that changes the inner HTML of the div with the id content to <p>New Content</p> 

// <div id="content">
//   <p>Old Content</p>
// </div>
// <button id="update-html">Update HTML</button>

// let div = document.querySelector("#content")
// let button = document.querySelector("#update-html")
// button.addEventListener("click", ()=>{
//     div.innerHTML = "<p>New Content</p>"
//     console.log(div)
//     })


// 15. Using textContent to Display Hidden Text that logs the text content of the hidden paragraph with the id hidden-text to the console using innerHTML property.

// <p id="hidden-text" style="display: none;">This is hidden text.</p>
// <button id="show-hidden-text">Show Hidden Text</button>

// let p = document.querySelector("#hidden-text")
// let button = document.querySelector("#show-hidden-text")
// button.addEventListener("click", ()=>{
//     console.log(p.textContent)
//     })
