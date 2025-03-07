let express = require("express");
const {
  signup,
  login,
  logout,
  updateProfile,
  checkAuth,
} = require("../controllers/auth.controller");
const protectRoute = require("../middleware/auth.middleware.js");

let router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

module.exports = router;
