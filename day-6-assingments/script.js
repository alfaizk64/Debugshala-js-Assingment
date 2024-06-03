// 1. Write a JavaScript program to calculate the factorial of a given number.

// let num = Number.parseInt(prompt("Enter your number"))

// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
//     }
//     document.write(factorial);

// 2. Write a JavaScript program to print that pattern.

// 1
// 12
// 123
// 1234
// 12345

// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++)
//         {
//             document.write(j);
//         }
//         document.write("<br>")
//     }
// }
// printPattern(5);

// 3. Write a JavaScript program to print that pattern.

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

//  function printPattern(n){
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=i; j++){
//             document.write(i);
//             }
//             document.write("<br>")
//             }
//  }
//  printPattern(5);

// 4. Write a JavaScript program to print that pattern.

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let count=1;
// function printPattern(n){
//     for(let i=1; i<n; i++){
//         for(let j=1; j<=i; j++){
//               document.write(count);
//               count++;
//             }
//             document.write("<br>")
//             }
// }
// printPattern(5);

// 5. Write a JavaScript program to print that pattern.

// 12345
// 1234
// 123
// 12
// 1
// function printPattern (n){
//     for(let i=5; i>=1; i--){
//         for(let j=1; j<=i; j++){
//             document.write(j);
//             }
//             document.write("<br>")
//     }
// }
// printPattern(5)

// 6. Write a JavaScript program to print that pattern.

//     1
//    123
//   12345
//  1234567
// 123456789

// function printPattern(n){
//         for(let i=1; i<=n; i++){

//                 for(let j=1; j<=n-i;j++){
//                     document.write("&nbsp&nbsp")
//                 }
//                 for(let k=1; k<=i;k++){
//                  document.write(k)
//                 }
//                 for(let l =1; l<=i-1; l++){
//                     document.write(l)
//                 }
//                     document.write("<br>")
//                 }
//             }
//             printPattern(5)

// 7. Write a JavaScript program to print that pattern.

//   1
//  234
// 56789
// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=n-i; j++){
//             document.write("&nbsp")
//             }
//             for(let k=1; k<=i;k++){
//              document.write(k)
//             }
//             document.write("<br>")
//             }
//             }
//             printPattern(9)

// 8. Write a JavaScript program to print that pattern.

// *****
// *****
// *****
// *****
// *****

// function printPattern(){
//     for(let i=1; i<=5; i++){
//         for(let j=1; j<=5; j++){
//             document.write("*")
//             }
//             document.write("<br>")
//             }

// }
// printPattern()

// 9. Write a JavaScript program to print that pattern.

// *****
// *   *
// *   *
// *   *
// *****
// function printPattern(){
//         for(let i=1; i<=5; i++){
//                 for(let j=1; j<=5; j++){
//                         if(i==1 || i==5 || j==1 || j==5){
//                                 document.write("*")
//                             }
//                             else{
//                                     document.write("&nbsp&nbsp")
//                                 }
//                             }
//                             document.write("<br>")
//                         }
//                     }
//                     printPattern()

// 10. Write a JavaScript program to print that pattern.

//     *
//    **
//   ***
//  ****
// *****

// function printPattern(){
//     for(let i=1; i<=5; i++){
//         for(let j=1; j<=5-i; j++){
//             document.write("&nbsp&nbsp")
//         }
//         for(let k=1; k<=i; k++){
//             document.write("*")
//         }
//         document.write("</br>")
//     }
// }
// printPattern()

// 11. Write a JavaScript program to print that pattern.

//     *
//    ***
//   *****
//  *******
// *********
// function printPattern(){
//         for(let i=1; i<=5; i++){
//             for(let j=1; j<=5-i; j++){
//                 document.write("&nbsp&nbsp")
//             }
//             for(let k=1; k<=i; k++){
//                 document.write("*")
//             }
//             for(let l=1; l<=i-1; l++){
//                 document.write("*")
//             }
//             document.write("</br>")
//         }
//     }
//     printPattern()

// 12. Write a JavaScript program to print that pattern.

// 54321
// 5432
// 543
// 54
// 5

//   function printPattern() {
//      for(let i=1; i<=5;i++){
//         for(let j=5; j>=i; j--){
//             document.write(j)
//         }
//         document.write("</br>")
//      }
//   }
//   printPattern()

// 13. Write a JavaScript program to print that pattern.

// *
// **
// * *
// *  *
// *   *
// ******

// function printPattern() {
//     for(let i=1; i<=5; i++){
//         for(let j=1; j<=i; j++){
//    incomplete
//         }
//  document.write("</br>")
//     }

// }
// printPattern()

// 14. Write a JavaScript program to print that pattern.

// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

// function printPattern() {
//         for(let i=1; i<=5; i++){
//                 for(let j=1; j<=i; j++){
//                         document.write("$")
//                     }
//                     document.write("</br>")
//                 }
//                 for(let i=1; i<=5; i++){
//                         for(let j=5; j>=i; j--){
//                                 document.write("%")
//                             }
//                             document.write("</br>")
//                         }
//                     }
//                     printPattern()

// 15. Write a JavaScript program to print that pattern.

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// function printPattern(){
//             for(let i=1; i<=5; i++){
//                 for(let j=1; j<=5-i; j++){
//                     document.write("&nbsp&nbsp")
//                 }
//                 for(let k=1; k<=i; k++){
//                     document.write("*")
//                 }
//                 for(let l=1; l<=i-1; l++){
//                     document.write("*")
//                 }
//                 document.write("</br>")
//             }
//         }
//         printPattern()
// imcomplete

// 16. Create 4 functions for each operation i.e. ‘+’, ‘-‘, ‘*’, ‘/’.Take the operation, both numbers num1 & num2  or operand(+,*,-,/) as well from input from user using prompt and display the result .
// Hint A_04_Fun.html in day 6
// function add(a,b){
//     return a+b
//     }
//     function sub(a,b){
//         return a-b
//         }
//         function mul(a,b){
//             return a*b
//             }
//             function div(a,b){
//                 return a/b

//                 }
//                 let a=parseInt(prompt("Enter first number"))
//                 let b=parseInt(prompt("Enter second number"))
//                 let op=prompt("Enter operator")
//                 if(op=="+"){
//                     document.write(add(a,b))
//                     }

//                     else if(op=="-"){
//                         document.write(sub(a,b))
//                         }
//                         else if(op=="*"){
//                             document.write(mul(a,b))
//                             }
//                             else if(op=="/"){
//                                 document.write(div(a,b))
//                                 }
//                                 else{
//                                     document.write("Invalid")
//                                     }

// 17. same as ques no 16 but implement switch case .
// function add(a,b){
//     return a+b
//     }
//     function sub(a,b){
//         return a-b
//         }
//         function mul(a,b){
//             return a*b
//             }
//             function div(a,b){
//                 return a/b
//                 }
//                 let a=parseInt(prompt("Enter first number"))
//                 let b=parseInt(prompt("Enter second number"))
//                 let op=prompt("Enter operator")
//                 switch(op){
//                     case "+":
//                         document.write(add(a,b))
//                         break;
//                     case "-":
//                         document.write(sub(a,b))
//                         break;
//                     case "*":
//                         document.write(mul(a,b))
//                         break;
//                     case "/":
//                         document.write(div(a,b))
//                         break;
//                     default:
//                         document.write("Invalid")
//                         break;
//                 }

                // // 18. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion
                // function gcd(a,b){
                //     if(b==0){
                //         return a
                //         }
                //         else{
                //             return gcd(b,a%b)
                //             }
                //             }
                            
                
// 19.  Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]


// 20. Write a JavaScript program to compute the exponent of a number.  
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.



// 21. Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.


// let a=0;
// let b=1;
// function fibonacci(n){
//     document.write(a + ",")
//     document.write(b + ",")
//     for(let i=0;i<=n;i++){
//             let temp =a+b;     
//             document.write(temp)
//             a=b;
//             b=temp;
//             document.write(",")
            
//     }
// }
// fibonacci(10)

// 22. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// function reverseNumber(x){

//     if(x>=0 && x<=9){
//         return document.write(x)
//     }
//         let reverse = 0;
//         while(x!=0){
//                 let lastDigit = x%10;
//                 reverse = reverse*10 + lastDigit;
//                  x= Math.floor(x/10)
//              }
//              document.write(reverse)
//             }

//     reverseNumber(5482)

// 23. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


// let str=prompt("Please enter a string")
// let strlen=str.length;
// // console.log(str[strlen-1-1]);
//    function isPalindrome(str){
//      for (let i=0; i>=strlen/2; i++){
        
//             if(str[i] != str[strlen - 1 - i]){
//                    document.write("Not a palindomer")
//             }else{
//                 document.write("its a palindrome")
//             }
//      }

//    }
//    isPalindrome(str)

// not working


// 24. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// 25. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// 26. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// 27.Write a JavaScript function that checks whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


// 28. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.


// 29. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  





// 30. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
// let a = Number.parseInt(prompt("Enter the First Number"))
// let b = Number.parseInt(prompt("Enter the Second Number"))
// let action = prompt("enter what to do * or /")

// function calc(x,y){
//     if (action == "*"){
//         document.write(x*y);
//     }
//     else{
//         document.write(x/y);
//     }
// }
// calc(a,b)