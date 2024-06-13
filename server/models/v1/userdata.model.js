const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please, provide a valid email address"],
    unique: [true, "Email already exists, try another"],
  },
  password: {
    type: String,
    required: [true, "Please, provide a strong password"],
  },
  image: { type: String },
  role: {
    type: String,
    default: "job-seeker",
    required: [true, "Please, choose one that suits you"],
    enum: ["admin", "employer", "job-seeker"],
  },
  location: {
    type: String,
    // optional
  },
});

const User = mongoose.model("UserData", userDataSchema);

module.exports = User;
