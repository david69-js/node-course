const express = require('express')
const app = express.Router()
const fs = require('fs')

app.get('/', (req, res) =>{
    res.status(200)
    res.send('hola')
})
.get('/get-movies', (req, res) =>{
    const file = fs.readFileSync('./public/movies.json', 'utf-8');
    res.setHeader('Content-type', 'text/json');
    res.send(file);
});

app.post('/new' , (req , res)=>{
    res.setHeader('content-type', 'text/plain')
    const name = req.body.name;
    const rating = req.body.rating;

    //open file 
    let file = fs.readFileSync('./public/movies.json', 'utf-8');
    
    //convert to an array 
    const json = JSON.parse(file)

    //Insert an new element
    json.movies.push({"name": name, "rating": parseInt(rating)})

    //save json in to file
   file = fs.writeFileSync('./public/movies.json', JSON.stringify(json))
   res.send('Save data sucess')
})

module.exports = app;