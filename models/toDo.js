const { Schema, model } = require('mongoose')

const toDoSchema = new Schema({
    title: {type: String, required: true},
    completed: Boolean
})

const ToDo = model('ToDo', toDoSchema)

module.exports = ToDo