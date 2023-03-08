const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./category.models');

const initModels = () => {
    // toda relacion entre User y Posts
    // * belongsTo pertenece a uno
    // * hasMany tiene muchos

    Users.hasMany(Todos, { foreignKey: "userId" });
    Todos.belongsTo(Users, { foreignKey: "userId" });

    Categories.hasMany(Todos, { foreignKey: "categoryId" });
    Todos.belongsTo(Categories, { foreignKey: "categoryId" });

}

module.exports = initModels;

// listo un endpoint para crear usuarios
// listo un endpoint para que un usuario pueda crear tareas ( Cuando un usuario crea una tarea debe seleccionarse la categoria a la que esta pertenece)
// listo un endpoint para obtener todas las tareas de un usuario incluidas sus categorias
// - un endpoint para que un usuario cambiar el status de una tarea (pendiente a completada) por defecto una tarea se crea con el status pendiente
// listo un endpoint que permita eliminar tareas