var express = require('express');
var router = express.Router();
var session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Student = require('../models/student');

router.post('/', passport.authenticate("local", {
    successRedirect: '/login',
    failureRedirect: '/login/a'
}));

router.get('/', (req, res, next) => {
    res.json('success');
    // res.json('Authenticated user', req.user);
});

router.get('/a', (req, res, next) => {
    res.json('failure');
    // res.json('Authenticated user', req.user);
});

module.exports = router;
