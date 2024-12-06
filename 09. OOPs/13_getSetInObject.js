// Rarely used and not recommended

const User = {
    _email: 'cc@xyz.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
tea.email = 'chaitanya@cc.com'
console.log(tea.email);

