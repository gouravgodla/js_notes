// variable = a container that stores a value.
// behaves as if it were the value it contain.

// 1. declaration let x;
// 2. assignment x=100;

// numbers 
let age = 25;
let price = 10.99;
let gpa = 7.5;
// output using console.log()
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is:${gpa}`);

// how to known type of datatype or variable  used in here we you typeof
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa)


// strings
// to create a string use '' or ""

let firtName = "gourav";
let favoriteAnime = "AOT and OP";
let email = "hjyg@gmail.com";

console.log(firtName);
console.log(favoriteAnime);
console.log(email);
console.log(typeof email)

// Booleans
// it only give two output true or false
let online = true;
let forSale = false;
let isStudent = true;
console.log(` is gourav online: ${online}`);
console.log(`is this car is for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);


//example
let fullname = "gourav";
let age1 = 25;
let isstudent = false;
document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are  ${age1} year old`;
document.getElementById("p3").textContent = `enrolled ${isstudent}`;


