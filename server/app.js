/* external imports */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

/* internal import */
const error = require('./middleware/error.middleware');
const authRouter = require('./routes/v1/auth.route');
const userRoute = require('./routes/v1/user.route');
const userdataRoute = require('./routes/v1/userData.route');
const jobsRoute = require('./routes/v1/job.route');
const postjobsRoute = require('./routes/v1/postjob.route');
const blogRoute = require('./routes/v1/blog.route');
const messageRoute = require('./routes/v1/message.route');
const paymentRoute = require('./routes/v1/payment.route');

/* application level connection */
const app = express();

/* middleware connections */
app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: 'GET, PATCH, POST, PUT, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());

/* Serve static files from the "uploads" directory */
app.use('/uploads', express.static('uploads'));

/* router level connections */
app.use('/v1/api/auth', authRouter);
app.use('/v1/api/user', userRoute);
app.use('/v1/api/jobs', jobsRoute);
app.use('/v1/api/postjobs', postjobsRoute);
app.use('/v1/api/userdata', userdataRoute);
app.use('/v1/api/blogs', blogRoute);
app.use('/v1/api/message', messageRoute);
app.use('/v1/api/payment', paymentRoute);

/* global error handler */
app.use(error);

/* connection establishment */
app.get('/', (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: 'OK',
      description: 'The request is OK',
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
});

/* export application */
module.exports = app;
