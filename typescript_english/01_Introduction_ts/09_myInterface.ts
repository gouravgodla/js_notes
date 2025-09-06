interface User {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    startTrail:()=>string
    // startTrial():string
    getCoupon(couponname:string, value:number):number
    
}

interface User{
    githubToken:string
}

interface Admin extends User {
    role:"admin"|"ta"|"learner"
}

const gourav:User={dbId:22, email:"g@g.com",
    userId:221,
    githubToken:'github',
    startTrail: ()=>{
        return "trail started"
    },
    getCoupon :(name:"gg8",value:30) =>{
        return 10
    },
}
gourav.email="ggg"
