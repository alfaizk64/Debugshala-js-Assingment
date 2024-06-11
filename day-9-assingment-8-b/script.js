// 1. Create an array of size 10 and add element using push() and unshift() method.

// let arr=new Array(10);
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// arr.push(10)
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// arr.push(10)
// arr.unshift(5)
// arr.unshift(4)
// arr.unshift(3)
// arr.unshift(2)
// arr.unshift(1)
// document.write(arr)

// 2. Create an array of size 10 and remove element using pop() and shift() method.
// let arr =[1,2,3,4,5,6,7,8,9,10]

// arr.pop()
// document.write(arr)
// document.write("</br>")
// arr.shift()
// document.write(arr)

// 3. Create an array of String add and removing both with splice() and display data in listed item.
    // let str=["mango","Apple","graps","banana","watermelon"]
    // str.splice(2,0,"kiwi","strawberry")
    // document.write(str)
    // document.write("</br>")

    // str.splice(2,2)
    // document.write(str)
//     let list="<ul>"
// for(let i=0;i<str.length;i++){
//     list+= "<li>" + str[i] + "</li>"
// }
// list+="</ul>"
// document.write(list)

// 4. Create an array of objects and retrieve every object element using for loop and display data in table format.
// let arrOb=[
//     {
//         name:"alfaiz",
//         role:"Fullstack"
//     },
//     {
//         name:"vikas",
//         role:"frontend"
//     },
//     {
//         name:"tarun",
//         role:"backend"
//     }
// ]





// 5. Write a javascript code which convert array to String  using which method to do this task.
// let arr=[12,22,85,69,78,30]
//  document.write(typeof arr)
//  document.write("</br>")

// const convertStr = (str)=>{
//    return str.join(",")
// }
// document.write(typeof(convertStr(arr))+ "</br>" + convertStr(arr))

// 6. Write a javascript code which find part of array  using slice(). and use overloading in these method.
// let arr=[12,22,85,69,78,30]
// let arr1=arr.slice(1,4)
// document.write(arr1)
// let arr=[12,22,85,69,78,30]
// let arr1=arr.slice(4)
// document.write(arr1)

// 7. Write a javascript code which display array elements in ordered list.
// let arr=[12,22,85,69,78,30]

// const fun=(arr)=>{
//     let list ="<ol>"
//     for(let i=0; i<arr.length; i++){
//           list+="<li>" + arr[i] + "</li>"
//     }
//     return list+="</ol>"
// }
// document.write(fun(arr))

// 8. Write a js code which arrange array items in alphabetical order and display in bulleted list.

// let arr=["Zebra","Yak","Lion","Dear","Cat","alfaiz"]

// const fun=(arr)=>{
//     let list ="<ol>"
//     arr.sort()
//     for(let i=0; i<arr.length; i++){
//           list+="<li>" + arr[i] + "</li>"
//     }
//     return list+="</ol>"
// }
// document.write(fun(arr))

// 9. Write a js code which arrange array items in ascending order and display in numbered list.
// let arr=[122,85,69,78,30,78,4,1,3]

// const fun=(arr)=>{
//     arr.sort((a,b)=>a-b)
//     let list ="<ol>"
//     for(let i=0; i<arr.length; i++){
//           list+="<li>" + arr[i] + "</li>"
//     }
//     return list+="</ol>"
// }
// document.write(fun(arr))



// 10. Write a js code which arrange array items in descending order and display in aplhabetical list.

// let arr=[122,85,69,78,30,78,4,1,3]

// const fun=(arr)=>{
//     arr.sort((a,b)=>b-a)
//     let list =`<ol type="a">`
//     for(let i=0; i<arr.length; i++){
//           list+="<li>" + arr[i] + "</li>"
//     }
//     return list+="</ol>"
// }
// document.write(fun(arr))




// 11. Write a JavaScript function to check whether an `input` is an array or not. print output in browser.
// let arr="[122,85,69,78,30,78,4,1,3]"
// const checkGivenInput = (input)=>{
//    if(typeof(input)=="object"){
//     return true;
//    }
//     return false
// }
// document.write(checkGivenInput(arr))

// 12. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red+Green+White+Black"

// let myColor = ["Red", "Green", "White", "Black"];

// let joinColor=[]
// const joinFun=(arr)=>{
//     document.write(arr)    
//     document.write("</br>")    
//     return joinColor=arr.join("+")
// }
// document.write(joinFun(myColor))


// 13.Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//  arr1.sort((a,b)=>a-b)
//  document.write(arr1)

// 14.Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// let  arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// const freqFun=(arr1)=>{

// }

// 15. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let str ='The Quick Brown Fox'
let str1=str.split("").map(item=> (item===item.toUpperCase())?(item.toLowerCase()):item.toUpperCase()).join("")

document.write(str1)



// 17. Write a JavaScript program to merge two arrays  in one array.
//  let arr=[1,2,3,4,5]
//  let arr1=[6,7,8,9,10]
//  let arr2=arr.concat(arr1)
//  document.write(arr2)