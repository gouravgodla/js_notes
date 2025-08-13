// global scope
let a = 300
if (true) {
    // local scope
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}
// console.log(a);


// scope level and mini hoisting

function one() {
    const username = "gourav";

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one 
if (true) {
    const username = "gourav"
    if (username === "gourav") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) error because access outsite the scope
}
// console.log(username) error because access outsite the scope




// +++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++// 
// hoisting in js

function addone(num) {
    return num + 1
}

addTwo(5)
function addTwo() {
    return num + 2
}

