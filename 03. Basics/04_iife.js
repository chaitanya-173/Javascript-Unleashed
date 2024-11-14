// Immediately Invoked Function Expressions (IIFE)
// To remove the declaration pollution from the global scope and those functions that immediately execute

// ()(); // => IE- first one for function definition, second one for execution

(function chai() {
    console.log(`DB Connected`)
})();  // semicolon necessary to end

( () => {                                      // Arrow function as an IIFE
    console.log(`DB connected two`)
})();

(function code(yourName) {                     // Named IIFE
    console.log(`DB ${yourName} connected`)
})("Karan");

( (myName) => {
    console.log(`DB ${myName} connected `)
})("Chaitanya");