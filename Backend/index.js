const express = require('express');
const cors = require('cors');
require('./config');
const User = require('./users');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/register', async (req, res) => {
    let newUser = new User(req.body);
    let result = await newUser.save();
    res.send(result);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});