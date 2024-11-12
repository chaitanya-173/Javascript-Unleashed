const myName = "Chaitanya"
const repoCount = 3

console.log(myName + repoCount + " Value")

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String("Chaitanya-CC")

console.log(gameName[0]);              // C
console.log(gameName.__proto__);       // {}

console.log(gameName.length);          // 12
console.log(gameName.toUpperCase());   // CHAITANYA-CC
console.log(gameName.charAt(4));       // t
console.log(gameName.indexOf('t'));    // 4
console.log(gameName.substring(0, 4)); // Chai  => ignores negative values & starts from 0 only
console.log(gameName.slice(-10, 4));   // ai    (-index => start from the end)

const newStringOne = "   chaitanya   "
console.log(newStringOne);             //    chaitanya
console.log(newStringOne.trim());      // chaitanya   => ignores start & end spaces

const url = "https://chaitanya.com/chaitanya%18chaudhary"
console.log(url);                      // https://chaitanya.com/chaitanya%18chaudhary
console.log(url.replace("%18", "-"));  // https://chaitanya.com/chaitanya-chaudhary
console.log(url.includes(".com"));     // true

console.log(gameName.split('-'));      // converts into an array by splitting from a string/char


/* Go through all the methods (functions) of String */

