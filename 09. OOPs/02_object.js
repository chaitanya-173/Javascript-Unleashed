const user = {
    username: "Chaitanya",
    loginCount: 8,
    isLoggedIn: true, 

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function UserProfile(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;   // jisne call kiya usse return krega ye
}

const userOne = new UserProfile('Karan', 10, false);        
const userTwo = new UserProfile("ChaiAurCode", 11, true);

console.log(userOne);
console.log(userTwo);
console.log(userOne.greeting());


