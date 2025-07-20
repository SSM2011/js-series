
function sayMyname() {
    console.log("H")
    console.log("e")
    console.log("h")
    console.log("s")
    console.log("w")
}

// sayMyname()

// function addTwoNumber(number1, number2) {
//    console.log( number1 + number2)
// }


function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     return result
   return number1 + number2
}

const result = addTwoNumber(3, 4)

// console.log("Result:" , result)


// const username = "subodh"

function LoginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(LoginUserMessage("subodh"))
console.log(LoginUserMessage())  // => undefined

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400, 500, 2000))

const user = {
    username: "Subodh",
    price: 199
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username}, and price is ${anyobject.price}`)
}

handleObj(user)


const myNewArr = [200,400,100,600]

function returnsecondval(getArray){
    return getArray[1]
}

console.log(returnsecondval(myNewArr));