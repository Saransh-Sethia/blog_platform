const blogService = require("../services/blogService");

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.id;

    const blog = await blogService.createBlog({
      author,
      title,
      content,
    });

    // console.log("Blog Created", blog);

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogId = req.user.id;
    const query = req.query;
    console.log('query', query)
    const blogs = await blogService.getAllBlogs(blogId, query);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogId = req.user.id;
    const updatedData = req.body;

    const blog = await blogService.updateBlog(id, blogId, updatedData);
    console.log("blog updated", blog);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" }); //NOT FOUND
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogId = req.user.id;

    const blog = await blogService.deleteBlog(id, blogId);

    if (!blog) {
      return res.status(404).json({ message: "Task Not Found" }); //NOT FOUND
    } else {
      res.status(204).send()
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
