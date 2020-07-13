// arrow functions

// Arrow functions helps us in reducing boiler plate code

// normal function declaration

const fn = function functionName() {
    return "Some return value from function";
}

// this can be written with arrow function as

const arrowFn = () => "Returning from closure";

// if only one statement present in function, it is automatically returned

// arrows with params

// single param

const fn = function functionName(name) {
    return `Hello ${name}`;
}

// can be written as

const arrowFn = name => `Hello ${name}`;


// multiple params

const arrowFn = (name, age) => `Hello ${name}, you are ${age} years`;