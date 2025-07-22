function MultiByFive(num) {
    return num*5
}

MultiByFive.power = 2

console.log(MultiByFive(5))
console.log(MultiByFive.power)
console.log(MultiByFive.prototype)


function createUser(username, scor) {
    this.username = username
    this.scor = scor
}

createUser.prototype.increment = function () {
    this.scor++
}
createUser.prototype.printMe = function(){
    console.log(`score is: ${this.scor}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()