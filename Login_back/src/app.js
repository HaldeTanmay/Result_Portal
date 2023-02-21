
const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
// const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const { db } = require("./models/Users");
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
require('./db/conn');

// const User = require('./models/Users');

app.use(cors());

app.use(express.json());
app.use(require('./router/auth'));
const middleware = (req, res, next) => {
    console.log("middleware");
    next();
}

app.get("/about", middleware, (req, res) => {
    console.log("about");
    res.send('HELLO ');
});



app.listen(PORT, () => {
    console.log("hellooooooo");
})

