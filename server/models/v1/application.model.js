const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    employer_name: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    job_post: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

const Application = mongoose.model("application", applicationSchema);

module.exports = Application;
