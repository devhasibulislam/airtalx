// routes/userRoutes.js

const express = require("express");
const userController = require("../../controllers/v1/userData.controller");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/email/:email", userController.getUserByEmailC);

module.exports = router;