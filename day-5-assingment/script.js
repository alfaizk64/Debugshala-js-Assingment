// Day 5 Assingments

// 1. Write a js code which accept input through prompt and print table of that number.

// let num = prompt("Please Enter the num you want table of")
// num = Number.parseInt(num)
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} * ${i} = ${num * i}`)
//     document.write("</br>")
//     }

// 2. Write a js code which accept input through prompt and find the Sum of Even/Odd Numbers between (1 to 100):
// let choice = prompt("Enter your choice even or odd")

// let sum=0

// if (choice === "even") {
//      for (let i = 2; i <=100; i+=2) {
//             sum+=i;
//      }
//      alert("Sum of even number between 1 and 100 is  " + sum)
// } else if (choice === "odd") {
//     for (let i = 1; i <=100; i+=2) {
//         sum+=i;
//  }
//  alert("Sum of odd number between 1 and 100 is  " + sum)
// } else{
//     alert("Please enter valid choice")
// }

// 3. Write a js code which accept input through prompt and find the Factorial of a Number.

// let num = prompt("Please Enter the num you want table of")
// num = Number.parseInt(num);
// let fact = 1;

// for (let i = 1; i <= num; i++) {
// fact*=i
// }
// alert("Factorial of " + num + " is " + fact)

// 4. Guessing Game with Number of Attempts:
// This code creates a guessing game where the user has a limited number of attempts (5 in this example) to guess a randomly generated number between 1 and 100. It uses for and if statements to track attempts and provide feedback to the user.

// let num = 5;
// let guess;

// for (let i=1; i<=5; i++){
//    guess=prompt("guess the number You have only 5 chance")
//     if (num == guess){
//         document.write("You guess the correct number")
//         break;
//     }
// }

// 5. Write a js code which accept input through prompt and check num Even or Odd Number Check and print result recordingly.

// let num = prompt("Please Enter the num ....!")
// num = Number.parseInt(num);

// if (num % 2 == 0) {
//     alert("the number is even number " + num)
// }else {
//     alert("the number is odd number " + num)

// }

// 6. Write a js code which accept input through prompt and check Positivity of a number.

// let num = prompt("Please Enter the num ....!")
// num = Number.parseInt(num);
//  if (num<0) {
//      alert("the number is negative number " + num)
//  }else if(num >0) {
//     alert("the number is positive number " + num)
//  }else{
//     alert("the number is zero " + num)
//  }

// 7. Write a js code which accept input through prompt and  print table of that number.
// repeated Question

// 8. Write a js code which aceept num from user and find is this num is bigger from 100 or smallest of 100.

// let num = prompt("Please Enter the num ....!")
// num = Number.parseInt(num);
// if (num > 100) {
//     alert("Number is greater than 100")
// }else if (num == 100){
//     alert("Number is equal to 100")
// }
// else{
//     alert("Number is smaller than 100")
// }

// 9. Write a js code which aceept year from user and find is this Leap Year Check if yes print leap year if not print not leap year:

// let year = prompt("Please Enter the year ....!")
// year = Number.parseInt(year);

// if ((year % 4 == 0 && year % 100 !== 0 ) || (year % 400 == 0)) {
//     alert("year is a leap year")
// }else{
//     alert("year is not a leap year")
// }

// 10. Write a js code which aceept num from user and find the sum till that no.

// let num = prompt("Please Enter the num ....!")
// num = Number.parseInt(num);

// let sum=0;
// for(let i=1; i<=num; i++){
//    sum+=i
// }
// alert("Sum of the number is " + sum)

// 11.  Write a JavaScript program that displays the largest integer among two integers.

// let num1 = prompt("Please Enter the num1 ....!")
// num1 = Number.parseInt(num1);

// let num2 = prompt("Please Enter the num2 ....!")
// num2 = Number.parseInt(num2);

// if (num1 > num2) {
//     alert("Num1 is larger than num2 " + num1)
// }else{
//     alert("Num2 is larger than num1 " + num2)
// }

// 12. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i =0; i<=15; i++){
//     if(i%2==0){
//         document.write(i + " is even")
//         document.write("</br>")
//         }else{
//             document.write(i + " is odd")
//         document.write("</br>")

//             }
// }

// 13. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

// for(let i=1; i<=100; i++){
//     if(i%3==0 && i%5==0){
//         document.write("FizzBuzz")
//         document.write("</br>")
//         }else if(i%3==0){
//             document.write("Fizz")
//             document.write("</br>")
//             }else if(i%5==0){
//                 document.write("Buzz")
//                 document.write("</br>")
//                 }else{
//                     document.write(i)
//                     document.write("</br>")
//                     }

// }
// // 14. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

// let num1 = prompt("Enter num1")
// num1=Number.parseInt(num1)
// let num2 = prompt("Enter num2")
// num2=Number.parseInt(num2)

// 15. Write a JavaScript program to sum 3 and 5 multiples under 1000.

// let sum=0;
// for(let i=1; i<=1000; i++){
//     if(i%3==0 && i%5==0){
//        sum+=i
//     }
// }
// document.write(sum)

// 16. Print the ODD numbers from 7 to 31.
// for(let i=7; i<=31; i++){
//         if(i%2==1){
//                 document.write(i)
//                 document.write("</br>")
//             }
//         }

// 17. Print the EVEN numbers from 10 to -20

// for(let i=10; i<=20; i++){
//     if(i%2==0){
//         document.write(i)
//         document.write("</br>")
//         }
// }

// 18. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// let age = prompt("Enter your age");
// age = Number.parseInt(age);
// if (age < 12) {
//   document.write("Ticket price is 5");
// } else if (age < 18) {
//   document.write("Ticket price is 10");
// } else if (age < 60) {
//   document.write("Ticket price is 20");
// } else if (age >= 60) {
//   document.write("Ticket price is 15");
// } else {
//   document.write("Invalid age");
// }
// document.write("</br>");
// document.write("</br>");

// 19. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0.
// let price = prompt("Enter the price of the product");
// price = Number.parseInt(price);
// if (price >= 100) {
//   document.write("Discount is 20%");
// } else if (price >= 50) {
//   document.write("Discount is 10%");
// } else {
//   document.write("Discount is 0%");
// }
// document.write("</br>");
// document.write("</br>");

// 20. Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
// let time = prompt("Enter the time");
// time = Number.parseInt(time);
// if (time >= 0 && time < 12) {
//   document.write("Good morning");
// } else if (time >= 12 && time < 18) {
//   document.write("Good afternoon");
// } else if (time >= 18 && time < 24) {
//   document.write("Good evening");
// } else {
//   document.write("Invalid time");
// }


// 21. Write a program which tells the number of days in a month.
// 22. Check if a day is weekend day or a working day. Your script will take day as an input.
//  REPEATED