const fs = require('fs')

/*
let data = fs.readFileSync('./text.txt')
console.log(data.length);
*/

let stream = fs.createReadStream('./text.txt', 'utf-8')
let data = '';
stream.once('data', ()=>{
    console.log('Start stream');
})

stream.on('data', (chunk)=>{
    console.log(chunk.length);
    data+=chunk;
})
stream.on('end', () =>{
    console.log('End stream');
    console.log(data.length);
})