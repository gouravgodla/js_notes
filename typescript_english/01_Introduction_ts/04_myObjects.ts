// const User={
//     name:"gourav",
//     email:"example@gmail.com",
//     isActive:true
// }

// function  createUser({name:string,isPaid:boolean}){}

// // createUser({name:"gourav",isPaid:false}


// // here bad behaviour of typescript it allow to pass it
// let newUser={name:"gourav",isPaid:false,email:"example@gmail.com"}

// createUser(newUser)


// function createCourse():{name:string,price:number}{
//     return {name:"ts",price:699}
// }


// tyes aliases

// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser(user:User): User{
//     return {name:'',email:'',isActive:true}
// }

// createUser({name:'',email:'',isActive:true})

type User ={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    credCardDetails?:number
}

let myUser: User={
    _id:"232",
    name:"h",
    email:"h#hgmail",
    isActive:false
}

type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDate:string
}

// to combine these two we use ?
type cardDetails=cardNumber & cardDate & {
    cvv:number
}


myUser.email="g@gmail.com"

// Cannot assign to '_id' because it is a read-only property
// myUser._id="908"

