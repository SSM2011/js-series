// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt, 


const score = 100
const scoreVal = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //  => false

const bigNumber = 2348092333333n 

// Reference (Non Primitive)

// Array, Objects, Functions

const heros =  ["Thor", "Batman", "SpyderMan"]
let myObj = {
    name: "subodh",
    age: 21
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)