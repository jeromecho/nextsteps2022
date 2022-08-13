var express = require('express');
var router = express.Router();
const Student = require('../models/student');

// TODO - posthackathon, sanitize values

router.post('/', (req, res, next) => {
    const student = new Student({
        username: req.body.username, 
        password: req.body.password,
        name: req.body.name, 
        age: Number(req.body.age),
    });

    student.save(err => {
        if (err) { 
            return next(err)
        }
        res.json('Successfully added user.');
    });
});

module.exports = router;
