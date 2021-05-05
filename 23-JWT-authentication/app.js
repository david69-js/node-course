const bodyParser = require('body-parser');
const express = require('express');
const route = require('./routes/route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(route)
app.listen(3000, () =>{
    console.log('Server initializated');
})