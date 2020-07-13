// ternary operators

const isUserAuthenticated = false;
let cartCount = 0;

if(isUserAuthenticated) {
    cartCount = 1;
} else {
    cartCount = 0;
}

// => can be written as

const cartCountNew = !isUserAuthenticated ? 1 : 0;

console.log(cartCount)
console.log(cartCountNew)

// multiple ternaries

const age = 49;

const greeting = age < 20 ? "Hey kid!" : age > 20 && age < 50 ? "Hey young man" : "Hey sir!";

console.log(greeting);
