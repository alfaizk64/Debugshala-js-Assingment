
// Explain Synchronous Programming:
// Synchronous programming is a programming paradigm in which the execution of a program is sequential and the program 
// waits for the completion of each statement before moving on to the next one. This means that the 
// program will execute one statement at a time, in the order in which they are written, and
// will not move on to the next statement until the current one has finished executing. This can lead
// to a slower execution time and can make it difficult to write complex programs that require multiple
// threads or processes to run simultaneously. Synchronous programming is often used in languages like C, C
// , and Java, where the program is executed in a single thread and all statements are executed in
// sequence. However, it is not the only programming paradigm and there are other paradigms that
// can be used to write more efficient and scalable programs. One such paradigm is asynchronous programming,
// which allows the program to execute multiple statements in parallel and to handle the results of
// these statements in a non-blocking manner.



// 1.What is synchronous programming?
// How does the flow of execution work in synchronous programming?


// Synchronous programming is a style of coding where instructions are executed one after the other, in the order they appear in the code. Think of it like a single waiter in a restaurant taking orders and delivering food one table at a time.

// Here's how the flow of execution works:

// Start at the beginning: The program starts at the first line of code.
// Execute one line at a time: Each line of code is processed and executed in order.
// Wait for completion: If a line involves an operation that takes time (like fetching data from a database), the program waits for that operation to finish before moving on.
// Move to the next line: Once the current line is complete, the program moves on to the next line in the code.
// This creates a clear, step-by-step flow that's easy to understand and debug. It's like following a recipe – each step must be completed before moving on to the next

// 2. What will be the output of the above code and why?
// console.log("Start");
// console.log("Middle");
// console.log("End");

// start 
// middle
// end
// because above code is writen in synchronous programming paradigm


// 3.Identify the Sequence:

// Write a function that logs numbers from 1 to 5 synchronously. Explain how the sequence of execution is maintained.
// Real-World Example:
// Imagine you're a waiter in a restaurant. You take orders from customers, prepare their food,
// and deliver it to them. You can only take one order at a time, and you have
// to wait for each order to be completed before you can move on to the next one. This
// is similar to how synchronous programming works – you can only execute one line of code at a time
// , and you have to wait for each line to finish before you can move on to the next
// function sequence() {
    //     console.log(1);
    //     console.log(2);
    //     console.log(3);
    //     console.log(4);
    //     console.log(5);
    //     }
    //     sequence();
        // output: 1, 2, 3, 4, 5
        // explanation: the function sequence() is called, and the console.log() statements are
        // executed one after the other in the order they appear in the code. This creates
        // a clear, step-by-step flow that's easy to understand and debug. It
        // s like following a recipe – each step must be completed before moving on to the
        // next.
        // In this case, the sequence of execution is maintained by the fact that the
        // function is called and the console.log() statements are executed one after the other in
        // the order they appear in the code. This creates a clear, step-by-step
        // flow that's easy to understand and debug. It's like following a recipe –
        // each step must be completed before moving on to the next.
    
        // 4.Give an example of a real-world scenario where synchronous programming is preferable.
        // Real-World Example:
        // Guaranteed Order:  
            //  You need to enter your PIN before you can perform any actions like checking your balance or withdrawing cash.
            //  Synchronous programming ensures these steps happen sequentially.
        //   If the ATM checked your balance before verifying your PIN, it could be a security risk.

        
// 5.What is asynchronous programming?
// Asynchronous programming is a way of writing code that allows multiple tasks to be executed concurrently. This
// is in contrast to synchronous programming, where tasks are executed one after the other in a linear fashion
// . Asynchronous programming is often used in web development to improve the user experience by allowing
// multiple requests to be made at the same time, rather than waiting for each request to finish before
// making the next one. This can lead to faster page loads and more responsive interfaces.
// Real-World Example:
// Imagine you're a waiter in a restaurant. You take orders from customers, prepare their food,
// and deliver it to them. You can only take one order at a time, and you have
// to wait for each order to be completed before you can move on to the next one. This
// is similar to how synchronous programming works – you can only execute one line of code at a time    
// , and you have to wait for each line to finish before you can move on to the next
// In contrast, asynchronous programming allows you to take multiple orders at the same time, and
// you can start preparing the food for each order while you're waiting for the previous one to be
// completed. This can lead to faster service and a more efficient use of your time.


// 6.How does it differ from synchronous programming?
// Predict the Output with setTimeout:
// function sequence() {
    //     console.log(1);
    //     console.log(2);
    //     console.log(3);
    //     console.log(4);
    //     console.log(5);
    //     setTimeout(function() {
        //         console.log(6);
        //     }, 1000);
        //     console.log(7);
        //     }
        //     sequence();
        //     // Output: 1, 2, 3, 4, 5
        //     //         7, 6
     
    
        // The output of the above code is not what we expect. The console.log() statements
        // are executed one after the other in the order they appear in the code. However, the
        // setTimeout() function is asynchronous, which means it doesn't block the execution of the
        // rest of the code. As a result, the console.log() statement that's inside the 
        // setTimeout() function is executed after the rest of the code has finished running.
        // This can lead to unexpected results and make it difficult to reason about the behavior of
        // your code. To avoid this, you can use the async/await syntax to make your
        // code more readable and easier to reason about.


//         console.log("A");
// setTimeout(function() {
//   console.log("B");
// }, 2000);
// console.log("C");
// What will be the output of the above code and why?
// A, C, B
// The output of the above code is "A", "C", "B". This is because
// the setTimeout() function is asynchronous, which means it doesn't block the execution of the rest of
// the code. As a result, the console.log() statement that's inside the setTimeout() function
// is executed after the rest of the code has finished running. This can lead to unexpected results and
// make it difficult to reason about the behavior of your code. 


// What is callback hell? Give an example of code that can lead to callback hell.
// Callback hell is a term used to describe a situation where a function calls another function, which
// calls another function, and so on, creating a long chain of nested callbacks. This can make  
// the code difficult to read and understand, and it can be difficult to reason about the behavior of
// the code. Here's an example of code that can lead to callback hell:
// function sequence() {
    //   console.log(1);
    //   console.log(2);
    //   console.log(3);
    //   console.log(4);
    //   console.log(5);
    //   setTimeout(function() {
        //       console.log(6);
        //   }, 1000);
        //   console.log(7);
        //   }
        //   sequence();
        //   // Output: 1, 2, 3, 4, 5
        //   //         7, 6
        // The output of the above code is not what we expect. The console.log() statements
        // are executed one after the other in the order they appear in the code. However, the
        // setTimeout() function is asynchronous, which means it doesn't block the execution of the
        // rest of the code. As a result, the console.log() statement that's inside the

        // setTimeout() function is executed after the rest of the code has finished running.


        // How can callback hell be avoided?
        // Callback hell can be avoided by using the async/await syntax to make your code more readable
        // and easier to reason about. Here's an example of how the above code can be rewritten
        // using async/await:
        // async function sequence() {
            //   console.log(1);
            //   console.log(2);
            //   console.log(3);
            //   console.log(4);
            //   console.log(5);
            //   await new Promise(resolve => setTimeout(resolve, 1000));
            //   console.log(6);
            //   console.log(7);
            // }
            // sequence();
       
            
            // // Output: 1, 2, 3, 4, 5,
            // //         6 ,7
            // In this example, we use the await keyword to wait for the setTimeout() function to   
            // finish executing before moving on to the next line of code. This makes the code more
            // readable and easier to reason about.

        


            // What is a callback function in JavaScript?
            // A callback function is a function that is passed as an argument to another function and  
            // is executed after the other function has finished executing. In JavaScript, callbacks
            // are often used to handle asynchronous operations, such as making an HTTP request or
            // reading from a file. Here's an example of a callback function:
            // function callbackFunction() {
                //   console.log("Callback function executed.");
                // }
                // function anotherFunction(callback) {
                    //   console.log("Another function executed.");
                    //   callback();
                    // }
                    // anotherFunction(callbackFunction);
                    // // Output: Another function executed.
                    // //         Callback function executed.
                    // In this example, the callbackFunction() function is passed as an argument to the
                    // anotherFunction() function. The anotherFunction() function then calls the callbackFunction() function
                    // after it has finished executing. This is an example of a callback function in JavaScript.

            
            // How are callback functions used in asynchronous programming?
            // Callback functions are often used in asynchronous programming to handle the results of
            // asynchronous operations. In JavaScript, asynchronous operations are often handled using
            // the callback function pattern. Here's an example of how a callback function can be used
            // to handle the results of an asynchronous HTTP request:
            // function callbackFunction(response) {
                //   console.log("HTTP request completed.");
                //   console.log("Response: " + response);
                // }
                // function makeHTTPRequest(url, callback) {
                    //   var xhr = new XMLHttpRequest();
                    //   xhr.open("GET", url, true);
                    //   xhr.onload = function() {
                        //     if (xhr.status === 200) {
                            //         callback(xhr.responseText);
                            //     } else {
                                //         console.log("Error: " + xhr.status);
                                //     }
                                // };
                                // xhr.send();
                                // };
                                // makeHTTPRequest("https://example.com", callbackFunction);
                                // // Output: HTTP request completed.
                                // //         Response: {"name": "John Doe", "age": 30}


// 9.Write a function multiply that multiplies two numbers and a function calculate that takes two numbers and a callback function. Use these functions to multiply two numbers and log the result.
// function multiply(a, b) {
//     return a * b;
//     }
//     function calculate(a, b, callback) {
//         return callback(a, b);
//         }
//         console.log(calculate(2, 3, multiply));


// 10.What will be the output of the above code and why?

// function printMessage(message, callback) {
//   console.log(message);
//   callback();
// }

// function logMessage() {
//   console.log("Callback executed");
// }

// printMessage("Hello, world!", logMessage);

 // Output: Hello, world!
 //         Callback executed
 