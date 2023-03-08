const { Router } = require('express');


const { 
    createTodo, deleteTodo, updateTodo
    } = require('../controllers/todo.controllers')

const router = Router();


router.post('/api/v1/todos', createTodo);

router.put('/api/v1/todos/:id' , updateTodo);

router.delete('/api/v1/todos/:id', deleteTodo);


module.exports = router;