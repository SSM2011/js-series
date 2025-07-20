// Immediately Invoked Function Expression (IIFE)

(function chai(){

    //named IIFE
    console.log("DB CONNECTED");
    
})();

// chai()


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('subodh');