const express = require('express');
const passport = require('passport');
const createError = require('http-errors');

const router = express.Router();

const Student = require('../models/student');
const Submission = require('../models/submission');

router.get('/', passport.authenticate({
    failureRedirect: '/',
}));

router.get('/', (req, res, next) => {
    const user = req.user;

    Submission.find({
        student: user,
    }, (err, submissions) => {
        if (err !== null) {
            return next(createError(400));
        }

        res.json(submissions);
    })
});


module.exports = router;