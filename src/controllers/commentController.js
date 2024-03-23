const commentService = require("../services/commentService");

const createComment = async(req,res) => {
    try{
// const {id} = req.params;
const {comments} = req.body
const author = req.user.id;

const comment = await commentService.createComment({ 
    // id,
    comments,
    author
});
console.log('comment',comment);

res.status(201).json(comment);
    } catch(error){
        console.log("error",error)
        res.status(500).json({message: error.message})
    }
};

const fetchAllComments = async(req,res) => {
    try{
         const userId = req.user.id;
         const comments = await commentService.fetchAllComments(userId);

         res.status(200).json(comments)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = {createComment, fetchAllComments}