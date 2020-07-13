// Closures

// example for closure

function likeCount() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    }
}

let likes = likeCount();

console.log(likes());
console.log(likes());
console.log(likes());

/*
    
*/

// Criteria for Closures

// Closures are a property of functions, no other data type has closure
// Functions should be executed in the outer scope than where the function was originally defined