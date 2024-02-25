const mongoose = require('mongoose');
const bcyrpt = require('bcryptjs');

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
})

schema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcyrpt.hash(this.password, 12);
    }
    next();
})
const userSchema = mongoose.model('users', schema);
module.exports = userSchema;