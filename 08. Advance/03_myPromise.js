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

/*
IMPORTANT NOTE:
promise only rejects when a network error is encountered
A fetch()
(which is usually when there's a permissions issue or similar). A fetch()
promise does not reject on HTTP errors ( 404 , etc.). Instead, a then()
handler must check the and/or Response.status properties Response.0k

MY NOTE:
Network request gayi tabhi toh pta lgega ki error aaya hai (404, etc.), toh wo bhi .then() (OnFulfilled[]) 
mein he jayega, not .catch() (OnRejection[]) mein.
*/
