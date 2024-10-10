//type conversion = change the datatype of a value to another
//                  (string, number, booleans)

// example1
// let age = window.prompt("How old are you?")
// use of type conversion do not remove this line of comment
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// example2
let x = "pizza";
let y = "pizza";
let z = "pizza";
// we can also use 0,empty value,or undefined in place of pizza
x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);