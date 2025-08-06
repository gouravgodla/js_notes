let score = "gourav"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" =>NaN
// true =>1; false=>0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 =>true; 0=>false
// "" => false
// "gourav" =>true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//******************* Opertions ******************************* */

let value = 3
let negValue = -value
console.log(negValue)


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 3);

let str1 = "hello"
let str2 = "gourav"

let str3 = str1 + " " + str2
console.log(str3)

console.log("1" + 2); //output:- 12
console.log(1 + "2"); //output:- 12
console.log("1" + 2 + 2); //output:- 122
console.log(1 + 2 + "2"); //output:- 32
console.log((3 + 4) * 5 % 3) //do not use this type of code in projects 

console.log(+true) //do not use this 
console.log(+"") //do not use this

/*
do not use this 
let num1, num2, num3
num1 = num2 = num3 = 2 + 2 
*/

//game 
let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// Postfix increment
// let x = 3;
// const y = x++;
// x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n

//Prefix increment
// let x = 3;
// const y = ++x;
// x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n
