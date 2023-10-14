const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true, minLength: 5 },
    text: { type: String, required: true, minLength: 5 },
    published: { type: Boolean, default: false },
    user_id: { type: mongoose.Types.ObjectId, ref: "User", required: true,
         }
}, {timestamps: true});

module.exports = mongoose.model("Post", PostSchema);