// CONCEPT: Base Class (or Parent/Superclass)
// This is a blueprint for a generic user. It has a username and a method to log it.
class User {
    // The constructor method is called when a new 'User' object is created.
    // It initializes the object with the provided username.
    constructor(username) {
        this.username = username
    }

    // This is a method (a function within a class) available to all User instances.
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// CONCEPT: Inheritance (Child Class or Subclass)
// The 'Teacher' class inherits from the 'User' class using the 'extends' keyword.
// This means a Teacher will have all the properties and methods of a User, plus its own.
class Teacher extends User {
    // The constructor for the Teacher class takes more parameters.
    constructor(username, email, password) {
        // CONCEPT: Calling the Parent Constructor
        // 'super(username)' calls the constructor of the parent class ('User').
        // This is necessary to initialize the 'username' property defined in the User class.
        // It must be called before accessing 'this'.
        super(username)

        // These are properties specific to the Teacher class.
        this.email = email
        this.password = password
    }

    // This is a method that only Teacher instances will have.
    addCourse() {
        // It can access 'this.username' because it was inherited from the User class.
        console.log(`A new course was added by ${this.username}`);
    }
}

// --- INSTANTIATION & USAGE ---

// Creating an instance of the 'Teacher' class.
// 'chai' is now an object with properties: username, email, password.
// It has access to methods: addCourse() (from Teacher) and logMe() (inherited from User).
const chai = new Teacher("chai", "chai@mail.com", "123")

// Calling a method that is specific to the Teacher class.
// Output: "A new course was added by chai"
chai.addCourse()


// Creating an instance of the base 'User' class.
// 'masalaChai' is an object with only one property: username.
// It only has access to the logMe() method.
const masalaChai = new User("masalaChai")

// Calling the method from the User class.
// Output: "USERNAME is masalaChai"
masalaChai.logMe()

// CONCEPT: The 'instanceof' Operator
// This checks if an object is an instance of a class.
// 'chai' was created from the 'Teacher' class, which 'extends' the 'User' class.
// Therefore, 'chai' is considered an instance of both Teacher and User.
// This will log 'true' to the console.
console.log(chai instanceof User);