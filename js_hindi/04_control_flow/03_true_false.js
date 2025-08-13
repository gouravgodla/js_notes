//just true value
// const userEmail = "gourav@gmail.com"
// just false value 
// const userEmail=""
const userEmail = []
if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email")
}


// falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

// array
// if (userEmail.length === 0) {
//     console.log("Array is emtpy");

// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//Nulllish Coalescing Operator

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 
