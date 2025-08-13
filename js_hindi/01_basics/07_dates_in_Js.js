// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof (myDate));

let myCreatedDate = new Date(2025, 7, 7)
console.log(myCreatedDate.toDateString());

let myCreatedDateMore = new Date(2023, 7, 7, 5, 3)
console.log(myCreatedDateMore.toLocaleString());

let myCreatedDateformatWayOne = new Date("2025-08-07") //yy-mm-dd format
console.log(myCreatedDateformatWayOne.toLocaleString())

let myCreatedDateformatWayTwo = new Date("07-08-2025") //dd-mm-yy format
console.log(myCreatedDateformatWayOne.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000))


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})