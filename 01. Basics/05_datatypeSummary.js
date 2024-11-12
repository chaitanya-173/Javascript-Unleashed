// Primitive => String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const bigNumber = 3424534876921745172n
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // false
console.log(typeof bigNumber)  // bigint
console.log(typeof userEmail)  // undefined
console.log(typeof id)  // symbol


// Reference (Non-Primitive) => Array, Objects, Functions

const heros = ["spiderman", "batman", "superman"]  // Array

let myObj = {            // Object
    name: "chaitanya",
    age: "19"
}

const myFunction = function() {  // Function
    console.log("Hello world");
}

console.log(typeof heros);  // object
console.log(typeof myObj);  // object
console.log(typeof myFunction);  // function (called function object)

/* Datatype of non-primitive is object */


// ***************************************************************************

// Stack (Primitive), Heap (Non - Primitive)

//Stack
let myYoutubeName = "chaitanyadotcom"
let anotherName = myYoutubeName
anotherName = "chaitanyanewone"

console.log(myYoutubeName);
console.log(anotherName);

//Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "chaitanya@google.com"

console.log(userOne.email);
