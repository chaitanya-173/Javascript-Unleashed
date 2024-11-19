const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
const newNums2 = myNumbers.map( (num) => { return num + 10} )  // same as above

console.log(newNums);
console.log(newNums2);

// for each
let ans = []
myNumbers.forEach( (num) => ans.push(num + 10))
console.log(ans);

const useOfFilter = myNumbers.filter( (num) => num >= 1 )
console.log(useOfFilter);


// Chaining
const newNumbers = myNumbers
                        .map( (num) => num * 10 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 41 )
console.log(newNumbers);