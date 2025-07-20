// If 

// const IsLoggedIn = true;
// const Temperature = 51

// if (Temperature < 50 ){
//     console.log("less than 50")
// }else{

// console.log("temperature is greater than 50")
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }


// const balance = 800

// // if (balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
    
// }else if (balance <750){
//    console.log("balance is less than 750");
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromemail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if(loggedInFromGoogle || loggedInFromemail){
    console.log("User Logged In");
}