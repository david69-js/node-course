const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');

const urlencodedParser =  bodyParser.urlencoded({extended: false})
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'))
app.use(router)


app.listen(port, () =>{
    console.log(`Running server port: ${port} `);
})