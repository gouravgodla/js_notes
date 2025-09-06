let score:number | string = 33

// number type 
score=44

// string type 
score="44"


type User={
    name:string
    id:number
}

type Admin={
    username:string
    id:number
}

// let gourav:User | Admin ={name:'gourav',id:343}
// gourav = {username:'gg',id:343}

// function  getDbId(id:number|string){
//     // making api call 
//     console.log(`DB id is: ${id}`);
// }

// getDbId(3)
// getDbId('3')


function getDbId(id:number | string){
    if(typeof id==='string'){
        id.toLowerCase()
    }
}

// array 
const data: number[]=[1,2,3]
const data2: string[]=["1","2","3"]
const data3:(string | number | boolean)[]=[1,"2",true]


// another use case

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment="aisle"

// this will give error 
// seatAllotment="crew"





