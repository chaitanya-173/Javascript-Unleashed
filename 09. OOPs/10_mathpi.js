const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

Math.PI = 500000;  // won't affect

descripter.value = 5000000;
descripter.writable = true;
descripter.enumerable = true;
console.log(descripter);
// {
//     value: 5000000,
//     writable: true,
//     enumerable: true,
//     configurable: false
// }

// We can also edit the hidden properties description of any object that we define:

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false, 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}


