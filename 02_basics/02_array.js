const Marvel_heros = ["Thor", 'IronMan', 'spiderman']
const dc_heros = ['superman', 'batman', 'flash']

// Marvel_heros.push(dc_heros)

// console.log(Marvel_heros)
// console.log(Marvel_heros[3][1])

// const all_heros = Marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...Marvel_heros, ...dc_heros]

// console.log(all_new_heros)

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("Subodh"))
console.log(Array.from("Subodh"))
console.log(Array.from({name: "subodh"}))  //interesting

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

console.log(Array.of(scoreOne, scoreTwo, scoreThree))