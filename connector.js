// connect to mongodb server
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017`;

mongoose.connect(url, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("connected to mongoDB");
});

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;