// A single source file demonstrating various ways to create and handle Promises in JavaScript.

// doc-link:--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// ===================================================================
// 1st Way: Basic Promise Creation and Consumption
// ===================================================================
const promiseOne = new Promise(function (resolve, reject) {
    // An asynchronous task is simulated with setTimeout.
    // This could be a database call, cryptography task, or network request.
    setTimeout(function () {
        console.log('Async task 1 is complete');
        resolve(); // The promise is fulfilled.
    }, 1000);
});

// .then() is used to handle the fulfilled state of the promise.
promiseOne.then(function () {
    console.log("Promise 1 consumed");
});

// ===================================================================
// 2nd Way: Chaining .then() directly to the Promise definition
// ===================================================================
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is complete");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

// ===================================================================
// 3rd Way: Passing Data on Resolution
// ===================================================================
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Data (an object in this case) is passed to resolve().
        resolve({ username: "gourav", email: "example@gmail.com" });
    }, 1000);
});

// The data passed to resolve() is received as an argument in the .then() callback.
promiseThree.then(function (user) {
    console.log(user);
});

// ===================================================================
// 4th Way: Rejection, Chaining, and .finally()
// ===================================================================
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // Simulate an error condition.
        if (!error) {
            resolve({ username: "GOURAV", password: "123" });
        } else {
            // reject() is called when an error occurs.
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        // This part is skipped because the promise is rejected.
        console.log(user);
        return user.username; // The return value is passed to the next .then().
    })
    .then((username) => {
        // This part is also skipped.
        console.log(username);
    })
    .catch(function (error) {
        // .catch() handles the rejected state of the promise.
        console.log(error);
    })
    .finally(() => {
        // .finally() runs regardless of whether the promise was resolved or rejected.
        console.log("Promise 4 is either resolved or rejected");
    });

// ===================================================================
// 5th Way: Consuming a Promise with async/await
// ===================================================================
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // Simulate an error.
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000);
});

// An async function allows the use of the await keyword.
async function consumePromiseFive() {
    // try...catch is used for error handling with async/await.
    try {
        // 'await' pauses the function until the promise settles.
        // If fulfilled, it returns the resolved value.
        // If rejected, it throws an error, which is caught by the catch block.
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


//-------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);

//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error);

    })



// notes
/*
Summary of the JavaScript Promise Code
This code demonstrates five different ways to create and handle Promises in JavaScript, 
which are used to manage asynchronous tasks like network requests or timers.

The Classic Approach: .then(), .catch(), and .finally()
The first four examples show the traditional way of working with Promises:

Creation: A Promise is created using new Promise((resolve, reject) => { ... }). 
Inside, you perform your async task. You call resolve(data) upon success or reject(error) upon failure.

Consumption:

You use the .then() method to handle a successful resolution. 
Any data passed to resolve() becomes available inside .then().
You can chain multiple .then() blocks to perform sequential operations.

You use the .catch() method to handle a failure (rejection).

The .finally() method contains code that will run regardless of whether the promise was resolved or rejected, 
making it ideal for cleanup tasks.

The Modern Approach: async/await
The fifth example introduces the modern, more readable async/await syntax:

async Function: By declaring a function with the async keyword, you can use the await keyword inside it.

await Keyword: This keyword pauses the function's execution until a Promise settles. 
If the promise resolves, await returns its value. If it's rejected, it throws an error.

try...catch Block: Error handling is done using a standard try...catch block, 
which makes the asynchronous code look and feel much more like synchronous, straightforward code.
*/