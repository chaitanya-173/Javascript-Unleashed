// Array declaration

const myArr = [7, 1, 9, 3, 6, 5]
const myHeros = ["spiderman", "superman", "batman"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

console.log(myArr[0]);             // 7
console.log(myArr.length);         // 6

console.log(myArr);                // [ 7, 1, 9, 3, 6, 5 ]

myArr.push(11)                     // => insertion at end
console.log(myArr);                // [ 7, 1, 9, 3, 6, 5, 11 ]

myArr.pop()                        // => deletion from end
console.log(myArr);                // [ 7, 1, 9, 3, 6, 5 ]

myArr.unshift(23)                  // => insertion at begin
console.log(myArr);                // [ 23, 7, 1, 9, 3, 6, 5 ]

myArr.shift()                      // => deletion from begin
console.log(myArr);                // [ 7, 1, 9, 3, 6, 5 ]

console.log(myArr.includes(9));    // true
console.log(myArr.indexOf(6));     // 4

const newArr = myArr.join()        // => bind and convert into string
console.log(myArr);                // [ 7, 1, 9, 3, 6, 5 ]  
console.log(newArr);               // 7,1,9,3,6,5  
console.log(typeof newArr);        // string

// slice, splice

console.log("A ", myArr);          // A  [ 7, 1, 9, 3, 6, 5 ]

console.log(myArr.slice(1, 3));    // slice => don't make any changes in the array [ 1, 9 ]
console.log("B ", myArr);          // B  [ 7, 1, 9, 3, 6, 5 ]

console.log(myArr.splice(1, 3));   // splice => manipulates the original array [ 1, 9, 3 ]
console.log("C ", myArr);          // C  [ 7, 6, 5 ]


