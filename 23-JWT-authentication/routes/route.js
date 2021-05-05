const express = require('express');
const Controller = require('../controller/controller');
const route = express.Router();
const {validateToken} = require('../functions/app')

route.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

route.get('/api',validateToken, Controller.getdataUser)
 
route.get('/login' , Controller.login)

route.post('/auth' , Controller.auth)

module.exports = route;