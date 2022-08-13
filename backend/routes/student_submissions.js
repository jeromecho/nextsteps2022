const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');

router.get('/', (req, res) => {
    Submission.find().populate('student').exec((err, submissions) =>{
        if (err) { return next(err) }
        console.log(submissions);
        console.log(submissions[0].student.name)
        res.json(submissions);
    })
});

module.exports = router;
