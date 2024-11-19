// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello"
for(const greet of greetings) {
    console.log(`Char is ${greet}`);
}


// Maps
const myMap = new Map()

myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('UK', "United Kingdom")
myMap.set('IN', "India")

console.log(myMap);
for(const [key, value] of myMap) {
    console.log(key, ':-', value);
}


const myObject = {
    'js': 'Javascript',
    'cpp': 'C++',
    'rb': 'Ruby',
    'py': 'Python'
}

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }     

// TypeError: myObject is not iterable 
// Objects can't be iterated by for of loop


// for in loop

for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArr = ['js', 'cpp', 'java', 'py', 'rb','swift', 'C#']
for(const langs in myArr) {
    console.log(`Programming language: ${myArr[langs]}`);
}

