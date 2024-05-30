// 1
// let age=prompt("Please enter your Age to verify.....!")
// age =Number.parseInt(age);

// if (age >=18) {
//     alert("You are old enough to drive")
// }else{
//     alert(`You are left with ${18-age} years to drive`)
// }

// 2
// let age1 = prompt("Please enter your age a")
// age1 = Number.parseInt(age1)

// let age2 = prompt("Please enter your age b")
// age2 = Number.parseInt(age2)

// if (age1 > age2) {
//     document.write(`a ${age1} is greater than b ${age2} `)
// } else {
//     document.write(`b ${age2} is greater than a ${age1}`)
// }

// age1>age2 ?(document.write(`a ${age1} is greater than b ${age2} `)):(document.write(`b ${age2} is greater than a ${age1}`))

// 3
// let a=4;
// let b=3;
// if(a>b){
//     // console.log("a is greater than b")
//     alert(`${a} is greater than ${b}`)
// }

// a>b&&( alert(`${a} is greater than ${b}`))

// 4
// let num = prompt("Enter a number to check its even or not")
// num = Number.parseInt(num)

// if (num % 2 == 0) {
//     alert(`${num} is even number`)
// } else {
//     alert(`${num} is an odd number`)
// }

/* 555555555555555555555*/
// let score = prompt("Enter Your score to know your grade");
// score = Number.parseInt(score);

// if (score >= 80) {
//      alert("Your grade is A")
// } else if(score >= 70 && score <= 89) {
//     alert("Your grade is b")

// }else if( score >=60 && score<=69){
//      alert("Your grade is c")

// }else if(score>= 50 && score<=59 ){
//      alert("Your grade is d")

// }else{
//     alert("Your grade is F")

// }

// switch (true) {
//   case (score >= 80):
//      alert("Your grade is A");
//     break;
//   case (score >= 70 && score <= 89):
//     alert("Your grade is b");
//     break;
//   case (score >= 60 && score <= 69):
//     alert("Your grade is c");
//     break;
//   case (score >= 50 && score <= 59):
//     alert("Your grade is d");
//     break;
//   default:
//     alert("Your grade is F");
// }

// 66666666666666666666666666
// let month = prompt("Enter the month");
// switch (month) {
//   case "january":
//     alert("the season is Winter");
//     break;
//   case "february":
//     alert("the season is Winter");
//     break;
//   case "march":
//     alert("the season is Spring");
//     break;
//   case "april":
//     alert("the season is Spring");
//     break;
//   case "may":
//     alert("the season is Spring");
//     break;
//   case "june":
//     alert("the season is Summer");
//     break;
//   case "july":
//     alert("the season is Summer");
//     break;
//   case "august":
//     alert("the season is Summer");
//     break;
//   case "september":
//     alert("the season is Autumn");
//     break;
//   case "october":
//     alert("the season is Autumn");
//     break;
//   case "november":
//     alert("the season is Autumn");
//     break;
//   case "december":
//     alert("the season is Winter");
//     break;
//   default:
//     alert("invalid month");
// }

// 777777777777777777777
// let day = prompt("What is the day today");

// switch (day) {
//   case "monday":
//     alert("Today is Monday and its a working day");
//     break;
//   case "tuesday":
//     alert("Today is Tuesday and its a working day");
//     break;
//   case "wednesday":
//     alert("Today is Wednesday and its a working day");
//     break;
//   case "thursday":
//     alert("Today is Thursday and its a working day");
//     break;
//   case "friday":
//     alert("Today is Friday and its a working day");
//     break;
//   case "saturday":
//     alert("Today is Saturday and its a weekend day");
//     break;
//   case "sunday":
//     alert("Today is Sunday and its a weekend day");
//     break;
//   default:
//     alert("invalid day");
//     break;
// }

/* 8888888888888888*/

// let month = prompt("Enter the month");
// switch (month) {
//   case "january":
//     alert("31 days");
//     break;
//   case "february":
//     alert("28 days");
//     break;
//   case "march":
//     alert("31 days");
//     break;
//   case "april":
//     alert("30 days");
//     break;
//   case "may":
//     alert("31 days");
//     break;
//   case "june":
//     alert("30 days");
//     break;
//   case "july":
//     alert("31 days");
//     break;
//   case "august":
//     alert("31 days");
//     break;
//   case "september":
//     alert("30 days");
//     break;
//   case "october":
//     alert("31 days");
//     break;
//   case "november":
//     alert("30 days");
//     break;
//   case "december":
//     alert("31 days");
//     break;
//   default:
//     alert("invalid month");
// }

// 10.take two input from prompt and find area of rectangle and result shown in page.

// let length = prompt("Enter Length");
// length=Number.parseInt(length);
// let width = prompt("Enter width")
// width=Number.parseInt(width);

// alert(`${length} is this and width is ${width} is this and area of rectangle is ${length * width}`)

// 11. Write a JavaScript program that take two number from prompt and find largest integer among two integers and print them

// let num1 = prompt("enter first Number");
//  num1=Number.parseInt(num1);
//  let num2 = prompt("enter second Number");
//  num2=Number.parseInt(num2);

//  if (num1 > num2) {
//      alert(`Num1 is greater than num2 that is ${num1}`)
//  } else {
//      alert(`num2 is greater than num1 that is ${num2}`)
//  }

// 12.Write a JavaScript program that take input marks using prompt then find the corresponding grade.
// like :- user typed |
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
// let marks= prompt("Enter your marks")
// marks=Number.parseInt(marks)

// if (marks<60) {
//     alert("Your Grade is F")
// } else if(marks<=70){
//     alert("Your Grade is D")
// } else if(marks<=80){
//     alert("Your Grade is C")
// }else if(marks<=90){
//     alert("Your Grade is B")
// }else if (marks<=100){
//     alert("Your Grade is A")
// }else{
//     alert("Invalid Marks")
// }

// 13.Write a Code to find a branch name Based on the student’s marks, this switch statement assigns a specific engineering branch to the variable Branch. The output displays the student’s branch name,
// 90 > above  CS Branch
// 80 > above Mechanical Branch
// 70 > above Chemical enginnerring
// 50 > Civil Engineering
// default Bio technology

// let marks = prompt("enter your marks")
// marks = Number.parseInt(marks)

// switch (true) {
//     case (marks>90):
//         alert("Your Branch  is CS Branch")
//         break;
//     case (marks>80):
//         alert("Your Branch  is Mechanical Branch")
//         break;
//     case (marks>70):
//         alert("Your Branch  is Chemical enginnerring")
//         break;
//         case (marks>50):
//             alert("Your Branch  is Civil Engineering")
//             break;
//     default:
//         alert("Your Branch  is Bio technology")
//         break;
// }

// 14.Write a code the outer if statement checks the weather variable. If it’s “sunny,” it further checks the temperature variable to determine the type of day it is (hot, warm, or cool). Depending on the values of weather and temperature, different messages will be logged to the html page .

// let weather = prompt("Enter the weather");
// let temperature = prompt("Enter the temperature");
// temperature = Number.parseInt(temperature);
// if (weather == "sunny") {
//   if (temperature > 30) {
//     document.write("It's a hot day");
//   } else if (temperature > 20) {
//     document.write("It's a warm day");
//   } else {
//     document.write("It's a cool day");
//   }
// } else {
//   document.write("It's not a sunny day");
// }



// 15.Check your bdate and take input from user as birthdate and print the exact age of user .
















