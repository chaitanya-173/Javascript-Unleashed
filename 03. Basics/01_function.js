function loginUserMessage(username) {             // function definition
    if(!username) {
        console.log("Please enter a username");
        return     
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage("Chaitanya"));       // function call
console.log(loginUserMessage());


function calculateCartprice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartprice(200, 400, 500, 1000, 5000));


const user = {
    username: "Chaitanya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)                 // function call

handleObject({                     // function call
    username: "Karan",
    price: 399
})


function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 100, 700]));





