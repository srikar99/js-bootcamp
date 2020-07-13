// primitive vs reference types

/*
    primitive types in JS

    undefined
    null
    string
    number
    boolean
    symbol
*/

/*
    1) primitives are passed by value, objects are passed by referance
    2) primitives are immutable, object properties can be modified
*/

const num = 10;
const anotherNum = 10;

console.log('Number primitives: ', num === anotherNum); // should print true;
console.log('String primitives: ', 'string' === 'string'); // should pring true

const obj = {};
const anotherObj = {};

console.log('Objects comparison: ', obj === anotherObj); // should print false;

const o = {};
const anotherO = o;

anotherO.a = 10;

console.log('Objects Properties: ', o); // should contain the property a