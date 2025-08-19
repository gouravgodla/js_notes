function SetUsername(username) {
    // This function is designed to handle the complex logic
    // of setting a username, like making a database call.

    // 'this.username' will attach the username property to whatever
    // object 'this' refers to when this function is called.
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // CONCEPT: Using .call() to set the 'this' context --------------
    // We are calling the SetUsername function, but we are explicitly
    // telling it to use the 'this' of the 'createUser' function.
    // In this case, 'this' refers to the new object being created ('chai').
    // This effectively lets 'createUser' borrow the functionality of 'SetUsername'.
    SetUsername.call(this, username)

    // These properties are set on the new object directly.
    this.email = email
    this.password = password
}

// When 'new createUser(...)' is run:
// 1. A new empty object is created (e.g., {}).
// 2. 'this' inside 'createUser' is set to this new object.
// 3. SetUsername is called, but its 'this' is also set to this new object.
// 4. The new object is returned and assigned to 'chai'.
const chai = new createUser("chai", "example@gmail.com", "123")

// The final object will have all properties from both functions.
console.log(chai);
// Expected Output: createUser { username: 'chai', email: 'example@gmail.com', password: '123' }