const multer = require('multer');
const path = require('path');
// const User = require("../../models/v1/userData.model");
const User = require("../../models/v1/userdata.model");

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // limit to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('image');

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|svg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

const createUser = async (userData, file) => {
  const newUser = new User({
    ...userData,
    image: file ? file.filename : null
  });
  return await newUser.save();
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserByEmails = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData, file) => {
  if (file) {
    userData.image = file.filename;
  }
  return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  upload,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmails
};
