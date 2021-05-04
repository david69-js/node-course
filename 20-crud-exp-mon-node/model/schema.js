const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelCrud = Schema({
    text: String,
    completed: Boolean
});  

module.exports = mongoose.model('Todo', ModelCrud)