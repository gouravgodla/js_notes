// Primitive
// 7-types:- String, Number, Boolern, null, undefind, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 26465654655555n

// Reference (Non primitive)
// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "gourav",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive, here we get copy of value)

let myYoutubename = "gouravgodla"

let anothername = myYoutubename
anothername = "gouravgodla-1"

console.log(myYoutubename)
console.log(anothername)

// Heap(Non-Primitive, here we get reference of value)

let userOne = {
    email: "example@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "example-1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);