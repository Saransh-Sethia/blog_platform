const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/',authenticateToken, blogController.createBlog);

router.get('/',authenticateToken, blogController.getAllBlogs);

router.put('/:id', authenticateToken, blogController.updateBlog);

router.delete('/:id', authenticateToken, blogController.deleteBlog);

module.exports = router;
