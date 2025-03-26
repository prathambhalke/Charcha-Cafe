require("dotenv").config();
let express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
let authRoutes = require("./routes/auth.route.js"); // Using require here
let MessageRoutes = require("./routes/message.route.js"); // Using require here

let path = require("path");

const { connectDB } = require("./lib/db.js");
const { app, server } = require("./lib/socket.js");

// Remove the line where you're redefining __dirname
// const __dirname = path.resolve(); // This line should be removed

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
app.use("/api/messages", MessageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Port successfully started on ✅: http://localhost:${PORT}`);
  connectDB();
});
