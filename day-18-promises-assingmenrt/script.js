// 1.Create a JavaScript function that returns a Promise which resolves with the message "Data fetched successfully!" after 2 seconds.
// let fetchUrl = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Data fetched successfully!")
//             }, 2000);
//             })
        
// }
// fetchUrl().then((data)=>{
//     console.log(data)
//     })

    // 2.Create a JavaScript function that returns a Promise which rejects with an error message "Failed to fetch data!" if the data ID is invalid (less than or equal to 0).
    // let fetchUrl = (id)=>{
    //     return new Promise((resolve,reject)=>{
    //         if(id<=0){
    //            setTimeout(()=>{
    //             reject("Failed to fetch data!")
    //            },5000)
    //             }
    //             else{
    //                 resolve("Data fetched successfully!")
    //                 }
    //                 })
    //                 }
    //                 fetchUrl(-1).then((data)=>{
    //                     console.log(data)
    //                     }).catch((err)=>{
    //                         console.log(err)
    //                         })
    // 3.Create two functions that return Promises. The first function fetches user data, and the second function return rejection of that code.

    function fetchUserData() {

        const userData = {
          name: "Alice",
          email: "alice@example.com",
        };
      
        return new Promise((resolve, reject) => {
          setTimeout(()=>{
            resolve(userData)
          },2000)
        });
      }
      
      function rejectPromise() {
        return new Promise((resolve, reject) => {
         setTimeout(() => {
            reject("Failed to fetch data!")
            },2000)
        });
      }