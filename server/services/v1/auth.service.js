/* internal imports */
const User = require("../../models/v1/user.model");
const token = require("../../utils/token.util");
const { sendOTP } = require("./otp.service");

/* account registration */
exports.accountRegistration = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Payload is required",
    });
  } else {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(409).json({
        acknowledgement: false,
        message: "Conflict",
        description: "Email already exists",
      });
    } else {
      const result = new User(req.body);

      if (!result) {
        res.status(400).json({
          acknowledgement: false,
          message: "Bad Request",
          description: "Check given info to recreate user",
        });
      } else {
        await result.save();
        await sendOTP(req, res);
      }
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
        description: "User not found",
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
            description: "Your account is not active",
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
            description: "User logged in successfully",
            accessToken,
          });
        }
      }
    }
  }
};

/* password reset */
exports.accountReset = async (req, res) => {
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
        description: "Try with a valid email address",
      });
    } else {
      const result = await User.findByIdAndUpdate(
        user?._id,
        { password: user.encryptedPassword(req.body.password) },
        {
          runValidators: true,
          returnOriginal: false,
        }
      );

      if (!result) {
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
exports.accountPersist = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "Please, login to continue",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Please, continue exploring",
      data: user,
    });
  }
};
