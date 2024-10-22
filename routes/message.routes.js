const router = require("express").Router();
const Message = require("../models/Message.model.js");
const Conversation = require("../models/Conversation.model.js");
const User = require("../models/User.model.js");

//Post a message
router.post("/chat", async (req, res, next) => {
  try {
    //Get text, sender and receiver from the request body
    const { text, sender, receiver } = req.body;

    //Check if text, sender and receiver are provided
    if (!text || !sender || !receiver) {
      res.status(400).json({
        message: "Message requires text, sender, receiver",
      });
      return;
    }
    //Check if conversation exists between the two users
    let conversation = await Conversation.findOne({
      $or: [
        { user1Id: sender, user2Id: receiver },
        { user1Id: receiver, user2Id: sender },
      ],
    });

    //If no conversation exists, create a new conversation and push it to the users conversations array
    if (!conversation) {
      conversation = await Conversation.create({
        user1Id: sender,
        user2Id: receiver,
        members: [sender, receiver],
        messages: [],
      });

      await Promise.all([
        User.findByIdAndUpdate(sender, {
          $push: { conversations: conversation._id },
        }),
        User.findByIdAndUpdate(receiver, {
          $push: { conversations: conversation._id },
        }),
      ]);
    }

    const newMessage = await Message.create({
      text: text,
      sender: sender,
      receiver: receiver,
      conversation: conversation._id,
    });

    await Conversation.findByIdAndUpdate(
      conversation._id,
      {
        $push: { messages: newMessage._id },
      },
      { new: true }
    );

    await Promise.all([
      User.findByIdAndUpdate(sender, {
        $push: { sentMessages: newMessage._id },
      }),
      User.findByIdAndUpdate(receiver, {
        $push: {
          receivedMessages: newMessage._id,
          notifications: newMessage._id,
        },
      }),
    ]);

    res.status(200).json(newMessage);
  } catch (err) {
    console.log("Error sending message", err);
    next(err);
  }
});

module.exports = router;
