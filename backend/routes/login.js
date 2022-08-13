var express = require('express');
var router = express.Router();
var session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Student = require('../models/student');

router.post('/', passport.authenticate("local", {
    successRedirect: '/login',
    failureRedirect: '/login',
}), (req, res) => {
    res.json('Authenticated user', req.user);
});

module.exports = router;
