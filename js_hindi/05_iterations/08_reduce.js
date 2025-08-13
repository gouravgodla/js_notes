// from mdn-doc
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//example
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator:- ${accumulator} and currentValue:- ${currentValue}`);
//     return accumulator + currentValue
// }, 3)
// console.log(myTotal);

// using arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "web course",
        price: 4999
    },
    {
        itemName: "mobile developer course",
        price: 9999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
