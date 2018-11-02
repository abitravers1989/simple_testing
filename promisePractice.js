let keepWord;

keepWord = true;

promise1 = new Promise(function (resolve, reject) {
    if (keepWord) {
        resolve("the man kept his word")
    } else {
        reject("the man didn't want to keep his word")
    }
})

console.log(promise1);



//callbacks
function add(x, y) {
    return x + y;
}

function addFive(x, addReference) {
    return addReference(5, x)
}

console.log(addFive(28, add))

function higherOrderFunction(x, callback) {
    return callback(5, x)
}

higherOrderFunction(10, add)

//Promises 
//3 states : pending, fulfilled, rejected

//how do you create a promise
//how do you change a satus of a promise
//how do you listen for when the status of a promise changes?

//create
//const promise = new Promise()

//change the status
const promise2 = new Promise((resolve, reject) => {
    //resolve changes status to fulfilled
    resolve()
    //reject changes it to rejected.
    reject()
})

console.log(Promise.then);

//when status of promise changes to fulfiled then status will be passed to then
//when status is changed to rejected it is passed to catch. the function that you pass to .catch

function onSuccess() {
    console.log('success')
}

function onError() {
    console.log('failed')
}

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve() //changes status to fulfilled
    }, 2000)
})

promise.then(onSuccess)
promise.catch(onError)

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject() //changes status to rejected
    }, 2000)
})

promise3.then(onSuccess)
promise3.catch(onError)



//wrapping JQuery (sick emoji) in promises 

function getUser(id) {
    return new Promise = function (resolve, reject) {
        $.getJSON({
            url: `https://api.github.com/users/${id}`,
            success: resolve("you can pass stuff here which you can access"),
            error: reject,
        })
    }
}

function getWeather(user) {
    return new Promise = ((resolve, reject) => {
        $.getJSON({
            url: getLocationURL(user.location.split(',')),
            success: resolve,
            error: reject,
        })
    })
}

$("#btn").on("click", () => {
    const userPromise = getUser('userznames')

    userPromise.then((user) => {
        const weatherPromise = getWeather(user)
        weatherPromise.then((weather) => {
            //do something
        })
        weatherPromise.catch(showError)
    })
    userPromise.catch(showError)
})

//imporved 

function getUser(id) {
    return new Promise = function (resolve, reject) {
        $.getJSON({
            url: `https://api.github.com/users/${id}`,
            success: resolve("you can pass stuff here which you can access"),
            error: reject,
        })
    }
}

function getWeather(user) {
    return new Promise = ((resolve, reject) => {
        $.getJSON({
            url: getLocationURL(user.location.split(',')),
            success: resolve,
            error: reject,
        })
    })
}

$("#btn").on("click", () => {
    getUser('userznames')
        .then(getWeather)
        .then((wether) => {
            updateUI()
        })
        .catch(showError)
})



//https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/