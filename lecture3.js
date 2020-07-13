// scope of variables
// var is global/function(when declared in function) scoped
// let is block scoped

var price = 20;
var isSale = true;

// variable shadowing -- overriding the variable values outside of blocks(outer scope)
if(isSale) {
    var price = 20 - 2;
    console.log(price); // prints 18
}

console.log(price); // prints 18

let nPrice = 20;

if(isSale) {
    let nPrice = 20 - 2;
    console.log(nPrice); // prints 18
}

console.log(nPrice); // prints 20