const express = require('express')
const colors = require('colors')
const server = express();
server.get('/', (req, res) => res.send('<h1>HEllo world with express</h1>'))

server.listen(3000, (req, res)=>{
    console.log('Server run 3000'.red);
})


/*
const http = require('http');
const colors = require('colors');

const handleServer = (req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h2>Hello world</h2>');
    res.end();
}
const server = http.createServer(handleServer)

server.listen(3000, () =>{
    console.log(colors.inverse('Server run 3000 port'));
})


const fs = require('fs');
fs.readFile('text.txt', (err, data) =>{
    if(err) return console.log(err);
    return console.log(data.toString());
})
fs.writeFile('text.txt', "var lineOne = 'Test papa';", (err) =>{
    if(err) return console.log(err);
    return console.log('Created success file');
})
console.log('Last code line');

const os = require('os');
console.log(os.platform());
console.log(os.release());
*/
