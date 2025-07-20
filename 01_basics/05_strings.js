const name = "Pranav"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('subodh-sm')

console.log(gameName[1])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase()) // => original value does not change because it is in stack memory where we get the copy of primitive data types

console.log(gameName)  
console.log(gameName.charAt(2))

console.log(gameName.indexOf("m"))
console.log(gameName.toLowerCase());

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)

console.log(anotherString)

const newSTringOne = "   Subodh   "
console.log(newSTringOne)
console.log(newSTringOne.trim())   // => remove starting and end space

const url = "https://subodh.com/subodh%20mule"

console.log(url.replace('%20', '-'))

console.log(url.includes('subodh'))

console.log(gameName.split('-'))


const newvar = "new variable" 

console.log(newvar.split(" "))