const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");

// Protected route: only logged-in users can create tasks
router.post("/", auth, taskController.createTask);

module.exports = router;
