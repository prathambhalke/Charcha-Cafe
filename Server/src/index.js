require("dotenv").config();
let express = require("express");
const cookieParser = require("cookie-parser");
let authRoutes = require("./routes/auth.route.js"); // Using require here
const { connectDB } = require("./lib/db.js");
let app = express();
let PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server Started on ✅");
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Port successfully started on ✅: http://localhost:${PORT}`);
  connectDB();
});
