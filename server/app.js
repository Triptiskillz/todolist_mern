const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const db = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
db.connect();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
