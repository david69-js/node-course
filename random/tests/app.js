var path = require('path');
const util = require("util")
const v8 = require('v8');

const readline = require('readline');
const { exit } = require('process');
const rl = readline.createInterface(process.stdin, process.stdout)

const persona = {
    name: '',
    comment: []
}

rl.question('Whats your name?', (response) =>{
    persona.name = response;
    rl.setPrompt('Your comment, please: ');
    rl.prompt()
})

rl.on('line', (comment)=>{
    if(comment.trim() === 'exit'){ 
        let message = util.format('Your name is %n and is it said me: %c', persona.name, persona.comment)
        console.log(message);
        process.exit();
    }

    persona.comment.push(comment.trim())
    rl.setPrompt('Your comment, please: ');
    rl.prompt()
})

let name = 'Marcos';
let years = 23;

let texto = util.format('Hola %s, tienes %s anios', name, years);
//console.log(v8.getHeapSpaceStatistics());
//console.log(path.join(__dirname, 'jaja', 'jojo','juju')); 
