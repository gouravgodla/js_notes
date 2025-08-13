//forin loop for object
// for (const key in object) {

// }

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//forin loop for array

const programming = ["js", "rb", "py", 'java', "cpp"]
for (const key in programming) {
    console.log(programming[key]);

}

