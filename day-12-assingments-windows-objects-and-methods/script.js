// 1. Create the array of 5 integer values and inside this array display every second to iterate.
// let arr=[15,14,19,20,23]


// 2. Using log() in console define one array and iterate them.
// let arr=[10,20,30,40,50];
// for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }



// 3. check odd and even no between 1 - 10 if no is greater than that throw error msg no is bigger or less than 0.
// let num = 12;
// if(num > 10 || num < 0){
//         console.error("Error: Number is bigger or less than 0");
//     }else{
//             if(num % 2 === 0){
//                     console.log("Number is even");
//                 }else{
//                         console.log("Number is odd");
//                     }
//                 }



// 4. create some object of employee information and display employee data in Console.table().
// let employee = [
//         {id: 1, name: "John", age: 25, salary: 50000},
//         {id: 2, name: "Alice", age: 30, salary: 60000},
//         {id: 3, name: "Bob", age: 28, salary: 70000},
//         {id: 4, name: "Eve", age: 35, salary: 80000},
//         {id: 5, name: "Frank", age: 40, salary: 90000},
//     ];
// console.table(employee)


// 5. create some data and that data use warn() and info() method of Console.
// let data = {
//             name: "John Doe",
//             age: 30,
//             occupation: "Software Engineer",
//             salary: 100000
//         };

//     console.warn(data)
    // console.info(data)

    
// 6. write a js code which display data in year month and day format only.
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();

// console.log(`${year}-${month}-${day}`);
// console.log(date);


// 7. If we want to get specific date , hour and year of current date use getDate() , getHours() , getFullYear().
// let date = new Date();
// let day = date.getDate();
// let hour = date.getHours();
// let year = date.getFullYear();

// console.log(`${day}-${year}-${hour}`);


// 8. If we want to set specific seconds , time , month of particular date use setSeconds(59) , setTime(999) , setMonth(11).
// let date = new Date();
// date.setSeconds(59);
// date.setTime(999);
// date.setMonth(11);
// console.log(date);


// 9. Declare two dates and compare that dates and check if they are equal or not .
// let date1 = new Date("2022-12-25");
// let date2 = new Date("2022-12-25");




// 10. Create one date and display date using toDateString().
// let date = new Date();
// console.log(date.toDateString());