// singleton
// Object.create

// object literals

const mySym = Symbol("key 1")


const js_User = {
    name: "Subodh",
    "full name":  "Subodh Mule",
    [mySym] : "mykey1",
    age: 22,
    location: "Pune",
    email: "subodh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(js_User.email)
console.log(js_User['email'])
// console.log(js_User.full name)  error

console.log(js_User['full name'])

console.log(js_User[mySym])

console.log(typeof js_User[mySym])

console.log(typeof [mySym])

js_User.email = "subodh@chatgpt.com"
// Object.freeze(js_User)
js_User.email = "subodh@microsoft.com"

console.log(js_User)

js_User.greeting = function(){
    console.log("Hello js User")
}

js_User.greetingTwo = function(){
    console.log(`Hello Js_user ${this["full name"]}`)
}

console.log(js_User.greeting())
console.log(js_User.greetingTwo())