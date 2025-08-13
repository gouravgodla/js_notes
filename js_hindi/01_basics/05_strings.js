const name = "gourav"
const repoCount = 50

// console.log(name + repoCount +"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('gourav')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 5);
console.log(anotherString);

const newStringOne = "   gourav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gourav.com/gourav20%"

console.log(url.replace('20%', "-"));

console.log(url.includes('gourav'));
console.log(url.includes('singh'));

const gameName1 = new String('gourav-singh-com');
console.log(gameName1.split('-'));
