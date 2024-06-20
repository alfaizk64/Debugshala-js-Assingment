// 1. Create a js code where one window inside we can open new window or resize it (500,500) and print that data which u have get from prompt in first window.
// let newWindow = window.open("","new window","width=300 , height=300")
// newWindow.document.write("hello")
// newWindow.resizeTo(500,500)
// let data = prompt("Enter Your Data Here")
// newWindow.document.write(data);




// 
// 2. Create a js code where u define a one function and after that fn calling in console page moves in another file .
// function myFunction(){
//         console.log("Hello World");
//     }
//     myFunction();
    // in console page
    // console.log(window.location.href);
    // window.location.href = "https://www.google.com";

//     3. In Html body where u have following things so change the lastchild of body color will be yellow.
//     <body>
//            <p>Hello</p></br>
//            <span>From DebugShala</span></br>
//            <ul><li>Ram</li>
//                <li>Shyam</li>
//                <li>Geeta</li>
//                <li>Mohan</li>
//            </ul>
    
//    </body>
    // let lastChild = document.body.lastChild
    // lastChild.style.color = "yellow"
    // console.log(lastChild)

    // 4. In 3 ques if u access all childNodes , so convert these child nodes to array form.
    // let arr=Array.from(document.body.childNodes)
    // console.log(arr);


    
// 5. Create a function that outputs the names of the parent, next sibling, and previous sibling of the document's root element (<html>).
// hint :- document.documentElement refers to the root element of the document, typically the <html> element.
// document.documentElement.parentNode refers to the parent node of the <html> element, which is the document itself.
// document.documentElement.nextSibling often returns null because the <html> element is usually the last child of its parent (the document).
//  const Names = ()=>{
//     let parent = document.documentElement.parentNode;
//     let nextSibling = document.documentElement.nextSibling;
//  let previousSibling = document.documentElement.previousSibling;
//   let result = parent  + nextSibling + previousSibling;
// console.log(result);
//  }
// Names()

// 6. Find the toal length of the html body content of 3 ques.
// let bodyContent = document.body.innerHTML;
// let length = bodyContent.length;
// console.log(length)

// 7. Can u justify some window info like their window name , window location path , hostname of the current window , protocol of the current window which current window is open and display in browser.
// console.log(window.name);
// console.log(window.location.pathname);
// console.log(window.location.hostname);
// console.log(window.location.protocol);


// 8. Write a js code which access body last child and print in browser and also change their background color = blue.
// <body>
//         <p>Hello</p></br>
//         <span>From DebugShala</span></br>
// 	<h4> Hello from h4 tag</h4>
// </body>
// let lastChild = document.body.lastChild
// console.log(lastChild)
// lastChild.style.backgroundColor = "blue"
// console.log(lastChild)

