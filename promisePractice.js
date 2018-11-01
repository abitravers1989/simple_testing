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