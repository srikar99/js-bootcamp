// Replacing var with let and const


message = "Hello World!";
// message is added to global object

// once a variable is declared with the same message, global object is overridden
// here message declared globally will now be overriden and global object no longer has
// message
var message = "Hello";

console.log('global: ', global);
console.log('global.message: ', global.message);
console.log('message: ', message);

// using strict mode in js
// add "use strict" at the top of the js file

//alert = 'hi';
//alert('hi');

// Hoisting
// Variable declarations are lifted/hoisted to the top of the application
// hoisting provides a way to access variables before they are declared

console.log('age: ', age);
var age = 26; 
// ==> this is essentially converted to

var age;
console.log(age);
age = 26;

// let and const

// variables declared as let and const are not hoisted

//console.log(newAge);
let newAge = 26;

// works seemlessly even with const

// temporal deadzone, area between where a var is used and declared

// var allows redeclaring variable, let/const doesn't
var age  = 26;
console.log(age);
//let newAge = 26;
console.log(newAge);


// const needs init value
//const a; // throws error
const b = 10; // runs successfully