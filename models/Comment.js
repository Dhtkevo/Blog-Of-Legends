const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author_name: { type: String, required: true },
    text: { type: String, required: true },
    post_id: { type: mongoose.Types.ObjectId, required: true }
});

module.exports = mongoose.model("Comment", CommentSchema);