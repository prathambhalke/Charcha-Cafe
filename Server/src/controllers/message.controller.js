const User = require("../models/user.model.js");
const Message = require("../models/message.model.js");
const cloudinary = require("cloudinary");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.findOneAndReplace({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMessages = async () => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const sendMessages = async () => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const { senderId } = req.user._id;
    let imageUrl;

    if (image) {
      //upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;

      const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
      });

      //todo: realtime functionality here => socket.io
      await newMessage.save();

      res.status(201).json(newMessage);
    }
  } catch (error) {
    console.log("Error in sendMessages controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getUsersForSidebar, getMessages, sendMessages };
