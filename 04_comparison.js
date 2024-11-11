console.log("2" > 1)  // true  (ignores datatypes)
console.log("02" > 1)  //true

console.log(null > 0)  // false
console.log(null == 0)  // false
console.log(null >= 0)  // true

console.log(undefined == 0)  // false
console.log(undefined >= 0)  // false
console.log(undefined > 0)  // false

console.log("2" === 2)  // false  (checks datatypes also)

/* These types of comparisons should be avoided in most of the cases */

