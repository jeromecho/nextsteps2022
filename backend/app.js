var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Student = require('./models/student');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

passport.use(
    new LocalStrategy((username, password, done) => {
        Student.findOne({ username: username }, (err, user) => {
            if (err) { 
                return done(err);
            } else if (!user) {
                return done(null, false, {
                    message: "Incorrect username"
                });
            } else {
                bcrypt.compare(password, user.password, (err, res) => {
                    if (res) { 
                        return done(null, user);
                    }
                    return done(null, false, { message: "Incorrect password" });
                });
            }
        });
    })
);

passport.serializeUser(function(student, done) {
    done(null, student.id);
});

passport.deserializeUser(function(student, done) {
    Student.findById(id, function (err, student) {
        done(null, student);
    });
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.locals.currentUser = req.user; 
    next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
