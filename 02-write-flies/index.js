const fs = require('fs');

const file = 'Text.txt';
const content = '\nThis is my text content 23';
//validar si existe el archivo
//if(fs.existsSync(file)) return console.log('Exist file');
//console.log('Not exist');

/*
fs.access(file, fs.constants.F_OK, (err) =>{
    if(err) return console.log('File is not exist');
    //fs.writeFileSync(file, content)
    fs.writeFile(file, content, (err) =>{
        if(err) return  console.log(err);
        console.log('Wrote file');
    })
    
})*/

fs.appendFile(file, content, (err) =>{
    if(err) return console.log('is not append');
    console.log('append success');
    
})

