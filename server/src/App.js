const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
var conn = require('./models/conn');

const app = express()

//CONECCION CON MONGO DB
mongoose.connect('mongodb://localhost:27017/Tareas', { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"))
db.once("open", () => console.log("Conexion exitosa a Mongodb"))

//MIDDLEWARES
app
    .use(morgan('dev'))
    .use(express.json())
    .use(cors())

//RUTAS
app.use('/tareas', require('./routes/rutas'))


//SERVIDOR

app.listen(process.env.PORT || 3000, () => {
    console.log('Corriendo servidor en el puerto 3000')
})