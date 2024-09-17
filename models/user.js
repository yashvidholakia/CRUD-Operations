const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const User = mongoose.model("user", userSchema)
module.exports=User;