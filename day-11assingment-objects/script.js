// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
//  };

//  for (const key in student) {
//   document.write(key+"</br>")
//  }

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


//     var student = {
//         name : "David Rayy",
//         sclass : "VI",
//         rollno : 12 

//     };
//     for (const key in student) {
//     document.write(key+":"+ student[key]  +"</br>")
//     }
//     document.write("</br>")

//     document.write("after Deleting rollNo" + "</br>")
//     document.write("</br>")
//   delete student.rollno;
//   for (const key in student) {
//     document.write(key+":"+ student[key]  +"</br>")
//     }


// 3. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

//  class cylindeVolume{
//     constructor(height,radius){
//         this.radius=radius;
//         this.height=height;
//     }
//     getVolume(){
//       const pi=Math.PI;
//        const radiusSquare=this.radius*this.radius;
//         return(pi * radiusSquare * this.height).toFixed(4)
//     }

//  }
//  let volume1 = new cylindeVolume(10,5)
//  document.write(volume1.getVolume())

// 4. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
// person has fname and lname and their age define as date month and year and display that all objects.
// let person={

// }

// 5. Create Object Using an Object Literal and siplay their data and functions.
// let person ={
//     fname:"Alfaiz",
//     lname:"Khan",
//     getDetails:function(){
//         return `First name is ${this.fname} and last name is ${this.lname}`
//     }
// }

// document.write(person.fname + "</br>")
// document.write(person.lname + "</br>")
// document.write(person.getDetails())


// 6. Create Object Using an Object Constructor and siplay their data and functions.

//  class person{
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//     }
//     getDetails(){
//         return `First name is ${this.fname} and last name is ${this.lname}`
//     }
//  }

//  let person1 = new person("alfaiz","khan")
//  document.write(person1.fname + "</br>")
//  document.write(person1.lname + "</br>")
//  document.write(person1.getDetails() + "</br>")



// function Person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
//    this.getDetails = ()=>{
//         return `First name is ${this.fname} and last name is ${this.lname} using function method`
//    }
// }
// let person1 = new Person("khan","alfaiz")
//  document.write(person1.fname + "</br>")
//  document.write(person1.lname + "</br>")
//  document.write(person1.getDetails() + "</br>")




// 7. Create Object Using The JavaScript Object.create() Method creates a new object.
// let Person = {
//     fName:"alfaiz",
//     lName:"khan",
//     getDetails:function(){
//         return `First name is ${this.fName} and last name is ${this.lName}`
//     }

// }
// let person1 = Object.create(Person)

// person1.fName="debug"
// person1.lName="shala"
// document.write(person1.getDetails())


// 8. Create Object Using the ES6 classes and create object using new Keyword.(hint :- class are defined)

// class Person {
//     constructor(name, age) { // Constructor for initialization
//         this.name = name;
//         this.age = age;
//     }

//     greet() { // Method to define behavior
//         document.write("Hello, my name is " + this.name + ".");
//     }
// }

// let person1 = new Person("bunny",25)
// person1.greet()


// 9. Create Object Using Traditional Way of defining an Object and create object using new keyword.(hint :- functions are defined)

// const person = {
//     name: "person",
//     age: 30,
//     greet() {
//      document.write("Hello, my name is ", this.name);
//     }
//   };
  
//   person.greet();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
  
//     this.greet = function() {
//    document.write("Hello, my name is ", this.name);
//     };
//   }
  
//   const person1 = new Person("vikas", 25);
//   person1.greet(); 
  


// 10. Create Date class and in constructor pass date , month , year and in class define method showDate() which actually show the date.


// class date{
//     constructor(date,month,year){
//         this.month=month;
//         this.date=date;
//         this.year=year;
//     }
//     showDate=()=>{
//         return`${this.date}`
//     }

// }
// let alfaiz =new date(1,6,1999)

// document.write(alfaiz.showDate())