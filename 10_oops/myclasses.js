// After ES6 

class User {
    constructor(username, email, password, githubid){
        this.userNav = username;
        this.email = email;
        this.password = password;
        this.gitId = githubid
    }

    encrtypassword(){
        return `${this.password}abc`
    }
    userCap(){
        return `${this.userNav.toUpperCase()}`
    }
}

const Isharacoffee = new User("Isharacoffee", "Isharacoffee@gmail.com", "sfudahf", "uuuuuuuuuu") 
console.log(Isharacoffee.encrtypassword())
console.log(Isharacoffee.userCap())

// behind the scene

function User(userNav, email, password){
    this.userNav = userNav;
    this.email = email;
    this.password = password;
}

User.prototype.encrtypassword = function(){
    return `${this.password}`
}