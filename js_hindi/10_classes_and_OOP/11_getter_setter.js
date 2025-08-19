// CONCEPT: Getters and Setters
// This class demonstrates special methods called getters and setters. They allow you
// to run code when a property is read (get) or written (set), making it seem
// like you're accessing a normal property from the outside.

class User {
    constructor(emil, password) {
        this.emil = emil
        // When this line runs, it doesn't just assign a value.
        // It automatically calls the 'set password(value)' method below.
        this.password = password
    }

    // CONCEPT: Getter Method
    // A 'getter' is defined with the 'get' keyword. It runs whenever you
    // try to READ the value of 'this.password'.
    // Notice it accesses '_password' to retrieve the value.
    get password() {
        // It can perform logic, like formatting the data before returning it.
        return this._password.toUpperCase()
    }

    // CONCEPT: Setter Method
    // A 'setter' is defined with the 'set' keyword. It runs whenever you
    // try to ASSIGN a value to 'this.password'.
    set password(value) {
        // CONCEPT: Backing Property
        // We store the actual data in a property named '_password'.
        // The underscore '_' is a common convention to indicate that this property
        // is not meant to be used directly from outside the class.
        // Using a different name like '_password' is crucial to avoid an infinite loop,
        // because if we did 'this.password = value' inside the setter, it would
        // just call the setter again and again.
        this._password = value.toUpperCase()
    }
}

// 1. Create a new User instance. The constructor is called.
// 2. Inside the constructor, 'this.password = "abc"' calls the SETTER.
// 3. The setter takes "abc", converts it to "ABC", and stores it in 'this._password'.
const gourav = new User("gourav@gmail.com", "abc")

// 4. This line tries to READ the value of 'gourav.password', which calls the GETTER.
// 5. The getter retrieves 'this._password' (which is "ABC") and returns it.
console.log(gourav.password); // Output will be "ABC"










// CONCEPT: Constructor Function
// Before the 'class' keyword was introduced in ES6, JavaScript used constructor
// functions like this one to act as a blueprint for creating objects.
function User(email, password) {
    // CONCEPT: Backing Properties
    // These properties (_email, _password) hold the actual data. The underscore '_'
    // is a common developer convention to signal that these properties are
    // "private" and shouldn't be accessed directly from outside.
    this._email = email;
    this._password = password

    // CONCEPT: Defining Getters and Setters with Object.defineProperty()
    // This is the core method for defining a property's behavior. We are defining
    // a public property named 'email' on the current object ('this').
    Object.defineProperty(this, 'email', {
        // The 'get' method is a function that runs whenever you READ 'this.email'.
        get: function () {
            // It retrieves the data from the backing property and can modify it.
            return this._email.toUpperCase()
        },
        // The 'set' method is a function that runs whenever you ASSIGN a value to 'this.email'.
        set: function (value) {
            // It takes the new value and stores it in the backing property.
            this._email = value
        }
    })

    // We do the same for the 'password' property.
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })

}

// The 'new' keyword creates a new empty object, sets 'this' inside the User
// function to that object, and runs the constructor code.
const chai = new User("chai@chai.com", "chai")

// This line does not simply read a value. It triggers the 'get' function
// we defined for the 'email' property, which then executes and returns the
// uppercased string.
console.log(chai.email); // Output: CHAI@CHAI.COM