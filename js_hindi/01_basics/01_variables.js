// const can't change
const accountId = 144553

let accountEmail = "example@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState; //undefined
// accountId = 2 //not allowed

accountEmail = "example-1@gmail.com"
accountPassword = "242424"
accountCity = "Bengaluru"

console.log(accountId)

/* 
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])