const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    text: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
  { timestamps: true }
);
let Message = mongoose.model("Message", messageSchema);
module.exports = Message;
