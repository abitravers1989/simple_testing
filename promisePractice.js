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
const promise = new Promise()

//change the status
const promise2 = new Promise((resolve, reject) => {
    //resolve changes status to fulfilled
    resolve()
    //reject changes it to rejected.
    reject()
})