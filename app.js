const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

module.exports = app;
