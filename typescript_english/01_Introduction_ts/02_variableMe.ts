let greetings:string ="Hello Gourav"

// greetings=9  here we can see it do not allow it because it check for types of variable it assign

greetings.toLowerCase()

console.log(greetings);

// number  
let userId:number=87240892.8
// or 
//let userId=7587249.08
userId.toFixed()
console.log(userId);

// boolean
let isLoggedIn:boolean=false
//or
// let isLoggedIn=false
console.log(isLoggedIn);

// any - TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

let hero:any;

function getHero(){
    return "Thor"
}

hero=getHero()

export {}

