const user = {
    username: "Chaitanya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Karan"
user.welcomeMessage()

console.log(this);        // {} => in browser the global object is Window object


function chai() {
    let username = "Chaitanya"
    console.log(this.username);    // undefined => this can be used only in objects
}

chai()

/* Array function: Arrow functions are often preferred for shorter, inline functions 
or when you want to retain this context from the surrounding scope (e.g., in callbacks). */

const chai2 = () => {              // arrow function
    let username = "Chaitanya"
    console.log(this.username);    // undefined
}

chai2()


const addTwo = (num1, num2) => {                
    return num1 + num2                          // explicit return
}

console.log(addTwo(3, 4));


const addThree = (num1, num2) => num1 + num2    // implicit return

console.log(addThree(3, 4));

