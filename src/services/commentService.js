const Comment = require("../models/Comment");
const Blog = require("../models/Blog")

const createComment = async(commentData) => {
    try{
// const blog = await Blog.findOne({_id:blogId});
// if(!blog){
//     res.status(404).json({message: "Blog NOT Found"}) //NOT FOUND
// };

const newComment = await Comment.create(commentData);
const savedComment = newComment.save();
return savedComment;
    } catch(error){
        throw error
    }
};

const fetchAllComments = async(userId) => {
    try{
const comments = await Comment.find({author: userId});
return comments;
    } catch(error){
        throw error;
    }
}

module.exports = {createComment, fetchAllComments}