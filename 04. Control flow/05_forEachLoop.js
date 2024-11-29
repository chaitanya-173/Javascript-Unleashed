// For each loop => most frequenty used loop for arrays

const coding = ['java', 'cpp', 'rb', 'py']

coding.forEach( function (val) {   // Using normal function
    console.log(val);
} ) 

coding.forEach( (item) => {        // Using arrow function
    console.log(item);
} )  

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


const myCodes = [              // Array of objects
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
]

myCodes.forEach( (item) => {
    console.log(item.langName);
    console.log(item.langFileName);
})


const myCoding = ["javascript", "ruby", "swift", "react"]
const values = myCoding.forEach( (item) => {
    return item
})
console.log(values);  // undefined

// forEach loop doesn't return any value 



const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

const newNums2 = myNums.filter( (num) => {
    return num > 4              // won't return with just num>4 if {} are used 
})
console.log(newNums2);

const newNumbers = []
myNums.forEach( (number) => {
    if(number > 4) {
        newNumbers.push(number)
    }
})
console.log(newNumbers);


const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

const userBooks1 = books.filter( (bk) => bk.genre === 'History')
const userBooks2 = books.filter( (bk) => bk.publish >= 2000 )
// const userBooks2 = books.filter( (bk) => { return bk.publish >= 2000 } )  // same as above
console.log(userBooks1);
console.log(userBooks2);

const userBooks3 = books.filter( (bk) => {
    return (bk.publish >= 1995 && bk.genre === "History")
})
console.log(userBooks3);
