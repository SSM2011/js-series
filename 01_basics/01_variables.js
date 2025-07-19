const accountId = 144553
let accountEmail = "subodh@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

let accountState;

// accountId = 2  // Not allowed to change


accountEmail = "hc@hc.com"
accountPassword = "21234"
accountCity = "Pune"

// console.log(accountEmail);

// prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountPassword, accountEmail, accountCity, accountState])
