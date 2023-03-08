const Todos = require('../models/todos.models');
const Users = require('../models/users.models')

class UsersServices {
    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser)
            return userCreated; // este return es el que va a llegar al servicio y se almacena en la variable de result del controlador
        } catch (error) {
            throw error;
        }
    }

    static async userWhithTodos(userId) {
        try {
            const result = await Users.findByPk(userId, {
                include: {
                    model: Todos,
                }
            })
            return result
        } catch (error) {
            throw error;
        }
    }


}


module.exports = UsersServices;