const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
    text: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
