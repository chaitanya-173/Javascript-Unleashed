const batsmen = ["Virat", "Abd", "Gayle"]
const bowlers = ["Steyn", "Starc", "Anderson"]
const fielders = ["Stokes", "Jadeja", "Boult"]

const cricketPlayers = batsmen.concat(bowlers, fielders)
console.log(cricketPlayers); // ['Virat',  'Abd', 'Gayle',  'Steyn', 'Starc',  'Anderson', 'Stokes', 'Jadeja', 'Boult']

const cricketers = [...batsmen, ...bowlers, ...fielders]   // more preferred
console.log(cricketers); // ['Virat',  'Abd', 'Gayle',  'Steyn', 'Starc',  'Anderson', 'Stokes', 'Jadeja', 'Boult']

const anotherArray = [1, 3, 4, [5, 6], [7, [8, 9]]]
console.log(anotherArray.flat(Infinity));        // [ 1, 3, 4, 5, 6, 7, 8, 9 ]

console.log(Array.isArray("Chaitanya"));         // false
console.log(Array.from("Chaitanya"));            // [ 'C', 'h', 'a', 'i', 't', 'a', 'n', 'y', 'a' ]
console.log(Array.from({name: "Chaitanya"}));    // []  => interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   // [ 100, 200, 300 ]

