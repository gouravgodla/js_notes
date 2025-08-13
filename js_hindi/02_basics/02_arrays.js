const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //use existing array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //give new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operator syntax (...)
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
//in place of infinity use a depth vaule you want array to go to, it will give spread output in array.
console.log(real_another_array);



console.log(Array.isArray("gourav"))
console.log(Array.from("gourav"))
console.log(Array.from({ name: "gourav" }))// key-value pair 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

