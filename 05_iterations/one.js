// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
        // console.log("5 is best number");
    }
    // console.log(element)
    
}


for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        // console.log(`Inner Loop Value: ${j} and Outer loop ${i})`);

        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}


// break and continue

// for (let index = 1; index < 21; index++) {
//     if(index === 5){
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(index)
    
// }

for (let index = 1; index < 21; index++) {
    if(index === 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(index)
    
}

