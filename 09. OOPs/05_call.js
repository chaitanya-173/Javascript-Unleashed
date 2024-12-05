function setUsername(username) {
    // complex DB calls
    this.username = username;
    console.log('called');
}

function createUser(username, email, password) {
    
    setUsername.call(this, username);   // to pass by reference (call says: aap apna 'this' user mat kro, 
    this.email = email;                 //                       hum jo 'this' dere hain ise use kro)
    this.password = password;
}

const chai = new createUser("Chaitanya", "chaitanya1@meta.com", "123");
console.log(chai);
