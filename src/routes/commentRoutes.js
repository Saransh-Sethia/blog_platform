const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/comments", authenticateToken, commentController.createComment);

router.get("/comments", authenticateToken, commentController.fetchAllComments);

module.exports = router;