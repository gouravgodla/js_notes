// The User class now includes a static method.
class User {
    constructor(username) {
        this.username = username
    }

    // This is an INSTANCE method. It's available on every object created from User.
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // CONCEPT: Static Method
    // The 'static' keyword creates a method that belongs to the CLASS itself,
    // not to any instance of the class.
    // It's often used for utility functions that don't require instance data.
    // You cannot call this method on an instance like 'hitesh'.
    static createId() {
        return `123`
    }
}

// 'hitesh' is an instance of the User class.
const hitesh = new User("hitesh")

// This line is commented out because it would cause an error:
// TypeError: hitesh.createId is not a function
// The 'createId' method exists on the User class, not on the 'hitesh' object.
// To call it correctly, you would write: User.createId()
// console.log(hitesh.createId());


// The Teacher class inherits everything from User, including its static methods.
class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

// 'iphone' is an instance of the Teacher class.
const iphone = new Teacher("iphone", "i@phone.com")

// This works perfectly because 'logMe' is an instance method inherited from User.
// Output: "Username: iphone"
iphone.logMe();

// This line would also cause a TypeError for the same reason as before.
// Even though Teacher inherits the static 'createId' method, it remains static.
// It cannot be called on an instance of the child class.
// The correct way to call it via the child class would be: Teacher.createId()
// console.log(iphone.createId());