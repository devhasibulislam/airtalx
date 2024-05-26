/* internal imports */
const User = require("../../models/v1/user.model");
const token = require("../../utils/token.util");

/* account registration */
exports.accountRegistration = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Payload is required",
    });
  } else {
    if (req.body.email) {
      const usr = await User.findOne({ email: req.body.email });

      if (usr) {
        res.status(409).json({
          acknowledgement: false,
          message: "Conflict",
          description: "Email already exists",
        });
      } else {
        const user = new User(req.body);

        if (!user) {
          res.status(400).json({
            acknowledgement: false,
            message: "Bad Request",
            description: "Failed to create user",
          });
        } else {
          await user.save();

          res.status(201).json({
            acknowledgement: true,
            message: "Created",
            description: "User created successfully",
          });
        }
      }
    } else {
      res.status(400).json({
        acknowledgement: false,
        message: "Bad Request",
        description: "Email is required",
      });
    }
  }
};

/* account login */
exports.accountLogin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Email and password are required",
    });
  } else {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Invalid email",
      });
    } else {
      const isValid = user.comparePassword(req.body.password, user.password);

      if (!isValid) {
        res.status(401).json({
          acknowledgement: false,
          message: "Unauthorized",
          description: "Invalid password",
        });
      } else {
        if (user.status === "inactive") {
          res.status(401).json({
            acknowledgement: false,
            message: "Unauthorized",
            description: "Your seller account in a review state",
          });
        } else {
          const accessToken = token({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
          });

          res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "You logged in successfully",
            accessToken,
          });
        }
      }
    }
  }
};

/* password reset */
exports.forgotPassword = async (req, res) => {
  if (!req.body.email) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Email is required",
    });
  } else if (!req.body.password) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Password is required",
    });
  } else {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Invalid email",
      });
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { email: req.body.email },
        { password: user.encryptedPassword(req.body.password) },
        {
          runValidators: true,
          returnOriginal: false,
        }
      );

      if (!updatedUser) {
        res.status(400).json({
          acknowledgement: false,
          message: "Bad Request",
          description: "Failed to reset password",
        });
      } else {
        res.status(200).json({
          acknowledgement: true,
          message: "OK",
          description: "Password reset successfully",
        });
      }
    }
  }
};

/* persist login */
exports.persistLogin = async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate([
      {
        path: "posts",
        select: "-__v",
        populate: [
          {
            path: "comments",
            select: "-__v",
          },
          {
            path: "author",
            select: "-password -__v",
          },
        ],
      },
    ])
    .select("-password -__v");

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User logged in successfully",
      data: user,
    });
  }
};
