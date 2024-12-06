/*
Static property ka matlab hai ki woh property class ke andar directly 
define hoti hai, aur usko class ke naam se access kiya jata hai, object se nahi.

-> Static properties/methods are shared across all instances of the class.
-> They cannot be accessed through an instance of the class.
*/

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {
        return `123`;
    }
};

const chaitanya = new User("Chaitanya");
// console.log(chaitanya.createId());    // can't access by object name

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
};

// console.log(User.logMe());  // Normal function can't be accessed by class name
console.log(User.createId());  // Static function can be accessed by class name

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());    // can't access by name of instance of class

