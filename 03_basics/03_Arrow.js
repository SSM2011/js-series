const user = {
    username: "sam",
    price: "999",

    welcomeMessage: function(){
        console.log(`Welcome to Website, ${this.username}`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Subodh"
// user.welcomeMessage()

// console.log(this)

// function Chai(){
//     let username = "subodh"
//     console.log(this.username)
// }

// Chai()


// const Chai = function (){
//     let username = "subodh"
//     console.log(this.username)
// }

const Chai = () => {
    let username = "subodh"
    console.log(this)
}

// Chai()


// const addTwo  = (num1, num2) => {
//     return num1 +num2
// }

// const addTwo  = (num1, num2) =>  num1 +num2  //=> implicit return function
// const addTwo  = (num1, num2) =>  (num1 +num2  )

const addTwo  = (num1, num2) =>  ({username: "subodh"})


console.log(addTwo(4,8))

// const myArray = [2,4,5,6,7]
