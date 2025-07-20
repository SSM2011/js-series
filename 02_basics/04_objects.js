// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sammy",
            lastname: "Karan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const Merged = {...obj1 , ...obj2}
console.log(Merged)



const Users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
       email: "2@gmail.com"
    },
    {

    }

]



console.log(Users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))