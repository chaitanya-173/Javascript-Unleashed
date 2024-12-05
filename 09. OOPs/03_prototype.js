/*
Arrays and strings are not directly prototypes of anything; they are instances.

The prototype chain looks like this:
For an Array: arr → Array.prototype → Object.prototype → null
For a String: str → String.prototype → Object.prototype → null

*/

let myCricketers = ['Virat', 'Steyn']          // Array

let cricketerSkills = {                        // Object
    Virat: 'batting',
    Steyn: 'bowling',
}

Array.prototype.heyChaitanya = function() {    // Array prototype
    console.log(`Chaitanya says hello`);
}

Object.prototype.chaitanya = function() {      // Object prototype
    console.log(`Chaitanya is present in all objects`);
}

console.log(myCricketers.length);
console.log(cricketerSkills.Virat);

myCricketers.heyChaitanya();      
myCricketers.chaitanya();         // object prototype will work with an array  
// cricketerSkills.heyChaitanya();   // array prototype will not work with an object
cricketerSkills.chaitanya();      

// Prototype inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User       // older syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// MY Example: 
let username = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);     // jisne call kiya hai usse print krega 
    console.log(`True length is: ${this.trim().length}`);
}

username.trueLength();
"chaitanya   ".trueLength();
"iceTea   ".trueLength();

// We have made a function named truelength() for every string





