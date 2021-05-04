const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const salRounds = 10; //Bcryp know, how to many times should yo encrypt
  
const Schema = mongoose.Schema;

const modelUser = Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
modelUser.pre('save', function(next) {
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password, salRounds, function(err, hashedPassword) {
            if(err) return next(err);
            document.password = hashedPassword;
            next();
        })
    }else{
        next();
    }
});

modelUser.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same){
        if(err) return callback(err);
        callback(err, same)
    })
}

module.exports = mongoose.model('User', modelUser)

