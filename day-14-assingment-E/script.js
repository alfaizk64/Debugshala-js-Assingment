// 1. Create a new div element with the content "New Section Added" and append it to the end of the section with the class main-content.
// let div = document.createElement("div")
// div.textContent="New Section Added"
// document.querySelector(".main-content").appendChild(div)

// 2. Create a new h2 element with the content "Introduction" and prepend it to the section with the class main-content
// let h2 = document.createElement("h2")
// h2.textContent="Introduction"
// document.querySelector(".main-content").prepend(h2)


// 3. Create a new p element with the content "Inserted Before Article 2" and insert it before the article with the id article2.
// let p = document.createElement("p")
// p.textContent="Inserted Before Article 2"
// let article = document.querySelector("#article2")
// article.insertAdjacentElement("beforebegin",p)


// 4. Create a new p element with the content "Inserted After Article 1" and insert it after the article with the id article1.
// let p = document.createElement("p")
// p.textContent="Inserted After Article 1"
// let article = document.querySelector("#article1")
// article.insertAdjacentElement("afterend",p)


// 5. Create a new h1 element with the content "Replaced Header" and replace the header with the id header.
// let h1 = document.createElement("h1")
// h1.textContent="Replaced Header"
// let header = document.querySelector("#header")
// header.replaceWith(h1)

// 6. Create a new footer element with the content "New Footer Section" and replace the existing footer with the id footer.
// let footer = document.createElement("footer")
// footer.textContent="New Footer Section"
// let footer2 = document.querySelector("#footer")
// footer2.replaceWith(footer)


// 7. Create a new div element with the content "Before Header" and insert it before the header with the id header.
// let div = document.createElement("div")
// div.textContent="Before Header"
// let header = document.querySelector("#header")
// header.insertAdjacentElement("beforebegin",div)


// 8. Create a new div element with the content "After Footer" and insert it after the footer with the id footer.
// let div = document.createElement("div")
// div.textContent="After Footer"
// let footer = document.querySelector("#footer")
// footer.insertAdjacentElement("afterend",div)


// 9. Create a new div element with the content "Append to Body" and append it to the end of the body.
// let div = document.createElement("div")
// div.textContent="Append to Body"
// document.body.appendChild(div)


// 10. Create a new div element with the content "Prepend to Body" and prepend it to the start of the body.
// let div = document.createElement("div")
// div.textContent="Prepend to Body"
// document.body.prepend(div)







// <header id="header">Welcome to the Practice Session</header>
// <section class="content">
//     <div id="container">
//         <div id="box1" class="box">Box 1</div>
//         <div id="box2" class="box">Box 2</div>
//     </div>
//     <div id="box3" class="box">Box 3</div>
// </section>
// <footer id="footer">End of content.</footer>


// 1. Insert an <h1> element with the content "Inserted Before Header" immediately before the header element using insertAdjacentHTML.
// let h1 = document.createElement("h1")
// h1.textContent="Inserted Before Header"
// let header = document.querySelector("#header")
// header.insertAdjacentElement("beforebegin",h1)

// 2. Insert a <p> element with the content "Inserted After Header" immediately after the header element using insertAdjacentHTML.
// let p = document.createElement("p")
// p.textContent="Inserted After Header"
// let header = document.querySelector("#header")
// header.insertAdjacentElement("afterend",p)


// 3. Insert a <div> element with the content "Inserted At Start of Container" at the beginning of the div with id container using insertAdjacentHTML.
// let div = document.createElement("div")
// div.textContent="Inserted At Start of Container"
// let container = document.querySelector("#container")
// container.insertAdjacentElement("afterbegin",div)


// 4. Insert a <div> element with the content "Inserted At End of Container" at the end of the div with id container using insertAdjacentHTML.
// let div = document.createElement("div")
// div.textContent="Inserted At End of Container"
// let container = document.querySelector("#container")
// container.insertAdjacentElement("beforeend",div)

// 5. Insert a <span> element with the content "Inserted Before Box 2" immediately before the div with id box2 using insertAdjacentHTML.
// let span = document.createElement("span")
// span.textContent="Inserted Before Box 2"
// let box2 = document.querySelector("#box2")
// box2.insertAdjacentElement("beforebegin",span)

// 6. Insert a <span> element with the content "Inserted After Box 2" immediately after the div with id box2 using insertAdjacentHTML.
// let span = document.createElement("span")
// span.textContent="Inserted After Box 2"
// let box2 = document.querySelector("#box2")
// box2.insertAdjacentElement("afterend",span)

// 7. Remove the div element with id box3 from the DOM.
// let box3 = document.querySelector("#box3")
// box3.remove()

// 8. Insert a <h2> element with the content "Inserted Before Footer" immediately before the footer element using insertAdjacentHTML.
// let h2 = document.createElement("h2")
// h2.textContent="Inserted Before Footer"
// let footer = document.querySelector("#footer")
// footer.insertAdjacentElement("beforebegin",h2)

// 9. Insert a <p> element with the content "Inserted After Footer" immediately after the footer element using insertAdjacentHTML.
// let p = document.createElement("p")
// p.textContent="Inserted After Footer"
// let footer = document.querySelector("#footer")
// footer.insertAdjacentElement("afterend",p)

// 10. Create a new div element with the content "Appended to Body" and append it to the end of the body.
// let div = document.createElement("div")
// div.textContent="Appended to Body"
// document.body.append(div)

// 11. Insert the text "Inserted Text Before Header" immediately before the header element using insertAdjacentText.
// let header = document.querySelector("#header")
// header.insertAdjacentText("beforebegin","Inserted Text Before Header")

// 12. Insert the text "Inserted Text After Header" immediately after the header element using insertAdjacentText.
// let header = document.querySelector("#header")
// header.insertAdjacentText("afterend","Inserted Text After Header")

// 13. Insert the text "Inserted Text At Start of Container" at the beginning of the div with id container using insertAdjacentText.
// let container = document.querySelector("#container")
// container.insertAdjacentText("beforebegin","Inserted Text At Start of Container")

// 14. Create a new span element with the text "Inserted Element After Box 2" and insert it immediately after the div with id box2 using insertAdjacentElement.
// let span = document.createElement("span")
// span.textContent="Inserted Element After Box 2"
// let box2 = document.querySelector("#box2")
// box2.insertAdjacentElement("afterend",span)




// 15. Create a new div element with the text "Inserted Element Before Footer" and insert it immediately before the footer element using insertAdjacentElement.
let div = document.createElement("div")
div.textContent="Inserted Element Before Footer"    
let footer = document.querySelector("#footer")
footer.insertAdjacentElement("beforebegin",div)
