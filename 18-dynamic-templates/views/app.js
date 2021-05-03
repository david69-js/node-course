const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.get('/' , (req , res)=>{

   res.render('index', {name: 'My name is David', title: 'Learning NodeJS'});

})

app.listen(port, () =>{
    console.log(`Running server port: ${port} `);
})