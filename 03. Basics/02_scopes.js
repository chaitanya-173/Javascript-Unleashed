let a = 300               // global scope

if(true) {
    let a = 10            // local scope
    const b = 20
    console.log("Inner: ", a);
}

console.log("Outer: ", a);     


if(true) {
    const username = "Chaitanya"
    if(username === "Chaitanya") {
        const website = " Github"
        console.log(username + website);
    }
    // console.log(website);   // => error (out of the scope)
}

// console.log(username);      // => error (out of the scope)


console.log(addOne(5));
function addOne(num) {
    return num + 1
}

// console.log(addTwo(5));          // => error due to its different definition
const addTwo = function(num) {   // => expression (function only but holded by a variable)
    return num + 2
}
console.log(addTwo(5));

