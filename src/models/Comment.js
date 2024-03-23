const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    // blog: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Blog",
    //     required: true
    // },
    comments: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
},{
    timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment