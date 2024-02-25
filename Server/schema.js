const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
})

// Function syntax is used due to the usage of this keyword
schema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

schema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

schema.methods.genenerateAuthToken = async function () {
    return await jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: process.env.SECRET_KEY_EXPIRY
        }
    )
}

schema.methods.genenerateRefreshToken = async function () {
    return await jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
const userSchema = mongoose.model('users', schema);
module.exports = userSchema;