// Object destructuring

/*

Pull out the properties from an object and use them as variables

*/

const user = {
    "username": "Shreekar",
    "email": "test@email.com",
    "name": "Shreekar",
    "details" : {
        "title": "Programmer"
    }
};

// . notation to access properties

function displayUser() {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
}

// destructing

const {username, email} = user;

function displayUser1() {
    console.log(`Username: ${username}, Email: ${email}`);
}

displayUser();
displayUser1();


// destructing nested objects, e.g., title from details in the user object

const {name, details: {title}} = user;

function displayUserBio() {
    console.log(`${name} is a ${title}`);
}

displayUserBio();

// destructuring as function arguments.

// we can directly send the destructured object to the function as arguments

function displayUserBioParams({name, details: {title}}) {
    console.log(`${name} is a ${title}`);
}

displayUserBioParams(user);