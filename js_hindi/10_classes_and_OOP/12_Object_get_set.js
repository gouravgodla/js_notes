// CONCEPT: Prototypal Inheritance
// This is not a class or a constructor. 'User' is a simple object literal
// that we will use as a prototype for other objects.
const User = {
    // These are the "backing properties" that hold the actual data.
    _email: 'h@hc.com',
    _password: "abc",


    // This is the modern syntax for defining a getter directly in an object.
    // It will run when 'email' is read.
    get email() {
        // NOTE: 'this' will refer to the object that INITIATES the call (in this case, 'tea'),
        // not the object where the method is defined ('User').
        return this._email.toUpperCase()
    },

    // This setter runs when a value is assigned to 'email'.
    set email(value) {
        this._email = value
    }
}

// CONCEPT: Object.create()
// This is the core of prototypal inheritance. Object.create() creates a new,
// empty object ('tea') and sets its internal prototype to the 'User' object.
// This means 'tea' inherits all the properties and methods from 'User'.
const tea = Object.create(User)

// --- EXECUTION TRACE ---
// 1. We try to access the 'email' property on the 'tea' object.
// 2. 'tea' does not have its own 'email' property.
// 3. JavaScript follows the prototype chain to the 'User' object.
// 4. It finds the 'get email()' method on 'User' and executes it.
// 5. Inside the getter, 'this' is 'tea'. The getter tries to access 'this._email'.
// 6. 'tea' doesn't have its own '_email', so JS again goes up the prototype chain to 'User'.
// 7. It finds '_email' on 'User', gets the value 'h@hc.com', and returns its uppercased version.
console.log(tea.email); // Output: H@HC.COM