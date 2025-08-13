// In JavaScript, the this keyword refers to the object that is currently executing the code.
// Its value is determined at runtime and depends on the context in which the function containing this is called.

const user = {
    username: "gourav",
    price: 999,

    welcomeMessege: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessege();
// user.username = "atul"
// user.welcomeMessege();

// console.log(this);

// function chai() {
//     let username = "gouravsingh"
//     console.log(this.username)
// }

// chai()

// const chai = function () {
//     let username = "atul"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "atul"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

//for objects
const addTwo = (num1, num2) => ({
    username: "gourav"
})

console.log(addTwo(3, 4))

// const myArray = [2, 3, 4, 5, 6, 9]
// myArray.forEach()