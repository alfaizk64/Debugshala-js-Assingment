// 1. Write a js code convert this data to number and print in browser.
// ex :- test cases :- 
// "10023" , "true" , "34 56 78", "L7H8G9F5",NAN , 3506.435.

// output should be :-
// console.log( Number.parseInt("10023"));
// console.log( Number.parseInt("true"));
// console.log( Number.parseInt("34 56 78"));
// console.log( Number.parseInt("L7H8G9F5"));
// console.log( Number.parseInt("NAN"));
// console.log( Number.parseInt("3506.435"));


// 2. Write a js code convert this data to float value and print in browser.
// ex :- test cases :- 
// "134.57" , "false" , "56.43 65.12 71.13", "L7H8G9F5", Undefined , Ram 2394.0987

// console.log( Number.parseFloat("134.57"));
// console.log( Number.parseFloat("false"));
// console.log( Number.parseFloat("56.43 65.12 71.13"));
// console.log( Number.parseFloat("L7H8G9F5"));
// console.log( Number.parseFloat("Undefined"));
// console.log( Number.parseFloat("Ram 2394.0987"));

// 3. Write a js code convert this data to String value and print in browser.
// ex :- test cases :- 
// print only current day using date instance, "false" , "0", false, true , Ram 2394.0987
// let date = new Date()
// date.getDate()
// console.log(date);


// console.log( String("false"));
// console.log( String(0));
// console.log( String(false));
// console.log( String(true));
// console.log( String("Ram 2394.0987"));



// 4. Write a js code convert this data to number value and print in browser.
// ex :- test cases :- 
// extract month from current date, "true" , "100", false, true , 236.98 Ram.
// let date = new Date()    
// date.getMonth()
// console.log(date.getMonth());

// console.log( Number("true"));
// console.log( Number("100"));
// console.log( Number(false));
// console.log( Number(true));
// console.log( Number("236.98 Ram"));

// 5. Write a js code convert this URL to decoded value and print in browser.
// ex :- test cases :-

// let url ="https://www.google.com/search?q=javascript+question+on+Strings&rlz=1C1ONGR_enIN1060IN1060&oq=java&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIUCAAQRRg5GEMYgwEYsQMYgAQYigUyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDsyBggDEEUYOzIGCAQQIxgnMgwIBRAAGEMYgAQYigUyDAgGEAAYQxiABBiKBTIMCAcQABhDGIAEGIoFMgwICBAAGEMYgAQYigUyDAgJEAAYQxiABBiKBdIBCTQ1NDRqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8."
// let encoded = encodeURI(url)
// document.write(encoded);



// document.write(decodeURI(encoded))


// 7. Create one function which execute after some 1 min and printing "hello from all".


// function great (){
//    document.write("hello from all");
// }
// setTimeout(great, 60000); // 60000ms = 1min



// 8. Create one js function which accept input from user as min and call greeting fn which print the current date.
// let min = prompt("Please Enter the time in miliSeconds")
// function great(){
//     let date = new Date()
//     document.write(date);
//     }
//     setTimeout(great, min); // 60000ms = 1min

// 9. Create one stop watch which exactly working as stop watch.

// let start = 0;
// let end = 0;
// let running = false;
// let time = 0;
// let intervalId = 0;
// function startWatch(){
    //     if(!running){
        //         running = true;
        //         start = new Date().getTime();
        //         intervalId = setInterval(updateTime, 10);
        //     }
        // }


        // 10. create one timer date watch which shows actual current time. 
        // function showTime(){
        //         let date = new Date();
        //         let h = date.getHours();
        //         let m = date.getMinutes();
        //         let s = date.getSeconds();
        //         document.write(h + ":" + m + ":" + s + "<br>");
        //     }
        //     setInterval(showTime, 1000); // 1000ms = 1s
