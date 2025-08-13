function sayMyName() {
    console.log("G");
    console.log("o");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("v");
}
//call a function
sayMyName();
//reference a function
sayMyName


// normal way or general way
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}


// first way to do above this funtion
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}


// second way to do this 
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 4)
console.log("Result:-", result);


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("gourav"));
console.log(loginUserMessage());


//function with object

function calculateCartPrice(var1, var2, ...num1) {
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 400))


// accessing funtion in another funtion using anyobject
const user = {
    username: "gourav",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)

//anotherway to do above 
handleObject({
    username: "atul",
    price: 399
})

//in form of array

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600]))