const express = require('express');
var bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const urlencodedParser =  bodyParser.urlencoded({extended: false})

const app = express();
const port = 3000;

app.get('/', urlencodedParser, (req, res) =>{
    res.status(200)
    res.send(`<h1>Are you data is : <br/> ${req.query.name} ${req.query.username}</h1>`)
    console.log(req.query);
});
app.listen(port, () =>{
    console.log(`Server inicializated in port ${port}`);
})