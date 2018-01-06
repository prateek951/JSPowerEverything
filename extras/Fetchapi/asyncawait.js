// // function myFunc() {
// //     return 'Hello';
// // }

// // console.log(myFunc);

// //using just the async keyword the function is returning a promise
// // async function myFunc(){
// //     return 'Hello';
// // }

// // console.log(myFunc());


// //utitising the promise
// async function myFunc(){
//     // return 'Hello';
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'),1000);
//     });
//     const error = false;

//     if(!error) {
//       //wait until the promise is resolved
//         const res = await promise;
//         return res;
//     }
//     else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
    
// }
// myFunc().then(res => console.log(res)).catch(err=> console.log(err));


async function getUsers(){
    //await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //only proceed if the promise is resolved
    const data = await response.json(); 
    //only proceed if the second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));