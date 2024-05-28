/* external import */
const express = require("express");

/* internal import */
const userController = require("../../controllers/v1/auth.controller");
const verify = require("../../middleware/verify.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// account registration
router.post("/register", userController.accountRegistration);
// account login
router.post("/login", userController.accountLogin);
// password reset
router.patch("/reset", userController.accountReset);
// login persist
router.get("/me", verify, userController.accountPersist);

/* export user router */
module.exports = router;
