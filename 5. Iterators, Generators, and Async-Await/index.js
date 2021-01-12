// example 1
let numberArray = [1,2,3]; 

numberArray.forEach((element) => {
    console.log(element*2)
})


// example 2
function createFlowOfElements(array) {
    let idx = 0;
    const innerObj = {
        next:
            function () {
                const element = array[idx];
                idx++;
                return element;
            }
    }
    return innerObj;
};

const returnNextElement = createFlowOfElements([1,2,3])
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()


// example 3
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const returnNextElement = generator()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()


// example 4
function* generator(){
    const newNum = yield 4;
    yield 5 + newNum;
}

const returnNextElement = generator()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next(13) // pass 13 as argument to next function


// example 5
// -------------------------------------------------------------------------------
// assume here we are getting back 'hello' string back from https://test.com 
// -------------------------------------------------------------------------------
function* generator() {
    const data = yield fetch('https://test.com');
    console.log(data);
}

const returnNextElement = generator();
const dataPromiseObject = returnNextElement.next();

dataPromiseObject.then((data) => {
    returnNextElement.next(data);
});


// example 6
// -------------------------------------------------------------------------------
// assume here we are getting back 'hello' string back from https://test.com 
// -------------------------------------------------------------------------------
async function generator() {
    const data = await fetch('https://test.com');
    console.log(data);
}
