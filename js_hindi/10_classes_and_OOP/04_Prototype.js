// let myName = "gourav     "
// let myChannel = "godla      "

// console.log(myName.trueLength);


// Here we have a simple Array and an Object.
let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
    }
}

// CONCEPT: Extending the top-level Object.prototype ----------------
// By adding 'gourav' to Object.prototype, almost ALL objects in JavaScript
// will now have access to this method through the prototype chain.
Object.prototype.gourav = function () {
    console.log(`gourav is present in all objects`);
}

// CONCEPT: Extending a specific prototype (Array) ----------------
// By adding 'heyGourav' only to Array.prototype, this method will
// ONLY be available on arrays.
Array.prototype.heyGourav = function () {
    console.log(`gourav say hello`);
}

// Both the Array (myHero) and the Object (heroPower) can access .gourav()
// because they both inherit from Object.
// heroPower.gourav()
// myHero.gourav()

// Only the Array (myHero) can access .heyGourav().
myHero.heyGourav()

// This will cause an error because heroPower is a plain object,
// and its prototype chain does not include Array.prototype.
// heroPower.heyGourav()


// CONCEPT: Prototypal Inheritance (Legacy way) -------------------
const user = {
    name: "chai",
    email: "example@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacheringSupport = {
    isAvailabele: false
}
const TASupport = {
    makingAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeacheringSupport // TASupport now inherits from TeacheringSupport.
}

// This sets the prototype of 'Teacher' to be the 'user' object.
// Now, 'Teacher' can access properties from 'user' (e.g., Teacher.name).
Teacher.__proto__ = user


// CONCEPT: Prototypal Inheritance (Modern Syntax) ----------------
// This is the modern, recommended way to set a prototype.
// 'TeacheringSupport' will now inherit everything from 'Teacher'.
Object.setPrototypeOf(TeacheringSupport, Teacher)


// CONCEPT: Extending a specific prototype (String) ----------------
let anotherUsername = "chai          "

// We are adding a new method '.trueLength()' to every string.
String.prototype.trueLength = function () {
    // Inside this function, 'this' refers to the string itself
    // that the method is being called on (e.g., "chai          ").
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

// Now we can call our custom method on any string.
anotherUsername.trueLength()
"gourav".trueLength()
"iceTea".trueLength()