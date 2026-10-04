const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user is required"],
        ref: "user"
    },
    otpHash: {
        type: String,
        required: [true, "otp hash is required"]
    }
}, {
    timestamps: true
});

const otpModel = mongoose.model('otp', otpSchema);
module.exports = otpModel;