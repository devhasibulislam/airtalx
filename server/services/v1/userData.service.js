/* external imports */
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path = require("path");
const User = require("../../models/v1/userdata.model");
const bcrypt = require("bcrypt");
const { sendOTP } = require("./otp.service");
const mailSender = require("../../utils/email.util");
const OTP = require("../../models/v1/otp.model");
const otpGenerator = require("otp-generator");

/* cloudinary config */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (_, file) => {
    return {
      folder: "airtalx",
      public_id: `${Date.now()}_${file.originalname
        .replace(/[^\w\s.-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (_, file, cb) => {
    const supportedImage = /jpg|png|jpeg/i;
    const extension = path.extname(file.originalname);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg format"));
    }
  },
}).single("image");

/* user service functions */

const createUser = async (userData, file, res) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password

  // Check if an image file is uploaded
  let imagePath = null;
  if (file) {
    const uploadResult = await cloudinary.uploader.upload(file.path);
    imagePath = uploadResult.secure_url;
  }

  const user = new User({
    ...userData,
    password: hashedPassword,
    image: imagePath,
  });

  if (user) {
    await user.save();
    // await sendOTP({ body: user }, res);

    const otp = otpGenerator.generate(5, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const result = await OTP.create({
      name: user.name,
      email: user.email,
      otp,
      status: "unverified",
    });

    if (!result) {
      res.status(400).json({
        acknowledgement: false,
        message: "Bad Request",
        description: "Failed to send OTP",
      });
    } else {
      user.otp = result._id;
      // await user.save({
      //   runValidators: false,
      // });

      console.log(user, "USER");

      const usr = await User.updateOne({ _id: user._id }, user);

      console.log(usr, "USR");

      res.status(200).json({
        acknowledgement: true,
        message: "OK",
        description: "OTP sent successfully",
        data: usr,
      });
    }
  }
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData, file) => {
  if (file) {
    const uploadResult = await cloudinary.uploader.upload(file.path);
    userData.image = uploadResult.secure_url;
  }
  return await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
};

const deleteUser = async (id) => {
  const user = await User.findById(id);

  console.log(user);

  if (user) {
    const mailResponse = await mailSender(
      user.email,
      "Account Deletion",
      `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Account Deletion</title>
            <style>
              body {
                font-family: Calibri, sans-serif;
                font-style: normal;
              }
              .reset_button {
                background-color: #008080 !important;
                width: fit-content;
                padding: 10px 15px;
                color: white !important;
                border-radius: 5px;
                font-size: 14px;
                text-decoration: none;
                margin: 20px 0;
                display: block;
              }
            </style>
          </head>
          <body>
            <section>
              <p>Hi ${user.name},</p>
              <div style="margin-bottom: 10px">
                <span>
                  We're pleased to inform you that the government-issued ID you
                  submitted to your airTalX account has been successfully verified. Here
                  are the details:
                </span>
                <br />
                <span>
                  <li>Your Name: ${user.name}</li>
                  <li>Deletion Time: ${new Date()}</li>
                </span>
                <br />
                <span>
                  This Deletion increases the trust between you and potential
                  employers on our platform. You can now apply for jobs with a verified
                  badge on your profile, which signifies that your identity has been
                  confirmed.
                </span>
              </div>
              <br />
              <p>
                If you have any questions or concerns, please feel free to contact our
                support team. Thank you for using airTalX and happy job hunting!
              </p>
              <p>
                <span>Thanks,</span>
                <br />
                <span style="font-weight: bold">AirTalX Team</span>
              </p>
            </section>
          </body>
        </html>
        `
    );

    if (!mailResponse) {
      return res
        .status(500)
        .json({ message: "Failed to send verification email" });
    } else {
      return await User.findByIdAndDelete(id);
    }
  }
};

// Add experience to a user
const addExperience = async (userId, experienceData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.experience.push(experienceData);
  return await user.save();
};

const addUserVerify = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      req.file
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.status === "verified") {
      const user = await User.findById(req.params.id);

      console.log(user);

      const mailResponse = await mailSender(
        user.email,
        "Account Confirmation",
        `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Account Confirmation</title>
            <style>
              body {
                font-family: Calibri, sans-serif;
                font-style: normal;
              }
              .reset_button {
                background-color: #008080 !important;
                width: fit-content;
                padding: 10px 15px;
                color: white !important;
                border-radius: 5px;
                font-size: 14px;
                text-decoration: none;
                margin: 20px 0;
                display: block;
              }
            </style>
          </head>
          <body>
            <section>
              <p>Hi ${user.name},</p>
              <div style="margin-bottom: 10px">
                <span>
                  We're pleased to inform you that the government-issued ID you
                  submitted to your airTalX account has been successfully verified. Here
                  are the details:
                </span>
                <br />
                <span>
                  <li>Your Name: ${user.name}</li>
                  <li>Verification Time: ${new Date()}</li>
                </span>
                <br />
                <span>
                  This verification increases the trust between you and potential
                  employers on our platform. You can now apply for jobs with a verified
                  badge on your profile, which signifies that your identity has been
                  confirmed.
                </span>
              </div>
              <br />
              <p>
                If you have any questions or concerns, please feel free to contact our
                support team. Thank you for using airTalX and happy job hunting!
              </p>
              <p>
                <span>Thanks,</span>
                <br />
                <span style="font-weight: bold">AirTalX Team</span>
              </p>
            </section>
          </body>
        </html>
        `
      );

      if (!mailResponse) {
        return res
          .status(500)
          .json({ message: "Failed to send verification email" });
      }
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  upload,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
  addExperience,
  addUserVerify,
};
