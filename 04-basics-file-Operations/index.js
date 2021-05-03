const fs = require('fs')

//synchronous rename
//fs.renameSync('./Text.txt', './test.txt')

/*asynchroncus rename
fs.rename('test.txt', 'newName.txt', (err) =>{
    if(err) throw('Errorrr '+err);
    console.log('Rename success');
})
*/
/*move file
fs.rename('new.txt', 'src/test.txt', (err) =>{
    if(err) return console.log(err);
    console.log('Rename success');
});
*/
//delete file
//fs.unlinkSync('./newName.txt');