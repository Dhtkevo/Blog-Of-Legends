const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true, minLength: 5 },
    text: { type: String, required: true, minLength: 10 },
    published: { type: Boolean, default: false },
    user_id: { type: mongoose.Types.ObjectId, required: true }
});

module.exports = mongoose.model("Post", PostSchema);