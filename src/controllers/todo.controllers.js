const TodosServices = require('../services/todo.services')



const createTodo = async (req, res) => {
    try {
        
        const newTodo = req.body;
        const todo = await TodosServices.create(newTodo);
        // se encarga de dar respuesta
        res.status(201).json(todo);

    } catch (error) {
        res.status(400).json(error);
        
    }
};

const updateTodo = async (req, res) => {
    try {      
       const {id} = req.params;
       const newData = req.body;
       await TodosServices.update(newData, id);
       res.status(204).send(); 
    } catch (error) {
        res.status(400).json(error);
        
    }
}




const deleteTodo = async (req, res) => {
    try {
       const {id} = req.params
       await TodosServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);  
    }
};





module.exports = { 
    createTodo, deleteTodo, updateTodo
}