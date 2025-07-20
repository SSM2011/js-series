// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toTimeString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString())

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp  = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getSeconds());
console.log(newDate.getDay() + 1);


console.log(newDate.toLocaleString('default', {
    weekday:"long",
}))