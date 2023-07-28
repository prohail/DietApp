const express = require("express");
const {
  createFeedback,
  getFeedbacks,
} = require("../controllers/feedbackController");

const router = express.Router();

// GET all feedbacks
router.get("/", getFeedbacks);

// POST a new feedback
router.post("/", createFeedback);

module.exports = router;
