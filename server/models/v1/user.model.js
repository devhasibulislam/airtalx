const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

/* encrypt user password */
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = this.encryptedPassword(this.password);
  } catch (error) {
    next(error);
  }
});

/* hash user password */
userSchema.methods.encryptedPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

/* compare user password */
userSchema.methods.comparePassword = function (password, hash) {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
