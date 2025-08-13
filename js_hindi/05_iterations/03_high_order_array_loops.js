// forof loop

// for (const element of object) {

// }


// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)

}

// Map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // this will not add because it store unique key-value pair

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);

}



// const myObject = {
//     "game": "NFS",
//     "game": "Spiderman"
// }
// TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);

// }


