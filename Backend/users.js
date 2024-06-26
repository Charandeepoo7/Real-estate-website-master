const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    createPassword: String,
    confirmPassword: String
});

module.exports = mongoose.model('users', userSchema);