
const fs = require('fs');


//mkdir sink
//fs.mkdirSync('img')

/*asinc
fs.mkdir('04-basics-file-Operations', (err)=>{
    if(err) throw('Error '+err);

    console.log('Success');
})  
*/

//validate dir exist
if(fs.existsSync('04-basics-file-Operations')) return console.log('File exist');
    fs.mkdir('04-basics-file-Operations', (err)=>{
        if(err) throw('Error '+err);
        console.log('Success');
    })  
