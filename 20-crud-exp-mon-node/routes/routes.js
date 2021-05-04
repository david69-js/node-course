const express = require('express');
const route = express.Router();
const todoController = require('../controllers/controller');

route.post('/add', todoController.addTodo)
route.get('/get-all-todo', todoController.getAllTodo)
route.get('/get-todo/:id', todoController.getTodo)
route.put('/update-todo/:id', todoController.updateTodo);
route.delete('/delete-todo/:id', todoController.deleteTodo);
module.exports = route;