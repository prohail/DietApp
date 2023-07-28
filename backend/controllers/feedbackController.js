const Feedback = require("../models/feedbackModel");
const mongoose = require("mongoose");

// get all feedbacks
const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.status(200).json(feedbacks);
};

// create new feedback
const createFeedback = async (req, res) => {
  const { name, weight, feedback: userFeedback, time, plan } = req.body; // Rename feedback to userFeedback

  try {
    const feedback = await Feedback.create({
      name,
      weight,
      feedback: userFeedback, // Use the renamed property here
      time,
      plan,
    });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFeedbacks,
  createFeedback,
};
