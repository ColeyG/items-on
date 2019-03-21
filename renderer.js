// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');

let outFromFile = fs.readFileSync('hello.txt', 'utf8');

document.querySelector('.test').style.backgroundColor = 'blue';

console.log(outFromFile);