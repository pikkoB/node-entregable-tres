const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const todoRoutes = require('./routes/todo.routes')


initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



const PORT = 8000;

db.authenticate()
.then(() => {
    console.log('base de datos conectada')
})
.catch((error) => console.log(error));


db.sync( { alter: false})
.then(() => console.log('base de datos sincronizada'))
.catch((error) => console.log(error));

app.use(userRoutes);
app.use(todoRoutes);


app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

