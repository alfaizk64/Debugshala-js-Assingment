// 1. Write a JavaScript program to remove items from a drop-down list. on click of button named remove.


// function removeItem() {
//     var selectElement = document.getElementById("colorSelect");
//     // Get the selected index
//     var selectedIndex = selectElement.selectedIndex;


//     if (selectedIndex !== -1) {
//         selectElement.remove(selectedIndex);
//     } else {
//         alert("Please select an option to remove!");
//     }
// }

// 2. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.

// function myFunction() {
//         var x = document.getElementById("myP");
//         x.style.color = "blue";
//         x.style.fontSize="4rem"
//     }



// 3. Click Me! Game: Create an HTML page with a single button element that says "Click Me!". then JavaScript code that listens for a click event on the button.
// When the button is clicked, change the button's text to "You Clicked Me!" and its background color (e.g., red) using DOM manipulation methods.

// let btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     btn.innerText = "You Clicked Me!"
//     btn.style.backgroundColor = "red"
// })

// 4. Dynamic To-Do List:Create an HTML page with an input field for adding new tasks and a button to submit them. Get references to the input field and a container element (e.g., ul) for holding the tasks. Create a new li element for each task entered. Append the newly created li element to the container (ul). Set the content of the li element to the entered task description. Add an event listener to the button that triggers the task addition process when clicked.


// let newTaskInput = document.getElementById("newtask")
// let newTaskBtn = document.getElementById("addTaskBtn")
// let taskList = document.getElementById("taskList")

// newTaskBtn.addEventListener("click",()=>{
//     let newTask = document.createElement("li")
//     newTask.innerText = newTaskInput.value
//     taskList.appendChild(newTask)
//     newTaskInput.value=""
// })
// 5. Changing Element Style: Create an HTML page with multiple colored boxes (e.g., div elements). Select all colored boxes. Change the style properties (e.g., backgroundColor, border) of the selected boxes using methods like: Direct assignment (e.g., box.style.backgroundColor = "yellow") Adding/removing classes with different style definitions in a CSS file.Event Listeners: Optionally, add event listeners (e.g., click) to change the style of a box when it's clicked.
// let boxes = document.querySelectorAll(".box")
// boxes.forEach(box => {
//     box.addEventListener("click",()=>{
//         box.style.backgroundColor = "yellow"
//         })
//         })

        // 6. Image Swapping: Create an HTML page with an image element and two buttons (Next, Previous).Get references to the image element and both buttons.Store an array of image paths representing different images.Attach a click event listener to the Next button that:Increments a counter variable to keep track of the current image index within the image path array.


        let imgPath=document.getElementById("image-viewer")
        let nextBtn=document.getElementById("next-btn")
        let prevBtn=document.getElementById("prev-btn")
         let imgArray=[`https://plus.unsplash.com/premium_photo-1666789257876-176a05094875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8`,
                       `https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8`,
                       `https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8`,
                       `https://plus.unsplash.com/premium_photo-1680546330986-7efea975e7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8`,
                       `https://images.unsplash.com/photo-1719658415828-82c795a40bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8`
        ]
   let currentImageIndex=0;  //keeps track of current image index
imgPath.src= imgArray[currentImageIndex]
   nextBtn.addEventListener("click",()=>{
    currentImageIndex++;
        if(currentImageIndex >= imgArray.length){    //if currentImageIndex value will be greater than or equal to array length than we will assign it to the 0 index
            currentImageIndex=0
        }
        imgPath.src=imgArray[currentImageIndex] //assigning the currentImageIndex value to the src of image tag
        
   })
   prevBtn.addEventListener("click",()=>{
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imgArray.length-1
    }
    imgPath.src=imgArray[currentImageIndex]
   })

// 7.Creating and Removing Elements:Create an HTML page with a button.Create a new paragraph element with some initial text content when the button is clicked using an event listener.
// Append the newly created paragraph to a container element (e.g., div) on the page. When the user clicks on the paragraph itself, remove it from the document using event listeners.
// let container = document.getElementsByClassName("container")[0]
// let btn = document.getElementById("btn")
// let para = document.createElement("p")
// para.innerText = "This is a paragraph"
// btn.addEventListener("click", () => {
//     container.appendChild(para)
//     })
//     para.addEventListener("click", () => {
//         container.removeChild(para)
//         })



// 8. Text Manipulation: Create an HTML page with a heading element and a button.Get references to the heading element and the button. Access and display the current text content of the heading element in an alert message when the button is clicked.Allow the user to modify the heading's text content through a prompt and update the heading element using the entered text.
// let heading = document.getElementById("heading")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//        alert(heading.innerText)
//     let text = prompt("Enter text")
//     heading.innerText = text
//     })


// 9. Create an HTML registration form that includes fields for user name, email, address, city, gender, and mobile number. When the user submits the form, the data should be displayed in a table below the form. Details: Use DOM manipulation to add the submitted data as a new row in the table each time the form is submitted. Make sure the table has appropriate headers for each field.
// let form = document.getElementById("form")
// let tableBody = document.getElementById("userData").getElementsByTagName("tbody")[0]
// form.addEventListener("submit", (e) => {

//     e.preventDefault()
//     let userName = document.getElementById("username").value
//     let userEmail = document.getElementById("email").value
//     let userAddress = document.getElementById("address").value
//     let userCity = document.getElementById("city").value
//     let userGender = document.getElementById("gender").value
//     let userMobile = document.getElementById("mobile-number").value
// // Create a new table row
//     let newRow = document.createElement("tr")
//       // Create table cells for each data field

//       const usernameCell = document.createElement("td")
//       usernameCell.innerText=userName;
//       const emailCell = document.createElement("td")
//       emailCell.innerText=userEmail;
//       const addressCell = document.createElement("td")
//       addressCell.innerText=userAddress;
//       const cityCell = document.createElement("td")
//       cityCell.innerText=userCity;
//       const genderCell = document.createElement("td")
//       genderCell.innerText=userGender;
//       const mobileCell = document.createElement("td")
//       mobileCell.innerText=userMobile;
//       // Add the cells to the row one by one
//       newRow.appendChild(usernameCell)
//       newRow.appendChild(emailCell)
//       newRow.appendChild(addressCell)
//       newRow.appendChild(cityCell)
//       newRow.appendChild(genderCell)
//       newRow.appendChild(mobileCell)
//       // Add the row to the table body
//       tableBody.appendChild(newRow)
//        // Clear the form after submission
//        form.reset();
//       })