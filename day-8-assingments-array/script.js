// 1. Declare one basic array in javascript.

// let arr = [1,8,9,7,6,5,8,7]
// for(let i=0; i<arr.length; i++){
//     document.write("</br>", arr[i])
// }

// 2. Declare one basic array using a new keyword.

//  let arr = new Array("alfaiz","tarun","vikas")
//  for(let i=0; i<arr.length; i++){
//         document.write("</br>", arr[i])
//     }


// 3. Create an blanked array of size 5 in JavaScript and then add some items.
// let arr =new Array(5)
// arr[0]=5;
// arr[1]=8;
// arr[2]=4;
// arr[3]=63;
// arr[4]=25;
// document.write("</br>",arr)

// 4. Create an array and Iterating Over an Array in JavaScript using for loop and index wise access.

// let arr = [45,78,98,65,48,32]
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i]+",")
// }
// document.write("</br>",arr[4])

// 5. How do I check if an Array includes a value in JavaScript? using for loop and inside this if condition.
// let arr = [45,78,98,65,48,32]

// const arrValue = ( arr, value)=>{
//     for(let i=0; i< arr.length;i++){
//         if(arr[i]== value){
//          return true;
//         }
//     }
//     return false;
// }
//  if(arrValue(arr,65)){
//     document.write("Array includes search value " )
//  }else{
//     document.write("Array does not includes search value " )
    
//  }
// 6. Write a JavaScript Program to Access Elements in an Array.

// const arrElem = (arr)=>{
//     for(let i=0; i<arr.length; i++){
//         document.write(arr[i],"</br>")
//     }

// }
// let arr=["banana","mango",89,69,65]
// arrElem(arr)

// 7. Write a JavaScript Program to Determine the Length of an Array.
// let arr =[4,69,85,78,71,25]
// document.write(arr.length)

// 8. JavaScript Program to Swap First and Last Elements in an Array
// let arr = [4,69,85,78,71,25];
// let lIndex= arr.length-1

// let temp =""
// temp =arr[0]
// arr[0]=arr[arr.length-1]
// arr[arr.length-1]=temp
//  document.write("</br>",arr)


// 9. Declare one array and printed that array in bulleted list.
// let arr = [4,69,85,78,71,25];


// let ul="<ul>"
// for (let i=0; i<arr.length; i++){
//    ul+= "<li>" + arr[i] + "</li>"
// }
// ul += "</ul>"
// document.write(ul)

// 10. Declare one array and printed that array elements in increasing order of their numbers.

// let arr = [4,69,85,78,71,25];
// let temp=arr.sort((a,b)=> a-b)


// for (let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-i-1; j++){

//         if (arr[i] > arr[j+1]) {
//             temp=arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp;
//        }
//     }
// }                  
// document.write(temp)
// second method incomplete



// 11. Accept the element to be searched in array from user . Check weather the element is present and if present at which index present find that index.
// let arr = [4,69,85,78,71,25];
//  const findArr = (arr,elem)=>{
//     if (arr.includes(elem)) {
//        return arr.indexOf(elem)
//     }

//  }
//  document.write(findArr(arr,98))


// 12. Write a JavaScript program to find the maximum number in an array. 

// let arr = [4,69,85,78,71,25];
// const largestNum= (arr) =>{
//     if(arr.length === 0){
//         document.write("Array is empty")
//     }
//     arr.sort((a,b)=> b-a)
//     return arr[0];
// }
// document.write(largestNum(arr))
// JavaScript program to find
// maximum in arr[] of size n

//  second approch from gfg
// function largest(arr) {
//     let i;

//     // Initialize maximum element
//     let max = arr[0];

//     // Traverse array elements
//     // from second and compare
//     // every element with current max
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max)
//             max = arr[i];
//     }

//     return max;
// }

// // Driver code
// let arr = [22, 65, 1, 39];
// console.log("Largest in given array is " + largest(arr));

// 13. Write a JavaScript program to find the minimum number in an array.

// let arr = [4,69,85,78,71,25];
// const largestNum= (arr) =>{
//     if(arr.length === 0){
//         document.write("Array is empty")
//     }
//     arr.sort((a,b)=> a-b)
//     return arr[0];
// }
// document.write(largestNum(arr))



// 14. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 


// let word = "madam"

// const checkPalindromr = (word)=>{
//     let msg = "String is a palindrome"
//     for(let i=0; i<word.length/2; i++){
//         if(word[i] != word[word.length-1-i]){
//           msg = "String is not a palindrome"
//         }
//     }
//     document.write(`${word} ${msg}`)
// }
// checkPalindromr(word)


// 15. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 



// let arr = [4,69,85,78,71,25];
//  let tempArr=[]
//    const arrFun = (arr)=>{
//        for(let i=0; i<arr.length; i++){
//            if(arr[i] % 2 == 0){
//             tempArr.push(arr[i])
//            }
//        }
//        return tempArr;
//    }
//    document.write(arrFun(arr))



// 16. Write a recursive function to calculate the factorial of a given number. 
// let fn=1;
// const fact = (n)=>{
// if  (n ===0 || n===1){
//     return 1;
// }
// fn= n * fact(n-1)
//  return fn;
// }
// document.write(fact(6))

//  17. Implement a function that takes two arrays and merges them into a single array.

// let arr = [4,69,85,78,71,25];
// let arr1 = [8,61,96,87,17,52];
// let newArr=[];
// const arrMerge = (arr,arr1)=>{
//    newArr = arr.concat(arr1)    
//    return newArr;
// }

// document.write(arrMerge(arr,arr1))

// 18. How do you find the duplicate number on a given integer array? and find out the count of their repetations.
// let arr = [12,5,89,5,78,5,36,5]
// let newArr=[]
// const duplicateNum = (arr)=>{
    //  for(let i=0; i<arr.length; i++){
//      for(let j=0; j<arr.length; j++){
    //         if(arr[i] == arr[j]){
//             newArr.push(arr[i]) 
//             count++;
//         }
//      }
//  }
// }
// document.write(duplicateNum(arr))
// document.write(count)    result is not right


// after taking refrence


// const duplicateNum = (arr)=>{
//     for(let i=0; i<arr.length; i++){
//          let count=0;
//          for(let j=i+1; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 count++
//                 if(newArr.includes(arr[i])){
//                     break;
//                 }else{
//                    newArr.push(arr[i])
//                 }
//             }
//          }
//          document.write(count,"</br>")
//      }
//     }
    // document.write(duplicateNum(arr))
    // still not working



    //19 . How do you remove duplicates from an array in place?



    // 20. Given an array of integers sorted in ascending order.


    // let arr = [12,5,89,5,78,5,36,5]
    // const sortAscending = (arr)=>{
    //    return arr.sort((a,b)=> a-b)

    // }

    // document.write(sortAscending(arr))





    
    // 21. Given an array of integers sorted in descending order.
    // let arr = [12,5,89,5,78,5,36,5]
    // const sortAscending = (arr)=>{
    //    return arr.sort((a,b)=> b-a)

    // }

    // document.write(sortAscending(arr))

    // 22. Given an array of integers and find out the average of the array.
// let arr=[15,20,25,30,35]
// let sum=0;
//     const avgfun =(arr)=>{
//      for(let i=0; i<arr.length;i++){
//         sum+=arr[i]
//      }
//      return sum/arr.length;
//     }
//     document.write(avgfun(arr))


// 23. Given an array of integers and find out the total sum of the array.

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let sum=0;
//     const avgfun =(arr)=>{
//      for(let i=0; i<arr.length;i++){
//         sum+=arr[i]
//      }
//      return sum;
//     }
//     document.write(avgfun(arr))


// 24. Given an array of -ve integers and find out the maximum number of the array.
     
// let arr =[-25,-14,-1,-98,-36,-45]

// const funMax = (arr)=>{
//          let max=arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max ){
//                max=arr[i];
//         }
//     } 
//     return max;
// }

// document.write(funMax(arr))



// 25. Given an array of -ve integers and find out the minimum number of the array.
// let arr =[-25,-14,-1,-98,-36,-45]
// const funMin = (arr)=>{
//     let min=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min;
// }
// document.write(funMin(arr))


// 18,19