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
  // avator: {
  //   url: { type: String },
  //   id: { type: String },
  // },
  image:{type:String},
  role: {
    type: String,
    default: "job-seeker",
    required: [true, "Please, choose one that suits you"],
    enum: ["admin", "employer", "job-seeker"],
  },
  location: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  portfolio: {
    type: String,
  },
  skill: {
    type: String,
  },
  current_job: {
    type: String,
  },
  current_company: {
    type: String,
  },
  employment: {
    type: String,
  },
  skill_level: {
    type: String,
  },
  salary: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      start_date: {
        type: String,
      },
      end_date: {
        type: String,
      },
      description: {
        type: String,
      },
      location: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("UserData", userDataSchema);

module.exports = User;



