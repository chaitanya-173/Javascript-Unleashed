let myDate = new Date()
console.log(typeof myDate);                        // object
console.log(myDate);                               // 2024-11-12T13:05:09.668Z
console.log(myDate.toString());                    // Tue Nov 12 2024 18:35:09 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());                // Tue Nov 12 2024
console.log(myDate.toLocaleString());              // 12/11/2024, 6:35:09 pm

let myCreatedDate = new Date(2024, 0, 26)          // (YYYY, MM, DD) format
console.log(myCreatedDate.toLocaleString());       // 26/1/2024, 12:00:00 am

let myNewCreatedDate = new Date(2024, 0, 26, 5, 3)
console.log(myNewCreatedDate.toLocaleString());    // 26/1/2024, 5:03:00 am

let myFormatDate = new Date("2024-01-26")
console.log(myFormatDate.toLocaleString());        // 26/1/2024, 5:30:00 am

let myIndianDate = new Date("11-23-2024")
console.log(myIndianDate.toLocaleString());        // 23/11/2024, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp);                          // 1731417655504 (millisec value from 1970)
console.log(myCreatedDate.getTime());              // 1706207400000

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);                              // 2024-11-12T13:39:30.110Z
console.log(newDate.getMonth() + 1);               // 11
console.log(newDate.getDay());                     // 2   => for tuesday

console.log(`Today's date is ${newDate.toDateString()} and current time is ${newDate.toTimeString()}`);

// Most Important
let temp = newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})

console.log(temp);                                 // Tuesday 12






