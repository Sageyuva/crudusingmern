const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    heading: String,
    caption: String,
});

const TodoModel = mongoose.model("Todos", todoSchema)
module.exports = TodoModel