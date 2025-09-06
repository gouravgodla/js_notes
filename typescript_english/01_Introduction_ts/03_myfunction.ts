function addTwo(num:number):number{
    return num +2
    // return "hello" error
}
function getUpper(val:string){
    return val.toLowerCase()
}
function signUpUser(name:string,email:string,password:string,isPaid:boolean){
    
}

let loginUser=(name:string,email:string,isPaid=false)=>{}


addTwo(5)
getUpper('Gourav')
signUpUser("gourav","gourav","goura@gmail",false)
loginUser('gourav','gourav@gmail')


// this can give us error as we don't know how to pass multi type for values like boolean,string,number
// function getValue(myValue:number):boolean{
//     if(myValue>5){
//         return true
//     }
//     return "200 OK"
// }



const getHello=(s:string):string=>{
    return ""
}

const heros=["thor",'spiderman','ironman']
// const heros=[1,2,3]

heros.map(hero=>{
    return `hero id ${hero}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg);

}

function handleError(errmsg:string):never{
    throw new Error(errmsg)

}

export{}