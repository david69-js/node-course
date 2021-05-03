const events = require('events')
const emitter = new events.EventEmitter();

emitter.on('eventoCustom', (message, state) =>{
    
    console.log(`${state}: ${message}`);   
})

emitter.emit('eventoCustom', 'Success message', 200)