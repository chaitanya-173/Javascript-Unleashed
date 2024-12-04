// Method - 1
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = await response.json();
        console.log(typeof data)
        console.log(data);
        console.log(data.followers);
    } catch(error) {
        console.log("Error: ", error);
    }
}

getAllUsers();


// Method - 2
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



