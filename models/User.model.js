const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  conversations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Conversation",
  },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  sentMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  receivedMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

module.exports = mongoose.model("User", UserSchema);
