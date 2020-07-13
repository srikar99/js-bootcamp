// Object Spread

const user = {
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    isValidated: true
}

const newUser = {
    username: 'Shreekar',
    email: 'test@email.com',
    password: 'password'
}

// copying object properties using object.assign

Object.assign(user, newUser);

console.log(user); // the properties from new user are copied to user

Object.assign(user, newUser, {isValidated: false}); 
console.log(user);

console.log(Object.assign({}, user, newUser, {isValidated: false})); // user and new user are now copied to the empty object

// Making this more intuitively by using spread operator

const obj = {...user, ...newUser, isValidated: false};

console.log(obj);

