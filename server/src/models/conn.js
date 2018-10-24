const mongoose = require('mongoose')
var Schema = mongoose.Schema

var modelSchema = new Schema({
    titulo: String,
    descripcion: String
})

var conn = mongoose.model('tareas', modelSchema)

module.exports = conn;