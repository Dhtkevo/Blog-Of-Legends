const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, minLength: 4, unique: true },
    password: { type: String, required: true, minLength: 8 },
    is_admin: { type: Boolean, default: false },
    token: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
