// strings

let str = "Valid String";
let strings = 'Valid String';

// concat strings
let name = prompt("Enter you name: ");
const message = "Hi " + name + ", how are you?";
// const message = "Hi ", name;

console.log(message);

// creating string using `(template literal)

// const message = "Hi " + name + ", how are you?"; better way to do this is
const message = `Hi ${name} how are you?`; // ${name} => string interpolation
