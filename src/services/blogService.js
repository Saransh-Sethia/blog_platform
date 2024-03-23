const Blog = require("../models/Blog");

const createBlog = async (blogData) => {
  try {
    const blog = await Blog.create(blogData);

    return blog;
  } catch (error) {
    throw error;
  }
};

const getAllBlogs = async (blogId, query) => {
  try {
    const blogs = await Blog.find({ author: blogId});
    // console.log("All Blogs", blogs)
    return blogs;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async(id, blogId, updatedData) => {
    try{
const blog = await Blog.findOneAndUpdate(
    {_id: id, author: blogId},
    {$set: updatedData},
    {new: true}
);
return blog
    } catch(error){
        throw error;
    }
};

const deleteBlog = async(id, blogId) => {
    try{
const blog = await Blog.findOneAndDelete(
    {_id: id, author: blogId}
);
return blog;
    } catch(error){
        throw error;
    }
}

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
