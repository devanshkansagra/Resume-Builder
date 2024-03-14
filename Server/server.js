const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const users = require('./schema');
const cors = require('cors');
const cookies = require('cookie-parser');
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
app.use(cookies());


// const generateAuthAndRefreshToken = async (userId) => {
//     try {
//         const user = await users.findById(userId);
//         const authToken = user.generateAuthToken();
//         const refreshToken = user.generateRefreshToken();

//         user.refreshToken = refreshToken;
//         await user.save({ validateBeforeSave: false })

//         return { authToken, refreshToken }
//     } catch (error) {
//         console.log(error);
//     }
// }

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
            const isPasswordCorrect = await user.checkPassword(password);
            if (user && isPasswordCorrect) {
                res.status(201).send({ message: "Logged in successfully" });

            }
            else {
                res.status(401).send({ message: "Invalid Credentials" });
            }

        }
        console.log("Login");

    } catch (error) {
        console.log(error);
    }
})

app.get('/admin', async (req, res) => {

    const usersData = await users.find({});
    res.send(usersData);
})  

app.listen(port, (req, res) => {
    console.log(`Server is live on port ${port}`);
})