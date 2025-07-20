const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got User Email");
}else {
    console.log("dont have user email");
}

// false values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//True values

// "0", "false", " ", [], {}, function(){}

// if (userEmail.length ==== 0) {
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Obj is empty")
}


// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10

val1 = null ?? 10



console.log(val1)


// Terniary Operator

// condition ? true : false   

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80") 