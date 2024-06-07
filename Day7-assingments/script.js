// 1.How to replace multiple spaces with single space in JavaScript?

// let str = "    Alfaiz-khan       "
//      str= str.trim()
//      document.write(str)

// 2.How to replace all occurrences of a string in JavaScript?

// let str =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem standard dummy text ever since  Lorem the 1500s, when  Lorem an unknown printer took a galley of  Lorem type and scrambled it to  Lorem make a type specimen book.";
 
//     let str1= str.replaceAll("Lorem","Alfaiz")
//     document.write(str1)


// 3.How are strings stored in JavaScript?
// let str = "Alfaz khan"; string assingment and decleration
//  alfaiz khan is assinged in str variable
// string are storde in js in the form of continues memory allocation as like as array and we can assess string by there index's



// 4.What is the correct way to check for string equality in JavaScript?
//    the correct way to check for the string equality is to use strick-mode equality    (===)
// let str= "Alfaiz khan"
// let str1= "alfaiz khan"
// if (str === str1){
//     document.write(" String are equal")
// }else{
//     document.write("String are Not equal")
// }

// Second way to compare string

// document.write(str.localeCompare(str1))



// 5.How to convert a string into a integer without using parseInt() function in JavaScript?




// 6.How to generate all combinations of a string in JavaScript?

// let possibleCombinations = (str) => {
//     let combinations = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             combinations.push(str.slice(i, j));
//         }
//     }
//     return combinations;
// }
// document.write(possibleCombinations('madam'));


// 7.How to find unique characters of a string in JavaScript?   

// function findUnique(str){
//     let uniqueChar=""
//     for (let i =0; i<str.length; i++){
//         if(uniqueChar.includes(str[i])=== false){
//             uniqueChar+=str[i]
//         }
//     }
//     return uniqueChar
// }
// document.write(findUnique("Alfaiz khan"))


// 8.How to convert an object to string using JavaScript?



// 9.How to get the first three characters of a string using JavaScript?
// let str = "Alfaiz khan"
// let threeChar = str.slice(0,3)
// document.write(threeChar)

// 10.How to check a given string is an anagram of another string in JavaScript?


// 11.How to create half of the string in uppercase and the other half in lowercase?



// 12.How to get a number of vowels in a string in JavaScript?
// vowels = a,e,i,o,u


// let str = "GeeksForGeeks";
// let count=0;
// for(let i=0; i<str.length; i++){
//     if(str[i]== "a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//          count++
//     }
// }
// document.write(count)

// 13.How to add method to String class in JavaScript?



// 14.How to remove text from a string in JavaScript?

// let str="Alfaiz khan"
// let newStr=str.replace("khan","")
// document.write(newStr)


// 15.How to remove all Non-ASCII characters from the string using JavaScript?


// 16.How to insert a string at a specific index in JavaScript?


// 17.How to globally replace a forward slash in a JavaScript string?
// let origString = 'string / with some // slashes /'
// let newStr=origString.replaceAll("/","")
// document.write(newStr)


// 18.How to remove a character from string in JavaScript?

// let str = "alfaiz khan"
//  let newStr= str.replace("a","")
//   document.write(newStr)

// 19.How to convert string to camel case in JavaScript?






// 20.How to convert string into float in JavaScript?
// let str = "alfaiz"
// document.write(typeof str)


// let str1=Number.parseFloat(str)
// document.write(typeof str1)

// 5,8,10,11,13,15,16,19