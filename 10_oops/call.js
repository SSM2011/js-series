function setUserName(username){
    //complex DB calls
    this.username = username
}

function CreateUser(username, emai,password){

    setUserName.call(this,username)

    this.email = emai
    this.password = password;

}


const chai = new CreateUser("chai", "chai@gmail.com", "123")

console.log(chai)