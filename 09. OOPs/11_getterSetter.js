// Mostly used and preferred method

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}chaitanya`
    }
    set password(value){
        this._password = value
    }
}

const chaitanya = new User("cc@chatgpt.ai", "xyz")
console.log(chaitanya.email);
console.log(chaitanya.password);