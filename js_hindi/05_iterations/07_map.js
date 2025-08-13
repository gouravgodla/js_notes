const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumber.map((num) => {
//     return num + 10
// })

// chaining mathod in js

const newNums = myNumber
    .map((num) => { return num * 10 })
    .map((num) => { return num + 1 })
    .filter((num) => { return num >= 40 })

console.log(newNums);
