const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    comments: {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
    }
},{
    timestamps: true,
});

const Blog = mongoose.model("Blogs",blogSchema);

module.exports = Blog;

