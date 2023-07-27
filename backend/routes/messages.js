const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

const router = express.Router();

// GET all messages
router.get("/", getMessages);

// POST a new message
router.post("/", createMessage);

module.exports = router;
