const express = require('express');
const JsonObject = require('./11-static-api/schema');
const {ordersState, ordersSopa} = require('./function.');


const app = express();
const port = 3000;

console.log(JsonObject);

app.get('/', (req, res) =>{
    res.status(200)
    res.send(ordersSopa(JsonObject))
});
app.get('/home', (req, res) =>{
    res.status(200)
    res.send(ordersState(JsonObject))
});
app.get('/test', (req, res) =>{
    res.status(200)
    res.send('<h1>Hello everybody since test</h1>')
});

app.listen(port, () =>{
    console.log(`Server inicializated in port ${port}`);
})

