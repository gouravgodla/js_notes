// immediately invoked function expressions (IIFE)

// named IIFE
function chai() {
    console.log("DB CONNECTED")
}
chai();

// without named IIFE
((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})("gourav")