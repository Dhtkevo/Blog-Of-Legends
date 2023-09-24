const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/userRouter');
const commentRouter = require('./routes/commentRouter');
const postRouter = require('./routes/postRouter');
const indexRouter = require('./routes/index');

const app = express();

const mongoose = require("mongoose");

require('dotenv').config();

mongoose.set("strictQuery", false);


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/users', userRouter);
app.use('/index', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
