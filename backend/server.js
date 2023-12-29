const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://yadavyuva9632:1234@cluster0.kqohcbh.mongodb.net/visual", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Visual = mongoose.connection.collection('visual');

app.get('/getitems', async(req, res) => {
    try {
        // Use the find() method on the Visual collection directly
        const visuals = await Visual.find().toArray();
        res.json(visuals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => {
    console.log("Server started at port 3001");
});