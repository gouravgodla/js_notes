// foreach loop

const coding = ["js", "rb", "py", 'java', "cpp"]

// coding.forEach(function (){})

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach(()=>{})

// coding.forEach((item) => {
//     console.log(item);

// })


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// multiple parameter in foreach 

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

//used in database imp*
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);

})