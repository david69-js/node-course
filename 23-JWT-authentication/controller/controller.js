'use strict'
const JsonSchema = require('../schema/schema');

const {generateAccessToken} = require('../functions/app')
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const Controller = {
    getdataUser: (req, res) =>{
        res.send({username: req.user , JsonSchema})
    },
    login: (req, res) =>{
        res.send(`<html >
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method="POST" action="/auth" >
                        Name user: <input type="text" name="username" /><br>
                        Password: <input type="password" name="password"><br>
                        <input type="submit" value="Session init">
                    </form>
                </body>
            </html>
   `)
    }, 
    auth: (req, res)=>{
        const {username, password} = req.body;
        //Consult the database and validate if there are both a password and a name
        const user = { username: username}
        const accessToken = generateAccessToken(user);
        res.header('authorization', accessToken).json({
            message: 'User authenticating', 
            token: accessToken    
        })
    }
}


module.exports = Controller;