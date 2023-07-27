const Message = require("../models/messageModel");
const mongoose = require("mongoose");

// get all messages
const getMessages = async (req, res) => {
  const messages = await Message.find();
  res.status(200).json(messages);
};

// create new message
const createMessage = async (req, res) => {
  const { name, email, mssg } = req.body;

  try {
    const message = await Message.create({ name, email, mssg });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getMessages,
  createMessage,
};
