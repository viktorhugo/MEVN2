const express = require('express')
const morgan = require('morgan');
const cors = require('cors')

const app = express()

//MIDDLEWARES
app
    .use(morgan('combined'))
    .use(express.json())
    .use(cors())

//RUTAS
app.get('/tareas', (req, res, next) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Corriendo servidor en el puerto 3000')
})