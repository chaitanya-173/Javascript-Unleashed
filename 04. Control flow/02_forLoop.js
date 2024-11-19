// for loop

for(let i=0; i<10; i++) {
    console.log(`Number: ${i}`);
} console.log("\n");

for(let i=1; i<=10; i++) {
    console.log(`Table of ${i}`);
    for(let j=1; j<=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    } console.log("\n");
} 

let myArray = ["flash", "batman", "superman"]
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} console.log("\n");


// break and continue

for(let i=1; i<=10; i++) {
    if(i == 5) {
        console.log(`${5} Detected`); 
        break;
    }
    console.log(`Value of i is ${i}`);
} console.log("\n");


for(let i=1; i<=10; i++) {
    if(i == 5) {
        console.log(`${5} Detected`); 
        continue;
    }
    console.log(`Value of i is ${i}`);
}

