// singleton => Apne tarah ka ek he object hai (Constructor se bnate hain toh bnta hai, not by literals)

// Declaration => by object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chetan",
    "full name": "Chaitanya Chaudhary",
    age: 19,
    location: "Noida",
    email: "chaitanya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}

console.log(JsUser.email);                  // chaitanya@google.com
console.log(JsUser["email"]);               // chaitanya@google.com
// console.log(JsUser.full name);           // => not possible
console.log(JsUser["full name"]);           // Chaitanya Chaudhary
console.log(JsUser[mySym]);                 // myKey1
console.log(typeof mySym);                  // symbol

JsUser.email = "chaitanya@chatgpt.com"
console.log(JsUser.email);                  // chaitanya@chatgpt.com

// Object.freeze(JsUser)                    // => freezes the object
JsUser.email = "chaitanya@microsoft.com"    
console.log(JsUser.email);                  // chaitanya@chatgpt.com

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());             // Hello JS User
console.log(JsUser.greetingTwo());          // Hello JS User, Chetan
