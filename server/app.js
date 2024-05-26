/* external imports */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* internal import */
const error = require("./middleware/error.middleware");
const authRouter = require("./routes/v1/auth.route");

/* application level connection */
const app = express();

/* middleware connections */
app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: "GET, PATCH, POST, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

/* router level connections */
app.use("/v1/api/auth", authRouter);

/* global error handler */
app.use(error);

/* connection establishment */
app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "The request is OK",
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
});

/* export application */
module.exports = app;
