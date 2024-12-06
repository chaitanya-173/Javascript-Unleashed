class Teacher {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

class Student extends Teacher {  // inheriting properties of parent class
    constructor(username, email, password) {
        super(username);     // super constructor must be called in derived class
        this.email = email;
        this.password = password;
    }

    logMe() {
        console.log(`${this.username} just logged in via ${this.email}`);
    }
}

const rajwant = new Teacher('Rajwant', 'chai@google.com');

console.log(rajwant.username);
console.log(rajwant.email);
rajwant.addCourse();

const chaitanya = new Student('Chaitanya', 'cc@gmail.com', '123abc');

console.log(chaitanya.username);
console.log(chaitanya.email);
chaitanya.logMe();

chaitanya.addCourse();  // can inherit properties of parent class via inheritance

