// 1. Create an array of 10 integer and display their item in numbered list using for of loop.

// let arr=[11,12,13,14,15,16,17,18,19,20]
// let list="<ol>"
//  let arr1=arr.forEach(arr=>{
//    list+= "<li>" + arr + "</li>"
// })
// list+="</ol>"
// document.write(list)

// 2. Create an array of 10 String and display their item in unordered list using for in loop.
// let arr=["apple","mango","graps","banana","kiwi","nuts","Orange","pomegranate","Papaya"," Blueberry"]
// let ul="<ul>"
// let newArr=arr.forEach(arr=>{
//     ul+="<li>" + arr + "</li>"
// })
// ul+="</ul>"
// document.write(ul )

// 3. Create an array of some value and display their results in square using forEach() method.

// let arr=[2,4,6,8,10]
// let result=""
// arr.forEach((ele)=>{
//    result+= ele * ele + " ";
// })
// document.write(result)



// 4. Create an array of some String and display their each char in '-' separated.
// let arr=["apple","mango","graps","banana","kiwi","nuts","Orange","pomegranate","Papaya"," Blueberry"]

// let result=arr.forEach((elem)=>{
//     document.write(elem+" - ")
// })

// 5. Create an array of some floating value and display their value and their index in unordered list using forEach() method.
// let arr=[1.5,2.5,5.5,8.9,4.56]
// let result=arr.forEach((value,index,arr)=>document.write("<li>" + "index of array is " + index + " and the value is " + value + "</li>"))




// 6. Write a js code to create an array of integers, Accept the number of the array from user using prompt() , display all array elements in ordered list using forEach() method.

// let arr=[]
// let num=prompt("Enter the number of array")
//  num=Number.parseInt(num)
// const acceptArr = (num)=>{
//     for(let i=0; i<num;i++){
//         let value =prompt("enter the element to enter in array")
//            arr.push(value)
//         }
//         let list="<ol>"
//        arr.forEach(ele=>{
//         list+= "<li>" + ele + "</li>"
//        })
//       return list+="</ol>"
       
// }
// document.write(acceptArr(num))


// 7. Accept the alement to be searched in the array from user . Check weather the element is present and if present at which index.

// let value=prompt("Enter the element to be searched")
// value=Number.parseInt(value)
// let arr=[2,4,6,8,10]
// const searchingFun=(arr,elem)=>{
//     if(arr.includes(elem)){
//             document.write(true + arr.indexOf(elem))
//     }

// }
// searchingFun(arr,value)

// 8. Sort the number array on numeric values using Named function.
// let arr=[25,6,5,32,56,89,62,5632,556,4554,2545,552]
// let temp=arr[0]

// function sortNum(arr) {
// //  let result= arr.sort((a,b)=>{return a-b})
// //   return result
//    for (let i=0; i<arr.length-1; i++){
//        for(let j=i+1; j<arr.length; j++){

//                  if(arr[i] > arr[j]){
//                   const temp= arr[j];
//                      arr[j] = arr[i]
//                      arr[i] = temp
//                  }
//        }
//    }
// return arr;
// }
// document.write(sortNum(arr) + " sorted array ")



// 9. Create the array of fruits name and Display all the names in alphabetical order.

// let fruits =["Mango","Graps","Kiwi","Watermelon","Apple"]
// fruits.sort()
// document.write(fruits)

// 10. Display the sum , average of the array of integer value using reduce() method.

// let arr=[2,4,6,8,10]
// let result = arr.reduce((accum,curval)=>{ 
//       return  curval+accum
// },0)
// document.write(result)

// let arr=[2,4,6,8,10]
// let result = arr.reduce((accum,curval)=>{ 
//       return  curval+accum
// },0)/arr.length
// document.write(result)

// 11. Check weather all the numbers are even.
// let arr=[2,4,6,8,10,1,14]

// const evenCheckFun = (arr)=>{
//   let result = arr.filter((num)=>num % 2 === 0)
//   return arr.length === result.length
//  }

//  if(evenCheckFun(arr)){
//   document.write("Given array is even")
//  }else{
//   document.write("Given array is not true")
//  }


// 12. Check weather all numbers are prime.

// 13. Create an array take value from user through prompt and sort value in ascending order.
// let lengthArr=prompt("enter the length of array")
// lengthArr=Number.parseInt(lengthArr);

// let arr =[]

// const userInput = (lengthArr)=>{
//   for(let i=0;i<lengthArr;i++){
//     let value =prompt("enter the element to enter in array")
//            arr.push(value)
//           }
//           return arr.sort((a,b)=> a-b)
// }
// document.write(userInput(lengthArr))


// 14. Declare an array take input from user and generate maximum and minimum number and display in browser

// 15. Create 2 arrays of even and odd numbers (use filter fn).

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let result=arr.filter((elem)=> elem % 2 ===0)
// document.write(result)

// let result=arr.filter((elem)=> elem % 2 !=0)
// document.write(result)



// let arr=[1,2,3,4,5,6,7,8,9,10]
// 16. Create an array for taking input from user through prompt() and display values in bulleted list using anonyomous fn.

// let len=prompt("Enter the length of array")
// len=Number.parseInt(len)

// const bulletdList = function (len){
//   let arr=[]
// for(let i=0; i<len;i++){
//   let value=prompt("enter the element to enter in array")
//              arr.push(value)
// }
// let list="<ul>"
// for(let i=0; i<len; i++){
//   list += "<li>" + arr[i] + "</li>"
// }
// list+= "</ul>"
// return list;
// }
// document.write(bulletdList(len))



// 17. Use reduce to calculate factorial of a given number from an array of first n natural numbers ( n being the number whose factorial needs to be calculated).


// let n=prompt("enter the number till you want the array ")
// n=Number.parseInt(n)

// const fact= (n)=>{
//   let arr=[]
//   for(let i=1;i<=n;i++){
//     arr.push(i)
//   }
 
// let result=[]
// result=arr.reduce((accum,curr)=>{
//   return accum*curr
// },1)
// return  result
// }
// document.write(fact(n))


// 18. create an array of cube  of given numbers.

// 19. Write a js code which take input from user and find their factorial numbers.
// let n=prompt("enter the value ")
// n=Number.parseInt(n)

// const fact = (n)=>{
// let number;
// number = number*fact(n-1)
// }
// document.write(fact(n))



// 20. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let array3=[]
// for(let i=0; i<array1.length;i++){
//   array3.push(array1[i]+array2[i])
  
// }
// document.write(array3)