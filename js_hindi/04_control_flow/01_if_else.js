// if
// if(condition){}

// const isUserloggedIn = true
// const temperature = 49

// if (temperature <= 40) {
//     console.log("less than 40")
// } else {
//     console.log("temperature is greater than 40")
// }

//------------------------------------------------------------

// <,>,<=,>=,==,===,!=,!==
// sometime error are good
// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.lof(`User power:${power}`)
// }
// console.log(`User power:${power}`)

// const balance = 1000
// // if (balance>500)console.log("test1"),console.log(test2); //do not use this in coding

// if(balance<500){
//     console.log("less than 500");

// }else if(balance<750){
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }

// use this if we have multiple condition to check
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("allow to buy course");
}
if (loggedInFromEmail || loggedInFromEmail) {
    console.log("User logged in");
}