// CONCEPT: Object Literal ------------------------------------
// This is an 'object literal', a direct way to create a single, specific object.
const user = {
    username: "gourav",
    loginCount: 8,
    signedIn: true,

    // This is a method (a function inside an object).
    getUserDetails: function () {
        // console.log("Go user details form database")
        // console.log(`Username: ${this.username}`);

        // CONCEPT: The 'this' keyword -----------------------------
        // 'this' refers to the current context. Inside this method, 'this'
        // refers to the 'user' object itself.
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// When used in the global scope (outside any function), 'this' refers to the global object
// (like 'window' in a browser environment).
// console.log(this);


// CONCEPT: Constructor Function --------------------------------
// A constructor function is a blueprint for creating multiple objects of the same type.
// By convention, constructor names start with a capital letter.
function User(username, loginCount, isLoggedIn) {
    // 'this' refers to the new object being created by the 'new' keyword.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // We can also add methods. Each new object (instance) will get its own copy of this method.
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // The 'new' keyword automatically handles returning 'this', so this line is optional.
    return this
}

// CONCEPT: The 'new' keyword and Instances ---------------------
// The 'new' keyword creates a new, empty object and then calls the 'User' constructor function.
// 'userOne' and 'userTwo' are called "instances" of User. They are independent objects.
const userOne = new User("Gourav", 12, true)
const userTwo = new User("Goutam", 11, false)


// CONCEPT: The 'constructor' property --------------------------
// Every object created from a constructor has a '.constructor' property.
// It points back to the function that created it. This will log the 'User' function itself.
console.log(userOne.constructor);

// console.log(userOne);
// console.log(userTwo);