const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const users = require('./schema');
const cors = require('cors');
const bodyParser = require('body-parser');
// Dotenv config
env.config({ path: '../.env' });

// Server Port
const port = 4000;

// Database
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
    console.log("Database connected successfully");
}).catch(() => {
    console.log("Unable to connect to the database");
})

// For Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.post('/signup', async (req, res) => {

    console.log('Signup');
    let { firstName, lastName, email, username, password } = req.body;
    try {

        if (!firstName || !lastName || !email || !username || !password) {
            res.status(422).send({ message: "Details are not entered properly" });
        }

        const response = await users.findOne({ email: email });
        if (response) {
            res.status(403).send({ message: "Email already exists" });
        }
        else {
            const user = new users({ firstName, lastName, email, username, password })
            const userSave = user.save();
            if (userSave) {
                res.status(201).send({ message: "User Registered Successfully" });
                console.log(user);
            }
        }
        console.log("Signup");

    } catch (error) {
        console.log(error);
    }
})
app.post('/login', async (req, res) => {

    let { email, password } = req.body;
    try {

        if (!email, !password) {
            res.status(422).send({ message: "Details are not entered properly" });
        }
        else {
            const user = await users.findOne({ email: email });
            if (user) {
                res.status(201).send({message: "Logged in successfully"})
            }
            else {
                res.status(422).send({ message: "Invalid credentials" });
            }
        }
        console.log("Login");

    } catch (error) {
        console.log(error);
    }
})

app.listen(port, (req, res) => {
    console.log(`Server is live on port ${port}`);
})