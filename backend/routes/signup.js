var express = require('express');
var router = express.Router();
const Student = require('../models/student');
const bcrypt = require('bcryptjs');

// TODO - posthackathon, sanitize values

router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
        if (err) { return next(err) }

        const student = new Student({
            username: req.body.username, 
            password: hashedPassword,
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
});

module.exports = router;
