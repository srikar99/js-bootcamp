// store unchanging values with const
// diff between let and const
// 1) const must be initialized, 2) cannot modify the variable
const age = 26;
//age = 36; // throws error


function testScopeVarAndLet() {
    if(true) {
        let a = 10;
        var b = 20;
        const c = 30;
    }

    console.log('a: ', a); // error
    console.log('b: ', b); // no error
    console.log('c: ', c); // error
}

testScopeVarAndLet();
console.log(b); // error