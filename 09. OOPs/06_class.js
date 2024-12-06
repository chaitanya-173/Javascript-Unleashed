// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {  // function
        return `The password is ${this.password}abc`;
    }
    changeUsername() {
        return `The new username is ${this.username.toUpperCase()}`;
    }
};

const chai = new User('chai', 'chai@google.com', '123');

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the scenes

function NewUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

NewUser.prototype.encryptPassword = function(){
    return `The password is ${this.password}xyz`;
}
NewUser.prototype.changeUsername = function(){
    return `The new username is ${this.username.toUpperCase()}`;
}

const tea = new NewUser("tea", "tea@gmail.com", "789")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
