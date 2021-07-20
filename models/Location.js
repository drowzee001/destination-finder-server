const mongoose = require("mongoose");

// Create Schema
const LocationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  place_id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("location", LocationSchema);
