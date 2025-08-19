// ==========================================================
// Section 1: ES6 Class Syntax (Modern Approach)
// ==========================================================

// ES6 introduced the 'class' keyword, which is "syntactic sugar" over JavaScript's existing prototype-based inheritance.
// It provides a much cleaner and more familiar syntax for developers coming from other object-oriented languages.

class User {
    // The 'constructor' is a special method for creating and initializing an object created with a class.
    // It is called automatically when a new instance of the class is created using the 'new' keyword.
    constructor(username, email, password) {
        // 'this' refers to the specific instance of the object being created.
        // We are assigning the passed-in arguments as properties of this new object.
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods are functions that belong to the class.
    // These methods are automatically added to the User.prototype, making them accessible to all instances of User.
    // This is memory efficient because the method is stored in one place, not duplicated for every object.
    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

// The 'new' keyword creates a new instance of the User class.
// It creates a new empty object, sets 'this' to that object, calls the constructor, and returns the object.
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Output: 123abc
console.log(chai.changeUsername());  // Output: CHAI


// ==========================================================
// Section 2: Prototype Syntax (The "Behind the Scenes" Approach)
// ==========================================================

// This is the traditional way of creating "classes" in JavaScript before ES6.
// The 'class' syntax above is essentially converted into this form by the JavaScript engine.

// This is a 'Constructor Function'. By convention, its name starts with a capital letter.
// Its job is to set up the properties for a new object.
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// We add methods to the constructor function's 'prototype' property.
// Every object created from this constructor will have access to these methods via the prototype chain.
// This ensures that the methods are not recreated for every instance, saving memory.
User.prototype.encryptPassword = function () {
    return `${this.password}abc`; // Note: I corrected this to match the class example.
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

// Creating an instance works exactly the same way.
const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername());  // Output: TEA