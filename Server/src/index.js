require("dotenv").config();
let express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
let authRoutes = require("./routes/auth.route.js"); // Using require here
let MessageRoutes = require("./routes/message.route.js"); // Using require here
const { connectDB } = require("./lib/db.js");
let app = express();
let PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server Started on ✅");
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", MessageRoutes);

app.listen(PORT, () => {
  console.log(`Port successfully started on ✅: http://localhost:${PORT}`);
  connectDB();
});
