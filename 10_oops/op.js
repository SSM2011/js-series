const user = {
    username: "subodh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (params) {
        // console.log("Got User details from db")
        console.log(`username: ${this.username}`)
    }
}

console.log(user.username)
console.log(user.getUserDetails())


//Constructer Function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;



    return this
}

const userOne = new User("Subodh", 12, true)
const userTwo = new User("chaiaurcode", 14, true)
console.log(userOne.constructor);
console.log(userTwo)
