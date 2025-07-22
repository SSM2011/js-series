const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptograpy, network

    setTimeout(function () {
        console.log('Async task completed')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed")
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved")
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Subodh", email: "subodh@gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'subodh', password: '12' })
        } else {
            reject('ERROR: Something wents wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch((err) => { console.log(err) }).finally(() => {
    console.log("finally done")
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'sam', password: '123' })
        } else {
            reject('ERROR: js wents wrong')
        }
    }, 1000);
});


async function consumeProFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumeProFive()

// async function getallUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>
    console.log(error)
)