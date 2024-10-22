const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    user1Id: { type: Schema.Types.ObjectId, ref: "User" },
    user2Id: { type: Schema.Types.ObjectId, ref: "User" },
    messages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
