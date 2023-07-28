const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
