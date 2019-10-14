const moduloA = require('../../moduloA.js');
console.log(moduloA.ola);


const C = require('./pastaC/index.js');

console.log(C.ola2);

const http = require('http');
// http.createServer((req, res) => {
//     res.write('Ola Mundo');
//     res.end();
// }).listen(3131);