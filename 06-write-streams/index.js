const fs = require('fs');
const { exit } = require('process');
const readline = require('readline');


let i = readline.createInterface(process.stdin, process.stdout);
i.question('Whats your name ? >', (name) =>{

    //fs.writeFileSync(`./${name}.txt`, `Esto dijo: ${name}\n`)
   let stream = fs.createWriteStream(`./${name}.txt`)
   stream.write(`Esto dijo: ${name}\n`);
   process.stdout.write('What do said ?\n');
    i.on('line', (dicho) =>{
        if(dicho.trim() == 'exit') { 
            stream.close();
            i.close();
            exit();
        }else{
            stream.write(dicho.trim()+'\n') 
            //fs.appendFileSync(`./${name}.txt`, dicho.trim()+'\n')
        }
    })
})





/*

let i = readline.createInterface(process.stdin, process.stdout);
i.question('Whats your name ? >', (name) =>{
    fs.writeFileSync(`./${name}.txt`, `Esto dijo: ${name}\n`)
    process.stdout.write('What do said ?\n');
    i.on('line', (dicho) =>{
        if(dicho.trim() == 'exit') { 
            i.close();
        }else{
             fs.appendFileSync(`./${name}.txt`, dicho.trim()+'\n')
        }
    })
})

*/