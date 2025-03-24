let express = require("express");
const protectRoute = require("../middleware/auth.middleware.js");
const {
  getUsersForSidebar,
  getMessages,
  sendMessages,
} = require("../controllers/message.controller.js");

let router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessages);

module.exports = router;
