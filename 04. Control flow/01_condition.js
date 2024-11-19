// if - else 

const temp = 21

if (temp < 30) {
    console.log("Temperature is low");
} else {
    console.log("Temperature is high");
}


const age = 19

if (age >= 18 && age <= 65) {
    console.log("You can drive, but please be safe");
} else if (age < 18) {
    console.log("Drive your cycle kiddo");
} else {
    console.log("Rest at your home please");
}


// switch - case 

const month = "mar"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("Month Not found");
        break;
}


// Falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values:
// "0", 'false', " ", [], {obj}, function(){}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {   // Object.keys() -> returns an array of keys
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): for => null, undefined  (To Check Safety)
// If any value has came by any complex function then than will be assigned otherwise null will be assigned

let val1
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Ternary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

