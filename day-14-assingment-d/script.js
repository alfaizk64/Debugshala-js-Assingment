// 1. Retrieve the <span> element using getElementsByTagName and log it to the console using console.log().
//    let span = document.getElementsByTagName("span")
//    console.log(span);

// 2. Retrieve the <span> element using getElementsByTagName and log it to the console using console.dir() to see its properties.
// let span = document.getElementsByTagName("span")[0];
// console.dir(span);

// 3. Log the nodeName of the first child of the body element.
// let bodyFirstChild = document.body.firstChild;
// console.log(bodyFirstChild.nodeName); // Output: #text
// The output is "#text" because the first child of the body element is a text node (
    //   containing whitespace characters).

    // 4. Log the nodeName of the first element child of the body element.
    // let bodyFirstChildElement = document.body.firstElementChild;
    // console.log(bodyFirstChildElement.nodeName); // Output: SPAN

    // 5. Retrieve the <span> element by its ID (container-id) and log its innerHTML. 
    // let span = document.getElementById("container-id");
    // console.log(span.innerHTML); // Output: "Hello, World!"

    // 6. Retrieve the <span> element by its ID (container-id) log its innerText.
    // let span = document.getElementById("container-id");
    // console.log(span.innerText); // Output: "Hello, World!"
    // 7. Log the outerHTML of the <span> element with ID (container-id).
    // let span = document.getElementById("container-id");
    // console.log(span.outerHTML); // Output: "<span id="container-id">Hello, World 



    // 8. Modify the outerHTML of this <span> element to a new HTML content <h1>Hello World of Javascript</h1>.
    // let span = document.getElementById("container-id");
    // span.outerHTML = "<h1>Hello World of Javascript</h1>";

    // 9. Create a new paragraph element (<p>) with the text "This is a new paragraph".
    // let newParagraph = document.createElement("p");
    // newParagraph.textContent = "This is a new paragraph";
    // document.body.appendChild(newParagraph);
 

//     <div id="one" class="hi" data-provider1="data-set1" data-provider2="data-set2">Learning JavaScript Dom Manipulation</div>
    
// 10. Check if the <div> element has a data-provider1 attribute. Log the result to the console.
// Check if the <div> element has a data-provider5 attribute. Log the result to the console.
// let div = document.getElementById("one");
// console.log(div.hasAttribute("data-provider1")); // Output: true




// 11. Set the style attribute of the <div> element to color: red;.
// Verify by logging the value of the style attribute to the console.
// let div = document.getElementById("one");
// div.style.color = "red";
// console.log(div.style.color); // Output: red

// 12. Remove the class attribute from the <div> element.
// Check if the class attribute exists after removal by logging the result of hasAttribute() method to the console.
// let div = document.getElementById("one");
// div.removeAttribute("class")
// console.log(div.hasAttribute("class")); // Output: false


// 13. Retrieve the value of the custom attribute data-provider2 and log it to the console.
// Change the value of data-provider2 to "student" and log the updated value to the console.
// let div = document.getElementById("one");
// console.log(div.getAttribute("data-provider2")); // Output: data-set2
// div.setAttribute("data-provider2", "student");
// console.log(div.getAttribute("data-provider2")); // Output: student


// 14. Retrieve the value of the data-provider1 attribute of the <div> element and log it to the console.
// Change the value of the data-provider1 attribute to "student2" and log the updated value to the console.
// let div = document.getElementById("one");
// console.log(div.dataset.provider1); // Output: data-set1
// div.dataset.provider1 = "student2";
// console.log(div.dataset.provider1); // Output: student2


// 15. Check if the <div> element has an id attribute. Log the result to the console.
// Remove the id attribute from the <div> element.
// Check again if the id attribute exists and log the result to the console.
// let div = document.getElementById("one");
// console.log(div.hasAttribute("id")); // Output: true
// div.removeAttribute("id");
// console.log(div.hasAttribute("id")); // Output: false

// 16. Set the title attribute of the <div> element to "This is a title".
// Retrieve and log the value of the title attribute to the console.
// let div = document.getElementById("one");
// div.title = "This is a title";
// console.log(div.title); // Output: This is a title
// console.log(div);

// 17. Add a new custom attribute data-provider3 with the value "student3" to the <div> element.
// Log the value of the data-provider3 attribute to the console.
// let div = document.getElementById("one");
// div.dataset.provider3 = "student3";
// console.log(div.dataset.provider3); // Output: student3
// console.log(div); // Output: <div id="one" data-provider1="data-set1
// data-provider2="student" data-provider3="student3">Div 1</div>


// 18. Create a new span element with the text content "New Span Element".
// Set an attribute data-span with the value "spanValue" to the new span element.
// Append the new span element to the <div> element.
// Log the outer HTML of the <div> element to the console to verify the changes.
// hint :- createElement() and appendChild() method see in w3 resource
// let div = document.getElementById("one");
// let span = document.createElement("span");
// span.textContent = "New Span Element";
// span.dataset.span = "spanValue";
// div.appendChild(span);
// console.log(div.outerHTML); // Output: <div id="one" data-provider1="data 
// // -set1" data-provider2="student" data-provider3="student3">Div 
// // 1<span data-span="spanValue">New Span Element</span></div>
// console.log(div); // Output: <div id="one" data-provider1="data-set


// 19. Retrieve and log the tag name of the <div> element using nodeName.
// Retrieve and log the tag name of the first child of the <div> element using nodeName.
// let div = document.getElementById("one");
// console.log(div.nodeName); // Output: DIV
// console.log(div.firstChild.nodeName); // Output: #text
// console.log(div.children[0].nodeName); // Output: SPAN
// console.log(div); // Output: <div id="one" data-provider1="data-set

// 20. Change the innerHTML of the <div> element to <b>Hello, World!</b>.
// Log the new innerHTML to the console.
let div = document.getElementById("one");
div.innerHTML = "<b>Hello, World!</b>";
console.log(div.innerHTML); // Output: <b>Hello, World!</b>
console.log(div); // Output: <div id="one" data-provider1="data-set1