
const fs = require('fs');
const http = require('http');

fs.readFile('./file1.txt', 'utf8', (err, data) => {
    console.log(data); // 'Hello guys 1'
});
fs.readFile('./file2.txt', 'utf8', (err, data) => {
    console.log(data); // 'Hello guys 2'
});

console.log('I am synchronous!');

process.nextTick(() => {
    console.log('nextTick');
});

setImmediate(() => {
    console.log('immediate');
});

http.get('http://dummy.restapiexample.com/api/v1/employee/1', (res) => {
    console.log(res.statusMessage, '1');
});
http.get('http://dummy.restapiexample.com/api/v1/employee/2', (res) => {
    console.log(res.statusMessage, '2');
});

Promise.resolve('Success Promise').then(function(val) {
    console.log(val); // "Success Promise"
})

setTimeout(() => {
    console.log('timeout');
}, 0);

