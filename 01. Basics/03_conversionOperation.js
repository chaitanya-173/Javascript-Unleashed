let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true

let score1InNumber = Number(score1)  // "33" => 33
let score2InNumber = Number(score2)  // "abc" => NaN (Not a Number)
let score3InNumber = Number(score3)  // null => 0
let score4InNumber = Number(score4)  // undefined => NaN
let score5InNumber = Number(score5)  // true => 1, false => 0

console.log(typeof score1InNumber);
console.log(score1InNumber);  
console.log(typeof score2InNumber);
console.log(score2InNumber);  
console.log(typeof score3InNumber);
console.log(score3InNumber);  
console.log(typeof score4InNumber);
console.log(score4InNumber);  
console.log(typeof score5InNumber);
console.log(score5InNumber);  


let isLoggedIn = 0
let username1 = ""
let username2 = "Chaitanya"

let booleanIsLoggedIn = Boolean(isLoggedIn)  // 1 => true, 0 => false
let booleanUsername1 = Boolean(username1)  // "" => false
let booleanUsername2 = Boolean(username2)  // "anything" => true

console.table([booleanIsLoggedIn, booleanUsername1, booleanUsername2]);


let someNumber = 18
let stringNumber = String(someNumber)  // 18 => "18"

console.log(typeof stringNumber)
console.log(stringNumber)
console.log("\n")

// ***************************** Operations ********************************

let value = 3
let negValue = -value
console.log(negValue)  // -3


console.log("1" + "8")
console.log("1" + 8)
console.log(1 + "8")
console.log("1" + 4 + 4)  // 144
console.log(1 + 4 + "4")  // 54
console.log(1 + "4" + 1)  // 141
console.log("\n")

/* Agar string first hai toh sb concatenate honge else different operations */

console.log(+true);  // 1
console.log(+"");  // 0










