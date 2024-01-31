const mongoose = require("mongoose");

const connect = () => {
  // MongoDB Atlas connection string (replace with your own credentials)
  const mongoURI =
    "mongodb+srv://sharmatripti526:wDaKWH2RBtnUH7kG@cluster0.tdnwtlq.mongodb.net/?retryWrites=true&w=majority";

  // Connect to MongoDB Atlas
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  // Check MongoDB Atlas connection
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
  });
};

module.exports = { connect };
