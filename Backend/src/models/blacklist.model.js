const mongoose = require('mongoose');

const blackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"]
    },
    type: {
        type: String,
        enum: ["access", "refresh"],
        required: [true, "type is required"]
    }
}, {
    timestamps: true
});

const blacklistModel = mongoose.model('blacklist', blackListSchema);
module.exports = blacklistModel;