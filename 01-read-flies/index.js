'use strict'
const fs = require('fs')
//let files = fs.readFileSync('./')
fs.readdir('./', (err, files) =>{
    if(err) throw err;
    console.log(files);

    //let file = fs.readFileSync('./fazt/text.txt', 'utf-8')
    
    fs.readFile('./fazt/text.txt', (err, file2) =>{
        if(err) throw err;
        console.log(file2.toString());
    })
    console.log('Readed success file');
  //  console.log(file);
})