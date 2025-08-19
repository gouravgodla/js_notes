# javascript and classes

## OOP

## Object

- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

Object literal

- Constructor function
- Prototypes
- Classess
- Instances (new, this)

## 4 pillars of OOP

Abstraction
Encapsulation
Inheritance
Polymorphism

# JavaScript and Object-Oriented Programming (OOP)

This document provides a concise overview of Object-Oriented Programming (OOP) concepts in JavaScript.

---

## 🧐 What is OOP?

**Object-Oriented Programming** is a programming paradigm based on the concept of "objects". It's a way of structuring code that helps in creating more organized, reusable, and manageable applications. Instead of thinking about a program as a sequence of commands, OOP encourages thinking about it as a collection of objects that interact with each other.

---

## 📦 What is an Object?

In JavaScript, an object is a standalone entity that holds a collection of **properties** and **methods**.

- **Properties**: These are key-value pairs that represent the characteristics or data of the object (e.g., `name: 'John'`, `age: 30`).
- **Methods**: These are functions stored as object properties that represent the actions or behaviors the object can perform (e.g., a `greet()` function).

**Example:**
The string `toLowerCase()` is a method on the String object that performs an action.

```javascript
const myString = "Hello World";
console.log(myString.toLowerCase()); // "hello world"
```

---

## 🤔 Why Use OOP?

Using OOP principles helps you write better, cleaner code. Key benefits include:

- **Modularity**: Encapsulation allows objects to be self-contained, making troubleshooting and collaborative development easier.
- **Reusability**: Inheritance allows you to reuse common logic and code from existing classes, reducing redundancy.
- **Scalability**: OOP provides a clear structure that makes it easier to manage and scale large and complex applications.
- **Maintainability**: Code is easier to read, understand, and maintain.

---

## 🛠️ Parts of OOP in JavaScript

JavaScript has several ways to create objects and implement OOP principles.

### Object Literal

The simplest way to create an object is using the object literal syntax.

```javascript
const user = {
  username: "gourav",
  loginCount: 8,
  isLoggedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};

console.log(user.username);
user.getUserDetails();
```

### Constructor Function

A constructor function is like a template for creating multiple objects of the same type. The `new` keyword is used to create new instances from this constructor. The `this` keyword refers to the new object being created.

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome, ${this.username}!`);
  };

  // `return this` is implicitly done by `new`
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chai", 11, false);

console.log(userOne);
userTwo.greeting();
```

### Prototypes

Every JavaScript object has a private property which holds a link to another object called its **prototype**. This prototype object has its own prototype, and so on, until an object is reached with `null` as its prototype. This is called the **prototype chain**.

Prototypes are a powerful way to add properties and methods to all instances of a constructor function efficiently.

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the Car prototype
Car.prototype.drive = function () {
  console.log(`Driving the ${this.make} ${this.model}.`);
};

const myCar = new Car("Honda", "Civic");
myCar.drive(); // This method is accessible from the prototype
```

### Classes (ES6)

ES6 introduced the `class` syntax, which is "syntactic sugar" over JavaScript's existing prototype-based inheritance. It provides a cleaner and more familiar syntax for developers coming from other OOP languages.

```javascript
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@example.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
```

### Instances (new, this)

- **`new` keyword**: When you use the `new` keyword with a constructor function or a class, it does four things:
  1.  Creates a brand new, empty object.
  2.  Sets the new object's prototype.
  3.  Binds the `this` keyword to the newly created object.
  4.  Returns the new object (unless the constructor explicitly returns another object).
- **`this` keyword**: The `this` keyword refers to the object it belongs to. Its value depends on how a function is called. In the context of a constructor or class instance, `this` refers to that specific instance.

---

## 🏛️ The Four Pillars of OOP

These are the fundamental principles that define object-oriented programming.

### 1. Abstraction

**Hiding complex implementation details and showing only the essential features of the object.** Think of a remote control for a TV. You only see the buttons (`on`, `off`, `volumeUp`), not the complex electronics inside that make it work.

### 2. Encapsulation

**Bundling the data (properties) and the methods that operate on that data into a single unit, or "capsule" (like a class).** This prevents direct outside access to an object's internal state. For example, a class can have private properties that can only be modified through public methods, giving you more control over your data.

### 3. Inheritance

**The mechanism where a new class (child/subclass) derives properties and methods from an existing class (parent/superclass).** This promotes code reusability. For example, a `Dog` class and a `Cat` class can both inherit a `makeSound()` method from a parent `Animal` class, but each can implement it differently.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  // Dog inherits from Animal
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Output: Mitzie barks.
```

### 4. Polymorphism

**Meaning "many forms," it is the ability of an object or method to take on many forms.** A common example is when a parent class has a method that is overridden by its child classes. The same method name can be used to perform different actions depending on the object that calls it. In the `Inheritance` example above, the `speak()` method exhibits polymorphism.
