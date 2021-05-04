const mongoose = require('mongoose');
const app = require('./app')
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todo', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("The connection to the database is successful");
    app.listen(port, ()=>{
        console.log(`Run server in the port: ${port}`)
    })

    }).catch((err) => {
        console.log(err)            
    });