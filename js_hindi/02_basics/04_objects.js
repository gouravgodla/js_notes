// singleton
// const tinderUser= new object()

//non-singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Gourav"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gourav",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2,obj3) //assign(target,source)
const obj4 = { ...obj1, ...obj2, ...obj3 }

console.log(obj4)

const users = [
    {
        id: 1,
        email: "some1@gmail.com"
    },
    {
        id: 2,
        email: "some2@gmail.com"
    },
    {
        id: 3,
        email: "some3@gmail.com"
    },
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object destructuring and JSON API

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrutor: "gourav"
}
// course.courseInstrutor

const { courseInstrutor: instrutor } = course

// console.log(courseInstrutor);
console.log(instrutor);


// api JSON

// {
//     "name": "gourav",
//         "coursenameone": "js hindi",
//             "price": "free"

// }


// in format of array 

[
    {},
    {},
    {}
]

// gourav singh is good coder and he is go to make it work withoutusing chartgbt in  coding and i will make it at any cost no matter that it take to do this 


