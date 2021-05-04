const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./user');

const app = express();
const mongo_uri = 'mongodb://localhost:27017/Todo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname+'/public')));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(mongo_uri, { useUnifiedTopology: true }, err =>{
    if(err) throw err;
    return console.log(`Successfully connect: ${mongo_uri}`);
})

app.post('/register' , (req , res)=>{
const {username, password} = req.body;
const user = new User({username, password});
        user.save((err, user) =>{
            if(err) return res.status(500).send({message: 'An error has occurred'});
            if(!user) return res.status(404).send({message: 'Error, 404 not saving'});
            return res.status(200).redirect('/');
        })
})
app.post('/authenticate' , (req , res)=>{
    const {username, password} = req.body;

    User.findOne({username}, (err, user)  =>{
        if (err) return res.status(500).send('Failed to authentecate user');
        if(!user) return res.status(500).send('500 user not found');
        
        user.isCorrectPassword(password, (err, result ) =>{
            if(err) return res.status(500).send('Authentication error');
            if(result) return res.status(200).send('User authenticated successfully')
                        return res.status(500).send('User and/or Inconrrect password')
        }) 
    });
})
   

app.listen(3000, () =>{
    console.log('Run server port 3000');
})

