'use strict'
const Schema = require('../model/schema')

const controller = {
    addTodo: (req, res) =>{
        let todo = new Schema();
            todo.text = req.body.text;
            todo.completed = false
            todo.save((err, todoSaved) =>{
                if(err) return res.status(500).send({message: 'An error has occurred'});
                if(!todoSaved) return res.status(404).send({message: 'Error, 404 not saving'});
                return res.status(200).redirect('/');
            })
    },                          //add filter            
    getAllTodo: (req, res) =>{ //  Schema.find({}, 'text completed')
            Schema.find({}).sort('year').exec((err, todos) =>{
                if(err) return res.status(500).send({message: "An error has occurred"});
                if(!todos) return res.status(404).send({message: "404 todos not founds"});
                return res.status(200).send({response: 'success', todos})  
            })
    },
    getTodo: (req, res) =>{
        let todoId = req.params.id;     
        if(todoId == null) return res.status(404).send({message: "Failled to get todo"})
        Schema.findById(todoId, (err, todo) =>{
            if(err) return res.status(500).send({message: "An error has occurred"});
            if(!todo) return res.status(404).send({message: "Error 404 todo not found"});
            return res.status(200).send({response: 'success',todo})
        });
    }, 
    updateTodo: (req, res) => {
        let todoId = req.params.id;
        let update = req.body;
        Schema.findOneAndUpdate(todoId, update, {new: true}, (err, todoUpdate)  =>{
            if(err) return res.status(500).send({message: "An error has occurred"});
            if(!todoUpdate) return res.status(404).send({message: "Error 404 todo not found"});
            return res.status(200).send({response: 'success',todoUpdate })
        });
    },
    deleteTodo: (req, res) =>{
        let todoId = req.params.id;
        Schema.findOneAndRemove(todoId, (err, todoDelete) =>{
            if(err) return res.status(500).send({message: "An error has occurred"});
            if(!todoDelete) return res.status(404).send({message: "Error 404 todo not found"});
            return res.status(200).send({response: 'success',todoDelete})
        })
    }
}

module.exports = controller;