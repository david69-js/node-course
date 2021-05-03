const express = require('express');
const bodyParser = require('body-parser');
const data = require('./19-dynamic-template/views/const');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('.mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/' , (req , res)=>{

   res.render('index', 
   {
    othername: 'David', 
    title: 'My first mustache app',
    data: data        
});
})

app.listen(port, () =>{
    console.log(`Running server port: ${port} `);
})