const mongoose = require("mongoose"); //import mongoose

// data pattern
const mongooseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
});


module.exports = mongoose.model("schema", mongooseSchema);
