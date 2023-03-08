const { Router } = require('express');
const { createUser, getUserWhithTodos,  } = require('../controllers/user.controllers')



const router = Router();

router.get('/api/v1/users/:userId/todos', getUserWhithTodos)

router.post('/api/v1/users', createUser ) // controlador
// router.put('/api/v1/users/:id', updateUser )


module.exports = router;