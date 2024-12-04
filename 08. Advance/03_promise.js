// Promise-1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){                         // setTimeout -> async task to be handled
        console.log('Async task is complete');
        resolve();                                 // resolve executes when promise is successfully fulfilled
    }, 10000);  // 10 sec
});

promiseOne.then(function(){                        // when promise successfully resolve(), then() block runs after that
    console.log("Promise consumed");               // then handles the result of async task
});


// Promise-2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 7000)

}).then(function(){
    console.log("Async 2 resolved");
})


// Promise-3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chaitanya", email: "chaitanya.google.com"})   // the object in the resolve() is passed on to then()
    }, 5000)
})

promiseThree.then(function(user){    // then receives the object (user details) and can access them
    console.log(user);
    console.log(user.username);
    console.log(user.email);
})


// Promise-4 : Promise handling both success and failure scenarios and chain multiple .then() blocks.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Karan", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 3000)
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username        // returns username (Karan) to the next .then() if error = false
})
.then((username) => {
   console.log(username);
})
.catch(function(error){
   console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))  
// .finally() block runs regardless of whether the promise resolves or rejects.

// If error = false: The promise resolves, .then() blocks execute, and finally runs.
// If error = true: The promise rejects, .catch() executes, and finally runs.


// Promise-5: Handling a Promise using async and await, which is a more modern and readable way to work with asynchronous code.
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){   // async keyword is used to define an async function. This allows the use of await inside it to handle promises more easily.
    try {
        const response = await promiseFive;  // await keyword pauses the execution of the function until the promise resolves or rejects.
        console.log(response);               
    } catch (error) {                        // If the promise resolves, the result (response) is returned and logged.
        console.log(error);                  // If the promise rejects, an error will be caught in the catch block.
    }
}

consumePromiseFive()  // calls the consumePromiseFive function, which executes the asynchronous task and handles the promise result or error.



/*
Promise is used to handle an asynchronous task and take action after it completes. 
In real-life coding, this is used to efficiently manage time-consuming tasks without freezing the rest of the program.

When you have tasks that take time (e.g., database queries, API calls, or encryption), 
you can handle them without blocking the rest of your code using Promise. In this eg. setTimeout simulates an async operation.

If the async task is successful, resolve() is called.
If the task fails, you can call reject(), which can be handled in the .catch() block to manage errors.

Real-World Scenarios Where This Can Be Used:
Database Queries:  For example, fetching a user's data from a database.
API Requests:  Sending a request to a server and waiting for the response.
File Operations:  Reading or writing files asynchronously.
*/