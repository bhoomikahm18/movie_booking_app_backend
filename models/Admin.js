const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    addedMovies: [
        {
            type: String,
        },
    ],
});

module.exports = mongoose.model("Admin", adminSchema);