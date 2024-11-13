const myUser = new Object()       // => singleton object

const user = {}                   // => non-singleton object
user.id = "123abc"
user.name = "Karan"
user.isLoggedIn = false                
console.log(user);                // { id: '123abc', name: 'Karan', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {                 // => nested objects
            firstname: "Chaitanya",
            lastname: "Chaudhary"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname);    // Chaitanya


const users = [    // array of objects
    {    // object-1
        id: 1,
        email: "me@gmail.com"
    },
    {    // object-2
        id: 2,
        email: "myself@gmail.com"
    },
    {    // object-3
        id: 3,
        email: "im@gmail.com"
    }
]
console.log(users[1].email);               // myself@gmail.com


// ********** Methods in objects ***********

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign(obj1, obj2, obj3)       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj5 = Object.assign({}, obj1, obj2, obj3)   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj6 = {...obj1, ...obj2, ...obj3}           // => preferred { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(obj4);
console.log(obj5);
console.log(obj6);

console.log(Object.keys(obj6));                    // [ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj6));                  // [ 'a', 'b', 'a', 'b', 'a', 'b' ]
// Very useful as it returns an array of keys or values, that can be looped, etc...

console.log(Object.entries(obj6));                // => returns an array of key-value pair arrays

console.log(obj6.hasOwnProperty("7"));            // false


// ********** Object Destructuring and JSON API **********

const course = {
    courseName: "Javascript and Chai",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);                          // Hitesh

// JSON (Javascript Object Notation)

// {
//     "name": "Chaitanya",
//     "coursename": "JS with Chai",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


