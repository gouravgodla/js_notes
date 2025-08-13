// singleton
// object.create

//object literals

const mySym = Symbol("key1") //symbol [] use this to access and declear it


const JsUser = {
    //key-value pairs
    name: "gourav",
    "full name": "Gourav Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Punjab",
    email: "example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
// to access value from objects
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
//symbol access []
console.log(JsUser[mySym])


JsUser.email = "example-1@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "example-2@gmail.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


