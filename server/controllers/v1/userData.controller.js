// const userService = require("../../services/v1/userData.service");
const userService = require("../../services/v1/userData.service");

const createUser = async (req, res, next) => {
  userService.upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    try {
      const newUser = await userService.createUser(req,req.body, req.file, res);
      res.status(201).json(newUser);
    }  catch (error) {
      next(error);
    } finally {
      console.log(`Route: ${req.url} || Method: ${req.method}`);
    }
  });
  // try {
  //   await userService.createUser(req, res, next);
  // } catch (error) {
  //   next(error);
  // } finally {
  //   console.log(`Route: ${req.url} || Method: ${req.method}`);
  // }

};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

const getUserByEmailC = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

const getUserById = async (req, res,next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

const updateUser = (req, res) => {
  userService.upload(req, res,next, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    try {
      const updatedUser = await userService.updateUser(
        req.params.id,
        req.body,
        req.file
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    }  catch (error) {
      next(error);
    } finally {
      console.log(`Route: ${req.url} || Method: ${req.method}`);
    }
  });
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

// Controller to add experience to a user
const addExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experienceData = req.body;
    const updatedUser = await userService.addExperience(id, experienceData);
    res.status(200).json(updatedUser);
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

const addUserVerify = async (req, res) => {
  try {
    await userService.addUserVerify(req, res);
  }  catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmailC,
  addExperience,
  addUserVerify,
};
