// example 1
let arrIterator = [1, 2, 3];

arrIterator.forEach(function (element, index) {
    console.log({ element, index });
});


// example 2
let asyncForEach = function (array, callback) {
    array.forEach(function (element, index) {
        setTimeout(() => callback(element, index), 0);
    });
};

asyncForEach(arrIterator, function (element, index) {
    console.log({element, index});
});


// example 3
function sleep(sec) {
    let start = new Date().getTime();
    let expire = start + (sec*1000);
    while (new Date().getTime() < expire) {}
    return;
}

sleep(2);

function delayedTimer() {
    console.log('After sometime!😄');
}

console.log('Just normal console😉');

setTimeout(delayedTimer, 2000);


// example 4
function sleep(sec) {
    let start = new Date().getTime();
    let expire = start + (sec*1000);
    while (new Date().getTime() < expire) {}
    return;
}

const promiseObj = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random()*10) + 1;
    sleep(2);
    if(num > 5) {
        resolve(num);
    } else {
        reject(num);
    }
});

promiseObj.then((val) => {
    console.log(val)
}).catch((err) => {
    console.error(err)
})