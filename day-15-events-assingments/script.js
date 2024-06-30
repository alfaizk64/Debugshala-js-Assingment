// let number = document.getElementById("num")
// number.addEventListener("input",()=>{
//     let num = parseInt(number.value)
//     console.log(num);
//     if(num < 0){
//         alert("'Error! Factorial for negative number does not exist.'");
//     }
//     else if(num === 0){
//         alert("Factorial of 0 is 1");
//     }
//     else{
//         let factorial = 1
//         for(let i = 1; i <= num; i++){
//             factorial = factorial * i
//           }
//           alert("Factorial of " + num + " is " + factorial);
//           let result = document.querySelector("#result")
//           result.innerHTML=factorial
//           return factorial
//     }  
// })


// let base = document.getElementById("base")
// let exponent = document.getElementById("expo")
// let result = document.getElementById("result")
// let btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     let resultValue =""
//       let baseValue = parseInt(base.value)
//       let expoValue = parseInt(exponent.value)
//        resultValue = baseValue ** expoValue
//        alert(`${resultValue}`)
//        result.innerHTML = resultValue
//     })

// Accept a number from the user using html form  and check weather a given number is palindrone and display the message accordingly on the web page
// let number = document.getElementById("num")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")

// btn.addEventListener("click",()=>{
//     let num = parseInt(number.value)
//     let reverse = 0
//     let temp = num
//     let data=""
//     while(num > 0){
//         let digit = num % 10
//         reverse = reverse * 10 + digit
//         num = parseInt(num / 10)
//         }
//         if(temp === reverse){
//             alert("The number is palindrome")
//             data="The number is palindrome"
            
//             result.textContent=data
//             }
//             else{
//                 alert("The number is not palindrome")
//                 data="The number is not palindrome"
//                 result.textContent=data
//                 }
//                 })


// accept the number from the user and check weather number is prime and display the message accordingly on the web page . 
// let number = document.getElementById("num")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")
// btn.addEventListener("click",()=>{
//     let num = parseInt(number.value)
//     let flag = 0
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             flag = 1
//             break
//             }
//             }
//             if(flag == 0){
//                 alert("The number is prime")
//                 result.textContent="The number is prime"
//                 }
//                 else{
//                     alert("The number is not prime")
//                     result.textContent="The number is not prime"
//                     }
//                     })



// accept the number from the user and display the sum of digits of a number on the web page 
// let number = document.getElementById("num")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")
// btn.addEventListener("click",()=>{
//     let num = parseInt(number.value)
//     let sum = 0
//     while(num > 0){
//         let temp = num % 10
//         sum = sum + temp
//         num = Math.floor(num / 10)
//         }
//         result.textContent=sum
//         })


// write a program to create an array of integers accepts the number of the array from user using prompt 
// let number = document.getElementById("num")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")
// btn.addEventListener("click",()=>{
//     let num = parseInt(number.value)
//     let arr = new Array(num)
//     for(let i = 0; i < num; i++){
//         arr[i] = parseInt(prompt("Enter the number"))
//         }
//         result.textContent=arr
//         })

        // accept the element to be searched in the array from user check weather the element is present and if present at which index 
        // let number = document.getElementById("num")
        // let btn = document.getElementById("btn")
        // let result = document.getElementById("result")
        // btn.addEventListener("click",()=>{
        //     let num = parseInt(number.value)
        //     let arr = new Array(num)
        //     for(let i = 0; i < num; i++){
        //         arr[i] = parseInt(prompt("Enter the number"))
        //         }
        //         let search = parseInt(prompt("Enter the number to be searched"))
        //         let flag = 0
        //         for(let i = 0; i < num; i++){
        //             if(arr[i] == search){
        //                 flag = 1
        //                 result.textContent = "The element is present at index " + i
        //                 break
        //                 }
        //                 }
        //                 if(flag == 0){
        //                     result.textContent = "The element is not present in the array"
        //                     }
        //                     })

        