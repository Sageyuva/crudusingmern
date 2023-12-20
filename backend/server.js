const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const TodoModel = require('./models/todoModel');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://yadavyuva9632:1234@cluster0.kqohcbh.mongodb.net/test");

app.post('/addpost', (req, res) => {
    TodoModel.create(req.body)
        .then(Todos => res.json(Todos))
        .catch(errr => res.json(err))
})

app.get('/getitems', (req, res) => {
    TodoModel.find({})
        .then(Todos => res.json(Todos))
        .catch(err => res.json(err))
})


// app.delete('/deletetodo/:id', (res, req) => {
//     const id = req.params.id;
//     TodoModel.findByIdAndDelete({ _id: id })
//         .then(Todos => res.json(Todos))
//         .catch(err => res.json(err))
// })

app.delete('/deletetodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(Todos => res.json(Todos))
        .catch(err => res.json(err))
});

app.get('/getpost/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findById({ _id: id })
        .then(Todos => res.json(Todos))
        .catch(err => res.json(err))

})

app.put('/updatepost/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndUpdate({ _id: id }, { caption: req.body.caption, heading: req.body.heading })
        .then(Todos => res.json(Todos))
        .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("Server started at port 3001");
})



console.log("Backend folder is running")