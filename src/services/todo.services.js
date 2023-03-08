const Todos = require('../models/todos.models');

class TodosServices {

    static async create(newTodo) {
        try {
            const result = await Todos.create(newTodo); // espera el modelo ,y aplica create pasando info de la nueva todo
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(newData, id) {
        try {
            const result = await Todos.update(newData , {
                where: {id},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }



    static async delete(id) {
        try {
            const result = await Todos.destroy({
                where: {id},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = TodosServices;