// Instance -> new & this keyword

function createDrink(drinkName, price) {
    this.drinkName = drinkName;              // chai.drinkName = drinkName / tea.drinkName = drinkName
    this.price = price;                      // chai.price = price / tea.price = price
}

createDrink.prototype.incrementMe = function() {
    this.price++;
}

createDrink.prototype.printMe = function() {
    console.log(`Price of ${this.drinkName} is ${this.price}`);
}

const chai = new createDrink("Chai", 25);
const tea = new createDrink("Tea", 100);

chai.printMe();
tea.printMe();

chai.incrementMe();
console.log(chai.price);
tea.incrementMe();
console.log(tea.price)

console.log(typeof chai);

// MY NOTE: 
// this keyword matlab uski baat hori hai jisne bheji hai call  (this matlab jiss)


/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JS object.

2. A prototype is linked: The newly created object gets linked to the prototype property 
of the constructor function. This means that it has access to properties and methods defined 
on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
