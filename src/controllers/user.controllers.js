const UsersServices = require('../services/user.services')


const createUser = async (req, res) => {
    try {
       
        const newUser = req.body;
        
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error);
        
    }
};

const getUserWhithTodos =  async (req, res) => {
    try {
        const { userId } = req.params;
        const userWhithTodos = await UsersServices.userWhithTodos(userId);
        res.json(userWhithTodos);

    } catch (error) {
        res.status(400).json(error);
        
    }
};


module.exports = {
    createUser, getUserWhithTodos,
}