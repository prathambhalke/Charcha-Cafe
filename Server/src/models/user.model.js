const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
    profilePic: {
      type: "string",
      default: "",
    },
  },
  { timestamps: true }
);
let user = mongoose.model("User", userSchema);
module.exports = user;
